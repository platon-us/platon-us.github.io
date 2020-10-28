getUrl = window.location.href;
console.dir(getUrl)
var myRe = /\d{3,4}/g;
getId = myRe.exec(getUrl);	
console.dir(getId)
newUrl = location.protocol + '//' + location.host + '/admin450amtwhv/index.php/sell/catalog/products/' + getId[0] + '?_token=DsjBpUTxbTFE5GbPVFNvikP2tyONsy66j3NdOSHoom8';
redirectTo = window.location.href = newUrl;



getUrl = window.location.href;
myRe = /\d{3,4}/g;
getId = myRe.exec(getUrl);	
newUrl = location.protocol + '//' + location.host + '/admin450amtwhv/index.php/sell/catalog/products/' + getId[0] + '?_token=7Zfy4hXy3OQrFzBhXIcSIAmqQA8fwAysu9QzoQqGkk4';
redirectTo = window.location.href = newUrl;