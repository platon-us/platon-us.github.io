let sel = document.getElementsByClassName("product-miniature");
for (let i = 0; i < sel.length; i++) {
    let attr = sel[i].attributes[1].value;
    let write = sel[i].querySelector('.product-title a');
    let b = sel[i].querySelector('.prodblock');
    write.href = location.protocol + '//' + location.host + '/admin450amtwhv/index.php/sell/catalog/products/' + attr + '?_token=DsjBpUTxbTFE5GbPVFNvikP2tyONsy66j3NdOSHoom8';
    b.style.border = '2px solid #fb7a1e'
}

// prepared for browser

// javascript:(function()%7Blet%20sel%20%3D%20document.getElementsByClassName(%22product-miniature%22)%3Bfor%20(let%20i%20%3D%200%3B%20i%20%3C%20sel.length%3B%20i%2B%2B)%20%7Blet%20attr%20%3D%20sel%5Bi%5D.attributes%5B1%5D.value%3Blet%20write%20%3D%20sel%5Bi%5D.querySelector('.product-title%20a')%3Blet%20b%20%3D%20sel%5Bi%5D.querySelector('.prodblock')%3Bwrite.href%20%3D%20location.protocol%20%2B%20'%2F%2F'%20%2B%20location.host%20%2B%20'%2Fadmin450amtwhv%2Findex.php%2Fsell%2Fcatalog%2Fproducts%2F'%20%2B%20attr%20%2B%20'%3F_token%3DDsjBpUTxbTFE5GbPVFNvikP2tyONsy66j3NdOSHoom8'%3Bb.style.border%20%3D%20'2px%20solid%20%23fb7a1e'%7D%7D)()