window.addEventListener("load", function () {
    var q_split = location.search.substring(1).split('&');
    for (var _i = 0, q_split_1 = q_split; _i < q_split_1.length; _i++) {
        var q = q_split_1[_i];
        var qm = q.split("=");
        if (qm[0] == "m") {
            var mes = document.getElementById("mes");
            if (mes) {
                mes.innerText = decodeURI(qm[1]).replace("\n", "");
                mes.style.animationDuration = (mes.clientWidth - document.body.clientWidth) / mes.clientHeight * 2.5 + "s";
            }
        }
    }
});
