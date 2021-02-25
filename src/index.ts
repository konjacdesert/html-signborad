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
    // ctx.fillRect(0, 0, size.w, 1);
    // ctx.fillRect(0, size.h - 1, size.w, 1);
  }
  document.body.appendChild(textcanvas);

  const filter = document.getElementById("f");
  if (filter) {
    const s = 100 / size.h;
    filter.style.backgroundSize = `calc(var(--vh,1vh)*${s}) calc(var(--vh,1vh)*${s})`;
  }

  textcanvas.style.animationDuration = `${Math.max(
    ((textcanvas.clientWidth - document.body.clientWidth) /
      textcanvas.clientHeight) *
      3,
    10
  )}s`;
  updateVh();
});

function updateVh() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}
window.addEventListener("resize", updateVh);
