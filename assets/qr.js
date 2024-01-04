
let qrPanel = document.querySelector("#qr-panel");
let qrInput = document.querySelector("#qr-input");
let qrBtn = document.querySelector("#qr-btn");
// let saveBtn = document.querySelector("#save-btn");

(function () {
    let qr = new QRious({
        element: qrPanel,
        value: "Rizky Syah Gumelar",
        size: 300
    });
})();

// action generate qr
// saveBtn.addEventListener("click", () => {
//     var data = qrPanel.toDataUrl('image/png');
//     window.open(data);
// })

// Convert canvas to image
document.getElementById('save-btn').addEventListener("click", function (e) {
    var canvas = document.querySelector('#qr-panel');

    var dataURL = canvas.toDataURL("image/jpeg", 1.0);

    downloadImage(dataURL, 'my-canvas.jpeg');
});

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}

// function putImage() {
//     var canvas1 = document.getElementById("qr-panel");
//     if (canvas1.getContext) {
//         var ctx = canvas1.getContext("2d");
//         var myImage = canvas1.toDataURL("image/png");
//     }
//     var imageElement = document.getElementById("MyPix");
//     imageElement.src = myImage;

// }

qrBtn.addEventListener("click", () => {
    new QRious({
        element: qrPanel,
        value: qrInput.value,
        size: 6000
    });
})
