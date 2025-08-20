const nodeItems = document.querySelectorAll(".item-card");
const shirt = document.getElementById("shirt");
const cas = document.getElementById("casquette");
const plate = document.getElementById("assiette");
const mug = document.getElementById("mug");

function isSelected(arg) {
  if (arg.tagName != "DIV") return;
  arg.addEventListener("click", () => {
    arg.className += " selected";
    console.log(arg);
  });
}

function toFocus(arg) {
  if (arg.tagName != "DIV") return;
  arg.addEventListener("click", () => {
    arg.focus();
    console.log(arg);
  });
}

nodeItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    const choice = document.getElementById(`${e.currentTarget.id}`);
    isSelected(choice);
    toFocus(choice);
  });
});
