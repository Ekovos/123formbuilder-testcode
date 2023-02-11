console.log("Custom script integration works!");

const form = document.querySelector("#form");
const emInput = document.querySelector("#form > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div > div > input[type=email]");

form.addEventListener("submit", (e) => {
  try {
    var postObject = JSON.stringify({
      event: "iframe_form_submit",
      em: emInput.value
    });
    
    window.parent.postMessage(postObject, "*");
  } catch(err) { console.error(err) }
});
