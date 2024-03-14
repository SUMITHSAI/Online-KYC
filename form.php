<?php
$name = $_POST['name'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$email_from='km0686@srmist.edu.in';
$email_subject='New Form Submission';

$emai_body="User Name: $name.\n".
            "User Email: $visitor_email.\n".
             "Subject: $subject.\n".
             "User Message: $message .\n";

$to='km0686@srmist.edu.in';

$headers="From: $email_from \r\n";

$headers.="Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$eamil_body,$headers);
header("Location: contact-us.html");

?>