// 9. The callback one

const image = document.createElement("img");
image.src = "https://cdn.xl.thumbs.canstockphoto.de/baum-bild_csp12305179.jpg";
document.body.appendChild(image);

image.addEventListener("load", () => {
  const paragraph = document.createElement("p");
  const content = document.createTextNode("Image was loaded just now");
  paragraph.appendChild(content);
  return document.body.appendChild(paragraph);
});
