geturl = window.location.href;
replace = geturl.replace(/.com.ua\/uk|.com.ua\/ru|.com.ua|.ua|.com/gi, '.ru');
redirectTo = window.location.href = replace;
console.log(redirectTo)

// prepared for browser

// javascript:(function()%7Bgeturl %3D window.location.href%3Breplace %3D geturl.replace(%2F.com.ua%5C%2Fuk%7C.com.ua%5C%2Fru%7C.com.ua%7C.ua%7C.com%2Fgi%2C '.ru')%3BredirectTo %3D window.location.href %3D replace%3Bconsole.log(redirectTo)%7D)()
