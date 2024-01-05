var formFieldType = null;

function formType(id) {
    var formBox = document.getElementById('formBlock');
    formFieldType = id;
    console.log(formFieldType);
    switch (id) {

        case 'planText': {
            formBox.innerHTML = '<textarea name="planText" id="planText" class="form-control d-flex m-auto" cols="30" rows="10" placeholder="Enter Your Text Here" ></textarea>';
            break;
        }
        case 'siteUrl': {
            formBox.innerHTML = '<input type="text" name="siteUrl" id="siteUrl" class="form-control m-auto mt-2" placeholder="Enter Site Url Here">';
            break
        }

        case 'Phone': {
            formBox.innerHTML = '<input type="tel" name="Phone" id="Phone" class="form-control m-auto mt-2" placeholder="Enter Phone Number">';
            break
        }

        case 'Vcard': {
            formBox.innerHTML = '<div><div class="row"><div class="col-6"><input type="text" name="fname" id="fname" class="form-control" placeholder="First Name"> </div><div class="col-6"><input type="text" name="lname" id="lname" class="form-control" placeholder="Last Name"></div></div><br><div><input type="tel" name="Mobile" id="Mobile" class="form-control" placeholder="Mobile"></div><br><div class="row"><div class="col-6"><input type="tel" name="Phone" id="Phone" class="form-control" placeholder="Phone"></div><div class="col-6"><input type="text" name="Fax" id="Fax" class="form-control" placeholder="Fax"></div></div><br><div><input type="email" name="Email" id="Email" class="form-control" placeholder="your@email.com"></div><br><div class="row"><div class="col-6"> <input type="Text" name="Company" id="Company" class="form-control" placeholder="Company"></div><div class="col-6"><input type="text" name="Job" id="Job" class="form-control" placeholder="Job"></div></div><br><div><input type="text" name="Street" id="Street" class="form-control" placeholder="Street"></div><br><div class="row"><div class="col-8"><input type="Text" name="City" id="City" class="form-control" placeholder="City"></div><div class="col-4"><input type="text" name="Zip" id="Zip" class="form-control" placeholder="Zip"></div></div><br><div><input type="text" name="State" id="State" class="form-control" placeholder="State"></div><br><div><input type="text" name="Country" id="Country" class="form-control" placeholder="Country"></div><br><div><input type="text" name="Website" id="Website" class="form-control" placeholder="www.your-website.com"></div></div>';
            break;
        }

        case 'App': {
            formBox.innerHTML = '<input type="text" name="App" id="App" class="form-control m-auto mt-2" placeholder="Enter Link to App">';
            break
        }

        case 'Message': {
            formBox.innerHTML = '<input type="tel" name="Phone" id="Phone" class="form-control m-auto mt-2" placeholder="Enter Phone Number Here"><br><textarea name="Message" id="Message" class="form-control d-flex m-auto" cols="30" rows="10" placeholder="Enter Your Message Here"></textarea>';
            break
        }



        default: {
            formBox.innerHTML = '<textarea name="planText" id="planText" class="form-control d-flex m-auto" cols="30" rows="10" placeholder="Enter Your Text Here" ></textarea>';
            break;
        }
    }
    QRCodeGenerator();
}

function inputValue(id) {
    return document.getElementById(id).value;
}

function openDefaultApp() {
    var qrText = inputValue('siteUrl') || inputValue('planText') || inputValue('Phone') || inputValue('Vcard') || inputValue('App') || inputValue('Message');

    window.open(qrText, '_system'); // Open the URL in the default browser
}

function QRCodeGenerator() {
    var userInput = '';

    switch (formFieldType) {
        case 'planText':
            userInput = 'Text:' + inputValue('planText');
            break;

        case 'siteUrl':
            userInput = inputValue('siteUrl');
            break;

        case 'Phone':
            userInput = inputValue('Phone');
            break;

        case 'Vcard':
           
            break;

        case 'App':
            userInput = inputValue('App');
            break;

        case 'Message':
            userInput =  inputValue('Phone') + '\n' + 'Message:' + inputValue('Message');
            break;
    }

    var element = document.getElementById('qrcode');
    element.innerHTML = '';
    let qrcode = new QRCode(element, {
        text: userInput ? userInput : 'www.udemy.com',
        width: 250,
        height: 250,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

function copyQR() {
    var img = document.querySelector('#qrcode').querySelector('img');
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    canvas.toBlob((blob) => {
        navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
        ]);
    }, 'image/png');
}

function downloadQR() {
    var img = document.querySelector('#qrcode').querySelector('img').src;
    var link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = img;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

// Event listener for scanning the QR code and opening the default app
document.getElementById('qrcode').addEventListener('click', openDefaultApp);