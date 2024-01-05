// generate QR Code for sms ************************************************************************
var isQRCodeGenerated = false;
function generateSMSQRCode() {
  // Clear the existing QR code
  if (isQRCodeGenerated) {
    // Clear the existing QR code
    document.getElementById("qrcodeSMS").innerHTML = '';
  }
  var phoneNumbersms = document.getElementById("phoneNumbersms").value;
  var messagesms = document.getElementById("messagesms").value;

  var qrCodeColorsms = document.getElementById("qrCodeColorsms").value;
  var backgroundColorsms = document.getElementById("backgroundColorsms").value;

  // Construct the SMS link
  var smsLink = "sms:" + encodeURIComponent(phoneNumbersms) + "?body=" + encodeURIComponent(messagesms);

  // Create a QR Code with customized options
  var qrcode = new QRCode(document.getElementById("qrcodeSMS"), {
      text: smsLink,
      width: 300,
      height: 300,
      colorDark: qrCodeColorsms,
      colorLight: backgroundColorsms,
      scale:4,
  });

  document.querySelector('#qrCodeCardsms').style.backgroundColor = backgroundColorsms;

  var fileInput = document.getElementById('fileSMS');
  var file = fileInput.files[0];

  if (file) {
      var logo = document.createElement('img');
      logo.id = 'logosms';
      logo.alt = 'logo';

      logo.style.height = '50px';
      logo.style.background = 'white';
      logo.style.width = '50px';
      logo.style.borderRadius = '50%';
      logo.style.display = 'center';
      logo.style.alignItems = 'center';
      logo.style.textAlign = 'center';

      // Create a URL for the selected file
      var objectURL = URL.createObjectURL(file);

      logo.src = objectURL;

      var qrcodeSMSElement = document.getElementById('qrcodeSMS');
      qrcodeSMSElement.appendChild(logo);
  }
  document.getElementById('nameLabelsms').style.color = qrCodeColorsms;

  // Show the QR code card and enable the download button
  document.getElementById('qrCodeCardsms').style.display = 'block';
  document.getElementById('downloadButtonsms').disabled = false;

  isQRCodeGenerated = true;
}

// download QR Code for sms *********

function downloadQRCodesmsImage(e) {
  console.log(e.title);
  var title = e.title;
  var qrCodeCard = document.getElementById("qrCodeCardsms");
  switch(title){
    case "jpg":
      domtoimage.toJpeg(qrCodeCard).then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "sms_qrcode.jpg";
          link.href = dataUrl;
          link.click();
        });
    break;
    case "png":
      domtoimage.toPng(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "sms_qrcode.png";
        link.href = dataUrl;
        link.click();
      });
    break;
    case "svg":
      domtoimage.toSvg(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "sms_qrcode.svg";
        link.href = dataUrl;
        link.click();
      });
    break;
    default:
      console.log("Not a valid option");

  }
}

//  for generate phone QR code ******************************************************************
function generatePhoneQRCode() {
  if (isQRCodeGenerated) {
    // Clear the existing QR code
    document.getElementById("qrcodePhonecall").innerHTML = '';
  }
    // Get phone number from the form field
    var phoneNumbercall = document.getElementById("phoneNumbercall").value;

    // Get color values from the color pickers
    var qrCodeColorcall = document.getElementById("qrCodeColorcall").value;
    var backgroundColorcall = document.getElementById("backgroundColorcall").value;

    // Construct the tel link
    var telLink = "tel:" + encodeURIComponent(phoneNumbercall);

    // Create a QR Code with customized options
    var qrcode = new QRCode(document.getElementById("qrcodePhonecall"), {
        text: telLink,
        width: 300,
        height: 300,
        colorDark: qrCodeColorcall, // Custom QR code color
        colorLight: backgroundColorcall, // Custom background color
    });
    var fileInput = document.getElementById('fileCall');
    var file = fileInput.files[0];
    if (file) {
        var logo = document.createElement('img');
        logo.id = 'logocall';
        logo.alt = 'logo';

        logo.style.height = '50px';
        logo.style.background = 'white';
        logo.style.width = '50px';
        logo.style.borderRadius = '50%';
        logo.style.display = 'flex';
        logo.style.alignItems = 'center';
        logo.style.textAlign = 'center';

        // Create a URL for the selected file
        var objectURL = URL.createObjectURL(file);

        logo.src = objectURL;

        var qrcodeSMSElement = document.getElementById('qrcodePhonecall');
        qrcodeSMSElement.appendChild(logo);
    }
    // Set the color of the card background
    document.querySelector('#qrCodeCardcall').style.backgroundColor = backgroundColorcall;

    // Set the color of the additional information labels
    // document.getElementById('phoneLabelcall').style.color = qrCodeColor;
    document.getElementById('nameLabelcall').style.color = qrCodeColorcall;

    // Show the QR code card and enable the download button
    document.getElementById('qrCodeCardcall').style.display = 'block';
    document.getElementById('downloadButtoncall').disabled = false;

    isQRCodeGenerated = true;
}


