function encurtar() {
  //verificar se o link existe

  let url = document.getElementById("input-url").value;

  if (!url) {
    alert("É preciso inserir uma URL para encurtar");
    return;
  }
  //api key: e3f1ab04314f4705923c8a76294a495e

  let headers = {
    "Content-Type": "application/json",
    apikey: "e3f1ab04314f4705923c8a76294a495e",
  };

  //dados

  let linkRequest = {
    destination: url,
    domain: { fullName: "rebrand.ly" },
  };

  fetch("https://api.rebrandly.com/v1/links", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(linkRequest),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let inputUrl = document.getElementById("input-url");
      inputUrl.value = json.shortUrl;
    });
}

function copiar() {
  let inputUrl = document.getElementById("input-url");

  inputUrl.select();
  inputUrl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputUrl.value);

  alert(`URL Copiada ${inputUrl.value}`);
}
