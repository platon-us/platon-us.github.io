let a = document.createElement('div');
a.className = "yt_ifr";
console.log(a);
console.dir(a);
let c = document.querySelector('p iframe');
c.className = "yt_ifr";
a.innerHTML = c;
document.body.appendChild(a);


let a = document.querySelector('#overview')
var b = a.getElementsByTagName('iframe');
console.log(b)
let c = document.createElement('div');
c.className = "yt_ifr";

x.outerHTML = "<div class='yt_ifr'>" + b + "</div>"




let d = a.innerHTML = document.querySelector('iframe');
console.log(d)
console.dir(d)

//JQuery
$(function() {
    $('iframe').wrap("<div class='yt_ifr'></div>"); 
});
$(function() {
    $('table').wrap("<div class='table-responsive'></div>");
});


let a = document.querySelector('table');
a.className = "table";