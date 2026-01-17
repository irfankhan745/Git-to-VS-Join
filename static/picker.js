let selectors = [];
let picking = false;

function openSite() {
  const url = document.getElementById("url").value;
  document.getElementById("site").src = url;
}

function enablePicker() {
  picking = true;
  alert("Click on any button on the site");
}

window.addEventListener("message", (e) => {
  if (e.data.type === "ELEMENT_SELECTED") {
    selectors.push(e.data.selector);
    document.getElementById("list").innerHTML += `<li>${e.data.selector}</li>`;
  }
});

document.getElementById("site").onload = () => {
  const iframe = document.getElementById("site").contentWindow;

  iframe.document.addEventListener("click", (e) => {
    if (!picking) return;

    e.preventDefault();
    e.stopPropagation();

    const el = e.target;
    const selector = generateSelector(el);

    window.postMessage({
      type: "ELEMENT_SELECTED",
      selector: selector
    }, "*");

    picking = false;
  }, true);
};

function generateSelector(el) {
  if (el.id) return `#${el.id}`;
  if (el.className)
    return el.tagName.toLowerCase() + "." + el.className.split(" ")[0];
  return el.tagName.toLowerCase();
}

function start() {
  fetch("/start", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      url: document.getElementById("url").value,
      selectors: selectors,
      interval: 2
    })
  });
}