function downloadQRCodecallImage(e) {
  console.log(e.title);
  var title = e.title;
  var qrCodeCard = document.getElementById("qrCodeCardcall");
  switch(title){
    case "jpg":
      domtoimage.toJpeg(qrCodeCard).then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "call_qrcode.jpg";
          link.href = dataUrl;
          link.click();
        });
    break;
    case "png":
      domtoimage.toPng(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "call_qrcode.png";
        link.href = dataUrl;
        link.click();
      });
    break;
    case "svg":
      domtoimage.toSvg(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "call_qrcode.svg";
        link.href = dataUrl;
        link.click();
      });
    break;
    default:
      console.log("Not a valid option");
  }
}

//  for generating url QR Code *******************************************************************

function generateQRCodeurl() {
  console.log(isQRCodeGenerated);
  if (isQRCodeGenerated) {
    // Clear the existing QR code
    document.getElementById("qr-codeurl").innerHTML = '';
  }
    var url = document.getElementById('url').value;
    var color = document.getElementById('colorurl').value;
    var background = document.getElementById('backgroundurl').value;

    // Generate QR code
    var qr = new QRCode(document.getElementById("qr-codeurl"), {
        text: url,
        width: 300,
        height: 300,
        colorDark: color, // Fix variable name
        colorLight: background, // Fix variable name
        scale: 4,
    });

    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];

    if (file) {
        var logo = document.createElement('img');
        logo.id = 'logourl';
        logo.alt = 'logo';

        logo.style.height = '50px';
        logo.style.background = 'white';
        logo.style.background = 'white';
        logo.style.width = '50px';
        logo.style.borderRadius = '50%';

        // Create a URL for the selected file
        var objectURL = URL.createObjectURL(file);

        logo.src = objectURL;

        var qrcodeSMSElement = document.getElementById('qr-codeurl');
        qrcodeSMSElement.appendChild(logo);
    }

    document.getElementById('qr-containerurl').style.display = 'block';
    document.getElementById('downloadButtonurl').disabled = false;

    isQRCodeGenerated = true;
}

// download QR Code for URL***************

function downloadQRCodeurl(e) {
  console.log(e.title);
  var title = e.title;
  var qrCodeCard = document.getElementById("qr-containerurl");
  // var hasQRCodeImage = qrCodeCard && qrCodeCard.querySelector('img');

  // if (hasQRCodeImage) {

  switch(title){
    case "jpg":
      domtoimage.toJpeg(qrCodeCard).then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "url_qrcode.jpg";
          link.href = dataUrl;
          link.click();
        });
    break;
    case "png":
      domtoimage.toPng(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "url_qrcode.png";
        link.href = dataUrl;
        link.click();
      });
    break;
    case "svg":
      domtoimage.toSvg(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "url_qrcode.svg";
        link.href = dataUrl;
        link.click();
      });
    break;
    default:
      console.log("Not a valid option");
  }

// }
}

