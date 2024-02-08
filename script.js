function generateQRCode() {
  try {
    let website = document.getElementById("website").value;
    if (website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRCode(qrcodeContainer, website);

      document.getElementById("qrcode-container").style.display = "block";
    } else {
      alert("Please enter a valid URL");
    }
  } catch (error) {
    console.error(error);
  }
}

function gotoURL() {
  try {
    let inputValue = document.getElementById("website").value;

    if (inputValue) {
      let anchor = document.createElement("a");
      anchor.href = inputValue;
      anchor.target = "_blank";
      anchor.click();
    } else {
      alert("Please enter a valid URL");
    }
  } catch (error) {
    console.error(error);
  }
}
