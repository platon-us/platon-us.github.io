let elems = document.getElementsByTagName('*'),
backgrounds = [];
for (let i = 0, len = elems.length; i < len; i++) { if (window.getComputedStyle(elems[i], null).getPropertyValue('background-image') !='none' ) { backgrounds.push(window.getComputedStyle(elems[i], null).getPropertyValue('background-image')); } } console.log(backgrounds); let result = copy(backgrounds);


// here we're retrieving all elements on the page,
// by passing a wildcard ('*') to the
// document.getElementsByTagName() method:
var elems = document.getElementsByTagName('*'),

  // creating an empty Array to hold the found
  // background-images:
  backgrounds = [];

// creating a for loop to iterate over the elements,
// initialising the i variable to 0 (as JavaScript
// indices start from zero), len is initialised as
// as the length of the elems Array;
// while len is less than the length of elements,
// the loop will run, incrementing the i variable
// each time in order to iterate over the Array:
for (var i = 0, len = elems.length; i < len; i++) {

  // here we use the window.getComputedStyle()
  // method to retrieve the styles applied to the
  // current element - in the Array of elements over
  // which we're iterating - whether applied by CSS
  // or via the style attribute. To retrieve a particular
  // property-value, we use the getPropertyValue()
  // method with the relevant property passed as
  // an argument. As the default-value of background-
  // image is 'none' we explicitly test that the
  // retrieved property-value is not-equal to 'none':
  if (window.getComputedStyle(elems[i], null).getPropertyValue('background-image') != 'none') {

    // here we push the property-value into the Array,
    // using Array.prototype.push():
    backgrounds.push(window.getComputedStyle(elems[i], null).getPropertyValue('background-image'));
  }
}

// logging the values to the console:
console.log(backgrounds);