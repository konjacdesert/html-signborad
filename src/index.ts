window.addEventListener("load", () => {
  const fontSize = 24;
  const fontText = `${fontSize}px serif`;

  const messageText = (() => {
    const q_split = location.search.substring(1).split("&");
    for (const q of q_split) {
      const qm = q.split("=");
      if (qm[0] == "m") return decodeURI(qm[1]).replace("\n", "");
    }
    return "";
  })();
  // console.log(messageText);

  if (messageText == "") return;

  const size = (() => {
    const sizeDom = document.createElement("span");
    sizeDom.innerText = messageText;
    sizeDom.style.font = fontText;
    // sizedom.style.lineHeight = "100%";
    document.body.appendChild(sizeDom);
    const r = { w: sizeDom.offsetWidth, h: sizeDom.offsetHeight };
    // document.body.removeChild(sizedom);
    return r;
  })();
  // console.log(size);

  const textcanvas = document.createElement("canvas");
  textcanvas.width = size.w;
  textcanvas.height = size.h;
  const ctx = textcanvas.getContext("2d");
  if (ctx) {
    ctx.font = fontText;
    ctx.textBaseline = "top";
    ctx.fillStyle = "#F80";
    ctx.fillText(messageText, 0, (size.h - fontSize) / 2);
  }
  document.body.appendChild(textcanvas);

  const filter = document.getElementById("f");
  if (filter)
    filter.style.backgroundSize = `${100 / size.h}vh ${100 / size.h}vh`;

  textcanvas.style.animationDuration = `${Math.max(
    ((textcanvas.clientWidth - document.body.clientWidth) /
      textcanvas.clientHeight) *
      2.5,
    10
  )}s`;
});
