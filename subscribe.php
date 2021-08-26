<?php

## CONFIG ##

# LIST EMAIL ADDRESS
$recipient = "j.drobny@pygmalios.com";

# SUBJECT (Subscribe/Remove)
$subject = "New newsletter subscriber";

# RESULT PAGE
$location = "https://pygmalios.com/futureoftelco/";

## FORM VALUES ##

# SENDER - WE ALSO USE THE RECIPIENT AS SENDER IN THIS SAMPLE
# DON'T INCLUDE UNFILTERED USER INPUT IN THE MAIL HEADER!
$sender = $recipient;

# MAIL BODY
$body .= "Email: ".$_REQUEST['Email']." \n";
# add more fields here if required

## SEND MESSGAE ##

mail( $recipient, $subject, $body, "From: $sender" ) or die ("Mail could not be sent.");

## SHOW RESULT PAGE ##

header( "Location: $location" );
?>