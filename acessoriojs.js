let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");

  boxLink.href = "/contentDetails.html?" + ob.id;

  let imgTag = document.createElement("img");

  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode("Marca:  " + ob.brand);
  h4.appendChild(h4Text);

  let size = ob.size;
  let p = size[0];
  let m = size[1];
  let g = size[2];
  let gg = size[3];

  console.log(String.fromCharCode(p + 79));
  console.log(String.fromCharCode(m + 75));
  console.log(String.fromCharCode(g + 68));
  console.log(String.fromCharCode(gg + 67) + "G");

  let h5 = document.createElement("h5");
  let h5Text = document.createTextNode(
    `Tamanho disponivel ${String.fromCharCode(p + 79)} 
    ${String.fromCharCode(m + 75)}
    ${String.fromCharCode(g + 68)}
    ${String.fromCharCode(gg + 67)}G
    `
  );
  h5.appendChild(h5Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("Preço R$:  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h5);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status == 200) {
      // console.log('call successful');
      contentTitle = JSON.parse(this.responseText);
      if (document.cookie.indexOf(",counter=") >= 0) {
        var counter = document.cookie.split(",")[1].split("=")[1];
        document.getElementById("badge").innerHTML = counter;
      }
      for (let i = 0; i < contentTitle.length; i++) {
        if (contentTitle[i].isAccessory) {
          console.log(contentTitle[i]);
          containerAccessories.appendChild(
            dynamicClothingSection(contentTitle[i])
          );
        } else {
          console.log(contentTitle[i]);
        }
      }
    } else {
      console.log("call failed!");
    }
  }
};
httpRequest.open(
  "GET",
  "https://62e523ecc6b56b45118f9a7d.mockapi.io/produtos/content/",
  true
);
httpRequest.send();
