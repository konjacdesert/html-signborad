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
        // ctx.fillRect(0, 0, size.w, 1);
        // ctx.fillRect(0, size.h - 1, size.w, 1);
    }
    document.body.appendChild(textcanvas);
    var filter = document.getElementById("f");
    if (filter) {
        var s = 100 / size.h;
        filter.style.backgroundSize = "calc(var(--vh,1vh)*" + s + ") calc(var(--vh,1vh)*" + s + ")";
    }
    textcanvas.style.animationDuration = Math.max(((textcanvas.clientWidth - document.body.clientWidth) /
        textcanvas.clientHeight) *
        3, 10) + "s";
    updateVh();
});
function updateVh() {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
}
window.addEventListener("resize", updateVh);
