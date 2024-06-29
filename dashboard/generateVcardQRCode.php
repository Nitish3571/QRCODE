<?php
require_once "connection.php";
require_once "vendor/autoload.php";
use chillerlan\QRCode\QRCode;


// Assuming you have a valid database connection named $connection
// if(isset($_POST)){
//   $firstname = (!empty($_POST['firstname']) ? $_POST['firstname'] : '');
//   $lastname = (!empty($_POST['lastname']) ? $_POST['lastname'] : '');
//   $email = (!empty($_POST['email']) ? $_POST['email'] : '');
//   $mobile = (!empty($_POST['mobile']) ? $_POST['mobile'] : '');
//   $website = (!empty($_POST['website']) ? $_POST['website'] : '');
//   $company = (!empty($_POST['company']) ? $_POST['company'] : '');
//   $designation = (!empty($_POST['designation']) ? $_POST['designation'] : '');
//   $address = (!empty($_POST['address']) ? $_POST['address'] : '');
//   $message = (!empty($_POST['message']) ? $_POST['message'] : '');

//   $insertQuery = "INSERT INTO vcard (firstname, lastname, email, mobile, website, company, designation, address, message )
//                   VALUES ('$firstname', '$lastname', '$email', '$mobile', '$website', '$company', '$designation', '$address', '$message' )";

//   // Assuming $connection is a valid MySQLi connection


//   $select = "select * from vcard where email = '".$email."'";
//   $resultS = mysqli_query($connection , $select);
//   if ($resultS->num_rows > 0) {
//     $updateQuery = "UPDATE vcard SET
//     firstname = '$firstname',
//     lastname = '$lastname',
//     email = '$email',
//     mobile = '$mobile',
//     website = '$website',
//     company = '$company',
//     designation = '$designation',
//     address = '$address',
//     message = '$message'
//     WHERE email = '$email'";

//   $result = mysqli_query($connection, $updateQuery);

//   }else{
//     $result = $connection->query($insertQuery);
//   }

// // QR CODE link url send in side qrcode
// // $urlEmail = base64_encode($email);
// // $urlLink = "http://localhost/qrcode/html/vcardData.php?email=$urlEmail";

// // $qr_image = (new QRCode)->render($urlLink);
// // echo json_encode(['code' => 'success' ,'content' => '<img src ="'.$qr_image.'" alt="Qr_code" /> ']);

// }



// Extracting data from the POST request
// var_dump($_FILES);die;
// var_dump($_FILES['fileVCard']['name']);
// var_dump($_POST);die;
extract($_POST);

// Initializing the vCard string with the standard vCard header
$VCard = "BEGIN:VCARD\r\n";
$VCard .= "VERSION:3.0\r\n";

// Checking if each form field is not empty and adding it to the vCard
if (!empty($firstname) && !empty($lastname)) {
  $VCard .= "N:$lastname;$firstname\r\n";
  $VCard .= "FN:$firstname $lastname\r\n";
}
if (!empty($email)) {
  $VCard .= "EMAIL:$email\r\n";
}
if (!empty($phone)) {
  $VCard .= "TEL:$phone\r\n";
}
if (!empty($website)) {
  $VCard .= "URL:$website\r\n";
}
if (!empty($company)) {
  $VCard .= "ORG:$company\r\n";
}
if (!empty($designation)) {
  $VCard .= "TITLE:$designation\r\n";
}
if (!empty($address)) {
  // Use the ADR field with individual components
  $VCard .= "ADR;TYPE=WORK,PREF:;;$address;;;\r\n";
}

// $photo = $_FILES['fileVCard']['name'];
// Adding the vCard footer
$VCard .= "END:VCARD";

// Using the chillerlan\QRCode library to render the vCard as a QR code
$qr_image = (new QRCode)->render($VCard);

// Sending a JSON response including the QR code image, success code, and the generated vCard
echo json_encode(['code' => 'success' ,'content' => '<img src ="'.$qr_image.'" alt="Qr_code" /> ' , 'vcard' => $VCard ]);

?>
