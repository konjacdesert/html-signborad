window.addEventListener("load", () => {
  const q_split = location.search.substring(1).split('&');
  for (const q of q_split) {
    const qm = q.split("=");
    if (qm[0] == "m") {
      const mes = document.getElementById("mes");
      if (mes) {
        mes.innerText = decodeURI(qm[1]).replace("\n", "");
        mes.style.animationDuration = `${Math.max((mes.clientWidth - document.body.clientWidth) / mes.clientHeight * 2.5, 10)}s`
      }
    }
  }
})
