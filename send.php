<?php

$to  = "<dronbest@gmail.com>, " ;
$to .= "k8fpppn@yandex.ru, ";
// $to.= "еще почта";

$subject = 'НОВАЯ ЗАЯВКА'; //.$_SERVER['HTTP_HOST'];

$message = $_POST['mailText'];

$headers .= "Content-Type: text/html; charset=utf-8" ;

mail($to, $subject, $message, $headers);
?>