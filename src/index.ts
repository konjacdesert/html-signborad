window.addEventListener("load", () => {
  const mes = (() => {
    const q_split = location.search.substring(1).split("&");
    for (const q of q_split) {
      const qm = q.split("=");
      if (qm[0] == "m") return decodeURI(qm[1]).replace("\n", "");
    }
    return "";
  })();
  console.log(mes);

  const size = (() => {
    const sizedom = document.createElement("span");
    sizedom.innerText = mes;
    document.body.appendChild(sizedom);
    const r = { w: sizedom.offsetWidth, h: sizedom.offsetHeight };
    // document.body.removeChild(sizedom);
    return r;
  })();
  console.log(size);

  const textcanvas = document.createElement("canvas");
  textcanvas.width = size.w;
  textcanvas.height = size.h;
  const ctx = textcanvas.getContext("2d", { alpha: false });
  if (ctx) {
    ctx.font = "24px serif";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#F80";
    ctx.fillText(mes, 0, size.h / 2);
  }
  document.body.appendChild(textcanvas);

  const filter = document.getElementById("f");
  if (filter)
    filter.style.backgroundSize = `${100 / size.h}vh ${100 / size.h}vh`;
});
