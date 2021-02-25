window.addEventListener("load", function () {
    var fontSize = 24;
    var fontText = fontSize + "px serif";
    var messageText = (function () {
        var q_split = location.search.substring(1).split("&");
        for (var _i = 0, q_split_1 = q_split; _i < q_split_1.length; _i++) {
            var q = q_split_1[_i];
            var qm = q.split("=");
            if (qm[0] == "m")
                return decodeURI(qm[1]).replace("\n", "");
        }
        return "";
    })();
    // console.log(messageText);
    if (messageText == "")
        return;
    var size = (function () {
        var sizeDom = document.createElement("span");
        sizeDom.innerText = messageText;
        sizeDom.style.font = fontText;
        // sizedom.style.lineHeight = "100%";
        document.body.appendChild(sizeDom);
        var r = { w: sizeDom.offsetWidth, h: sizeDom.offsetHeight };
        // document.body.removeChild(sizedom);
        return r;
    })();
    // console.log(size);
    var textcanvas = document.createElement("canvas");
    textcanvas.width = size.w;
    textcanvas.height = size.h;
    var ctx = textcanvas.getContext("2d");
    if (ctx) {
        ctx.font = fontText;
        ctx.textBaseline = "top";
        ctx.fillStyle = "#F80";
        ctx.fillText(messageText, 0, (size.h - fontSize) / 2);
    }
    document.body.appendChild(textcanvas);
    var filter = document.getElementById("f");
    if (filter)
        filter.style.backgroundSize = 100 / size.h + "vh " + 100 / size.h + "vh";
    textcanvas.style.animationDuration = Math.max(((textcanvas.clientWidth - document.body.clientWidth) /
        textcanvas.clientHeight) *
        2.5, 10) + "s";
});
