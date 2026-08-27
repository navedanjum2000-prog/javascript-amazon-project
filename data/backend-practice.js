const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);      // we will first add the eventlistener then send the resonse just like in html and JS
});

// xhr.open('GET', 'https://supersimplebackend.dev/');  //  ROOT FOLDER
// xhr.open('GET', 'https://supersimplebackend.dev/hello');  // STRING TYPE
// xhr.open('GET', 'https://supersimplebackend.dev/documentation');  // HTML TYPE
// xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');  // IMAGES
// xhr.open('GET', 'https://supersimplebackend.dev/cart');  // OBJECTS OR DATAS

xhr.open('GET', 'https://supersimplebackend.dev');

xhr.send();