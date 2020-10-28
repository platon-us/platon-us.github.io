let a = document.querySelector('#amazzing_filter');
console.dir(a);
let b = a.querySelectorAll('[data-trigger]');
console.dir(b);
let tostring = '';
let c = Array.from(b).forEach((item) => {
    let d = (item.classList[1] + " - " + item.querySelector('.af_subtitle').innerText);
    let f = d.replace("f", "");
    tostring = tostring + '\n' + f;
});
console.log(tostring);
alert(tostring);


// let reg = /ab+c/i

// Browser
// javascript:(function()%7Ba%20%3D%20document.querySelector('%23amazzing_filter')%3Bconsole.dir(a)%3Bb%20%3D%20a.querySelectorAll('%5Bdata-trigger%5D')%3Bconsole.dir(b)%3Blet%20tostring%20%3D%20''%3Blet%20c%20%3D%20Array.from(b).forEach((item)%20%3D%3E%20%7Blet%20d%20%3D%20(item.classList%5B1%5D%20%2B%20%22%20%22%20%2B%20item.querySelector('h5').innerText)%3Btostring%20%3D%20tostring%20%2B%20'%5Cn'%20%2B%20d%7D)%3Balert(tostring)%7D)()

let a0 = document.querySelector('.header-nav');
console.dir(a0);
let a = a0.querySelectorAll('a');
console.dir(a);
let b = Array.from(a);
console.dir(b);
let tostring = '';
for (let i = 0; i < b.length; i++) {
    let attr = b[i].href;
    tostring = tostring + '\n' + attr;
    console.dir(attr);

};
 console.dir(tostring);



 function myFunction() {
     a = document.querySelector('#amazzing_filter');
     console.dir(a);
     b = a.querySelectorAll('[data-trigger]');
     console.dir(b);
     let tostring = '';
     let c = Array.from(b).forEach((item) => {
         let d = (item.classList[1] + " - " + item.querySelector('h5').innerText);
         let f = d.replace("f", "");
         tostring = tostring + '\n' + f;
     });
 }