window.addEventListener("load", function () {
    var mes = (function () {
        var q_split = location.search.substring(1).split("&");
        for (var _i = 0, q_split_1 = q_split; _i < q_split_1.length; _i++) {
            var q = q_split_1[_i];
            var qm = q.split("=");
            if (qm[0] == "m")
                return decodeURI(qm[1]).replace("\n", "");
        }
        return "";
    })();
    console.log(mes);
    var size = (function () {
        var sizedom = document.createElement("span");
        sizedom.innerText = mes;
        document.body.appendChild(sizedom);
        var r = { w: sizedom.offsetWidth, h: sizedom.offsetHeight };
        // document.body.removeChild(sizedom);
        return r;
    })();
    console.log(size);
    var textcanvas = document.createElement("canvas");
    textcanvas.width = size.w;
    textcanvas.height = size.h;
    var ctx = textcanvas.getContext("2d", { alpha: false });
    if (ctx) {
        ctx.font = "24px serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#F80";
        ctx.fillText(mes, 0, size.h / 2);
    }
    document.body.appendChild(textcanvas);
    var filter = document.getElementById("f");
    if (filter)
        filter.style.backgroundSize = 100 / size.h + "vh " + 100 / size.h + "vh";
});