// for generating mail QR Code *****************************************************************
function generateEmailQRCode() {
  if (isQRCodeGenerated) {
    // Clear the existing QR code
    document.getElementById("qr-codeemail").innerHTML = '';
}
    var to = document.getElementById("to").value;
    var cc = document.getElementById("cc").value;
    var bcc = document.getElementById("bcc").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var qrCodeColor = document.getElementById("qrCodeColorEmail").value;
    var backgroundColor = document.getElementById("backgroundColorEmail").value;

    var mailtoLink = "mailto:" + encodeURIComponent(to);
    mailtoLink += cc ? "?cc=" + encodeURIComponent(cc) : "";
    mailtoLink += bcc ? (cc ? "&bcc=" : "?bcc=") + encodeURIComponent(bcc) : "";
    mailtoLink += "&subject=" + encodeURIComponent(subject);
    mailtoLink += "&body=" + encodeURIComponent(message);

    var qrcode = new QRCode(document.getElementById("qr-codeemail"), {
        text: mailtoLink,
        width: 300,
        height:300,
        colorDark: qrCodeColor,
        colorLight: backgroundColor,
    });
    var fileInput = document.getElementById('fileEmail');
    var file = fileInput.files[0];

    if (file) {
        var logo = document.createElement('img');
        logo.id = 'logoemail';
        logo.alt = 'logo';

        logo.style.height = '50px';
        logo.style.background = 'white';
        logo.style.width = '50px';
        logo.style.borderRadius = '50%';

        // Create a URL for the selected file
        var objectURL = URL.createObjectURL(file);
        logo.src = objectURL;

        var qrcodeSMSElement = document.getElementById('qr-codeemail');
        qrcodeSMSElement.appendChild(logo);
    }

    document.getElementById('qrCodeCardemail').style.backgroundColor = backgroundColor;
    document.getElementById('nameLabelEmail').style.color = qrCodeColor;

    document.getElementById('qrCodeCardemail').style.display = 'block';
    document.getElementById('downloadButtonsms').disabled = false;

    isQRCodeGenerated = true;
}

function downloadEmailQRCode(e) {
  console.log(e.title);
  var title = e.title;
  var qrCodeCard = document.getElementById("qrCodeCardemail");
  switch(title){
    case "jpg":
      domtoimage.toJpeg(qrCodeCard).then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "email_qrcode.jpg";
          link.href = dataUrl;
          link.click();
        });
    break;
    case "png":
      domtoimage.toPng(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "email_qrcode.png";
        link.href = dataUrl;
        link.click();
      });
    break;
    case "svg":
      domtoimage.toSvg(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "email_qrcode.svg";
        link.href = dataUrl;
        link.click();
      });
    break;
    default:
      console.log("Not a valid option");
  }
}

// vcard QR Code generating code using ajax ********************************************************************
function generatevcardQRCode() {
  if (isQRCodeGenerated) {
    // Clear the existing QR code
    document.getElementById("qrcodeVcard").innerHTML = '';
  }
  event.preventDefault();
  var form_data = new FormData(document.getElementById("frmQRCode"));
  var qrCodeColorVcard = document.getElementById("qrCodeColorVcard").value;
  var backgroundColorVcard = document.getElementById("backgroundColorVcard").value;

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "generateVcardQRCode.php", true);
  xhttp.onload = function (event) {
      if (xhttp.status == 200) {
          try {
              var responseObj = JSON.parse(this.response);
              if ('success' == responseObj.code) {

                  var qr = new QRCode(document.querySelector('#qrcodeVcard'), {
                    text: responseObj.vcard,
                    width: 300,
                    height: 300,
                    colorDark: qrCodeColorVcard,
                    colorLight: backgroundColorVcard,
                    scale: 4,
                  });

                  var fileInput = document.getElementById('fileVCard');
                  var file = fileInput.files[0];

                  if (file) {
                      var logo = document.createElement('img');
                      logo.id = 'logoVCard';
                      logo.alt = 'logo';
                      logo.accept = 'image/*' 

                      logo.style.height = '50px';
                      logo.style.background = 'white';
                      logo.style.width = '50px';
                      logo.style.borderRadius = '50%';

                      // Create a URL for the selected file
                      var objectURL = URL.createObjectURL(file);

                      logo.src = objectURL;

                      var qrcodeSMSElement = document.getElementById('qrcodeVcard');
                      qrcodeSMSElement.appendChild(logo);
                  }

                  document.getElementById('qrcodeVcard').style.backgroundColor = backgroundColorVcard;
                  document.getElementById('nameLabelVCard').style.color = qrCodeColorVcard;

                  document.querySelector("#qrVCard").style.display = "block";
              } else {
                  alert(responseObj.content);
              }
          } catch (error) {
              console.error("Error parsing JSON response: ", error);
          }
      } else {
          alert("Error " + xhttp.status + " occurred when trying to upload your documents.");
      }
  }
  xhttp.send(form_data);
  isQRCodeGenerated =true;
}

//QR download  vcard ***************************************************************

