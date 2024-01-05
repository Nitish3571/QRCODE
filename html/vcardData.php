<?php
require_once "connection.php";
if(isset($_GET['email'])){
$urlEmail = $_GET['email'];
$email =base64_decode($urlEmail);
$select = "select * from vcard where email='".$email."'";
$result = mysqli_query($connection , $select);
$records = mysqli_fetch_array($result);
// var_dump($records);
}

?>

<!doctype html>
<html lang="en">
  <head>
    <title>VCard</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS v5.2.1 -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <style>
      body{
        background: #f2f2f2;
      }
      .row{
        width:400px;

      }
      .card{
        border-radius: 15px 50px ;
        border: 1px solid yellow;
      }
    </style>
  </head>

  <body >
    <div class="container d-flex justify-content-center align-items-center pt-5">
      <div class="row d-flex justify-content-center align-items-center">
      <!-- <div class="card-deck"> -->
      <div class="card">
      <div class="card-body ">
        <h3 class="text-center">VCard</h3>
        <p class="card-text">First Name: <?php echo (!empty($records['firstname'] ) ? $records['firstname'] : ''); ?></p>
        <p class="card-text">Last Name: <?php echo (!empty($records['lastname'] ) ? $records['lastname'] : ''); ?></p>
        <p class="card-text">Email Id: <a class="text-decoration-none" href="mailto:<?php echo (!empty($records['email'] ) ? $records['email'] : ''); ?>"><?php echo (!empty($records['email'] ) ? $records['email'] : ''); ?></a></p>
        <p class="card-text">Phone No: <a class="text-decoration-none" href="tel:<?php echo (!empty($records['mobile'] ) ? $records['mobile'] : ''); ?>"><?php echo (!empty($records['mobile'] ) ? $records['mobile'] : ''); ?></a></p>
        <p class="card-text">Website: <a class="text-decoration-none" href="<?php echo (!empty($records['website'] ) ? $records['website'] : ''); ?>"><?php echo (!empty($records['website'] ) ? $records['website'] : ''); ?></a></p>
        <p class="card-text">Company: <?php echo (!empty($records['company'] ) ? $records['company'] : ''); ?></p>
        <p class="card-text">Designation: <?php echo (!empty($records['designation'] ) ? $records['designation'] : ''); ?></p>
        <p class="card-text">Address: <?php echo (!empty($records['address'] ) ? $records['address'] : ''); ?></p>
        <p class="card-text">Message: <?php echo (!empty($records['message'] ) ? $records['message'] : ''); ?></p>

      </div>
    </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
      integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
