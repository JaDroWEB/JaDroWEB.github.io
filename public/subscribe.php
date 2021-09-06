<?php
if(!isset($_POST['Submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}

$visitor_email = $_POST['Email'];


//Validate first
if(empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$captcha = checkReCaptcha();
if (is_object($captcha) and isset($captcha->score) and $captcha->score < 0.5 and $captcha->action == 'newsletter1' || 'newsletter2') {
  echo "Bad recaptcha check!";
  exit;
}



$email_from = '';//<== update the email address
$email_subject = "New newsletter subscriber";
$email_subject = '=?utf-8?B?'.base64_encode($email_subject).'?=';
$email_body = "Email of new subscriber: $visitor_email";
    
$to = "j.demcak@pygmalios.com, marketing@pygmalios.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
$headers .= "MIME-Version: 1.0" ."\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers.= "X-Mailer: PHP/" . phpversion();

//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: index.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}



function checkReCaptcha()
    {
        $response = null;

        if (isset($_POST['recaptcha_token']) and !empty($_POST['recaptcha_token'])) {
            // Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha_secret = '6LdOsj0cAAAAAHOkfvlWkV6s7NgiWFlTGJNJDRM8';
            $recaptcha_response = $_POST['recaptcha_token'];

            // Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);

            $response = $recaptcha;
        }

        return [
            'response' => $response,
        ];
    }
   
?> 