function downloadQRCode(e) {
  console.log(e.title);
  var title = e.title;
  var qrCodeCard = document.getElementById("qrVCard");
  switch(title){
    case "jpg":
      domtoimage.toJpeg(qrCodeCard).then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "vcard_qrcode.jpg";
          link.href = dataUrl;
          link.click();
        });
    break;
    case "png":
      domtoimage.toPng(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "vcard_qrcode.png";
        link.href = dataUrl;
        link.click();
      });
    break;
    case "svg":
      domtoimage.toSvg(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "vcard_qrcode.svg";
        link.href = dataUrl;
        link.click();
      });
    break;
    default:
      console.log("Not a valid option");
  }
}


// function downloadQRCode() {
//   // Select the container div that holds the content
//   var container = document.getElementById('qrVCard');

//   // Use html2canvas to capture the content as an image with a higher scale
//   html2canvas(container, { scale: 3 }).then(function (canvas) {
//       // Create a new image element with the captured data
//       var img = new Image();
//       img.src = canvas.toDataURL('image/png');

//       // Create a download link
//       var link = document.createElement('a');
//       link.href = img.src;
//       link.download = 'container_image.png';

//       // Append the link to the document and trigger a click
//       document.body.appendChild(link);
//       link.click();

//       // Remove the link and image elements from the document
//       document.body.removeChild(link);
//       document.body.removeChild(img);
//   });
// }




// function downloadQRCode() {
//   var container = document.getElementById('qrVCard');
//   console.log(container);
//   setTimeout(function () {
//       html2canvas(container).then(function (canvas) {
//           var imageData = canvas.toDataURL("image/svg+xml");
//           var link = document.createElement('a');
//           link.href = imageData;
//           link.download = 'email_qr_code.svg';
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//       });
//   }, 500); // Adjust the delay as needed
// }


// function generatePdfQRCode(){
//   console.log("click to submit button");
//   var inputFile = document.getElementById("filePdf");
//   console.log(inputFile.value);
// }

function generatePdfQRCode() {
  if (isQRCodeGenerated) {
    // Clear the existing QR code
    document.getElementById("qrcodePdf").innerHTML = '';
  }
  var pdfFileName = document.getElementById("pdfFile");
  var pdfFileLink = pdfFileName.files[0];
console.log(pdfFileLink);
  // Get color values from the color pickers
  var qrCodeColor = document.getElementById("qrCodeColor").value;
  var backgroundColor = document.getElementById("backgroundColor").value;

  var fileLink = URL.createObjectURL(pdfFileLink);
  // Create a QR Code with customized options
  var qrcode = new QRCode(document.getElementById("qrcodePdf"), {
      text: fileLink,
      width: 300,
      height: 300,
      colorDark: qrCodeColor, // Custom QR code color
      colorLight: backgroundColor, // Custom background color
  });

  var fileInput = document.getElementById('logoFile');
    var file = fileInput.files[0];

    if (file) {
        var logo = document.createElement('img');
        logo.id = 'logopdf';
        logo.alt = 'logo';
        logo.style.height = '50px';
        logo.style.width = '50px';
        logo.style.background = 'white';
        logo.style.borderRadius = '50%';

        // Create a URL for the selected file
        var objectURL = URL.createObjectURL(file);
        logo.src = objectURL;

        var qrcodeSMSElement = document.getElementById('qrcodePdf');
        qrcodeSMSElement.appendChild(logo);
    }

  // Set the color of the card background
  document.querySelector('#qrCodeCardPdf').style.backgroundColor = backgroundColor;

  // Set the color of the additional information labels
  document.getElementById('nameLabelpdf').style.color = qrCodeColor;

  // Show the QR code card and enable the download button
  document.getElementById('qrCodeCardPdf').style.display = 'block';
  document.getElementById('downloadButton').disabled = false;
  isQRCodeGenerated = true;
}


function downloadQRCodePdf(e) {
  console.log(e.title);
  var title = e.title;
  var qrCodeCard = document.getElementById("qrCodeCardPdf");
  switch(title){
    case "jpg":
      domtoimage.toJpeg(qrCodeCard).then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "pdf_qrcode.jpg";
          link.href = dataUrl;
          link.click();
        });
    break;
    case "png":
      domtoimage.toPng(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "pdf_qrcode.png";
        link.href = dataUrl;
        link.click();
      });
    break;
    case "svg":
      domtoimage.toSvg(qrCodeCard).then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "pdf_qrcode.svg";
        link.href = dataUrl;
        link.click();
      });
    break;
    default:
      console.log("Not a valid option");
  }
}
