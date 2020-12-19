function fncGetHinmei(key) {
  if (key == "1") {
    Hinmei.value = "ラムネ";
    Kingak.value = 100;
  }
  if (key == "2") {
    Hinmei.value = "チョコレート";
    Kingak.value = 200;
  }

  Out.value = eval(Out.value) + eval(Kingak.value);
  fncResetKey();
}

function fncReset() {
  Out.value = "0";
  Hinmei.value = "";
  Kingak.value = 0;
  key.value = "";
}
function fncResetKey() {
  key.value = "";
}

function qrParse(video) {
  const canvas = new OffscreenCanvas(240, 320);
  const render = canvas.getContext("2d");

  return new Promise((res) => {
    const loop = setInterval(() => {
      render.drawImage(video, 0, 0, canvas.width, canvas.height);

      const img = render.getImageData(0, 0, canvas.width, canvas.height);
      const result = jsQR(img.data, img.width, img.height);

      if (result) {
        clearInterval(loop);
        return res(result.data);
      }
    }, 100);
  });
}
