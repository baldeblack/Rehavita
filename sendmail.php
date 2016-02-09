<?php
/*
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['mensaje'])) {

    //check if any of the inputs are empty
    if (empty($_POST['nombre']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['mensaje'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }



    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['nombre'];
    $mail->AddAddress('gbg933@gmail.com'); //recipient 
    $mail->Subject = $_POST['subject'];
    $mail->Body = "Nombre: " . $_POST['nombre'] . "\r\n\r\nMensaje: " . stripslashes($_POST['mensaje']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }


    system.out.println($_POST['nombre']);
    system.out.println($_POST['email']);
    system.out.println($_POST['subject']);
    system.out.println($_POST['mensaje']);
    system.out.println($_POST['ref']);

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'El correo no se pudo enviar. Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'El correo se envio correctamente');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Por favor complete correctamente el formulario');
    echo json_encode($data);

}
*/






$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data
// validate the variables ======================================================
if (empty($_POST['nombre']))
$errors['name'] = 'Nombre es requerido.';
if (empty($_POST['email']))
$errors['email'] = 'Email es requerido.';
if (empty($_POST['subject']))
$errors['subject'] = 'Subject es requerido.';
if (empty($_POST['mensaje']))
$errors['message'] = 'Mensaje es requerido.';
// return a response ===========================================================
// response if there are errors
if ( ! empty($errors)) {
  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Error al enviar consulta';
} else {
  // if there are no errors, return a message
  $data['success'] = true;
  $data['messageSuccess'] = 'La consulta se envio correctamente';
  // CHANGE THE TWO LINES BELOW
  $email_to = "gbaldenegro@gilums.com";
  $email_subject = $_POST['subject'];
  $name = $_POST['nombre']; // required
  $email_from = $_POST['email']; // required
  $message = $_POST['mensaje']; // required
  $email_message = "Form details below.nn";
  $email_message .= "Name: ".$name."n";
  $email_message .= "Email: ".$email_from."n";
  $email_message .= "Message: ".$message."n";
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
}
// return all our data to an AJAX call
echo json_encode($data);

?>