const nodeItems = document.querySelectorAll(".item-card");
const nodeGender = document.querySelectorAll(".gender-card");
const nodeSizebtn = document.querySelectorAll(".sizeBtn");
const nodeColor = document.querySelectorAll(".shirt-color");

//iteme selections
nodeItems.forEach((el) => {
  el.addEventListener("click", () => {
    nodeItems.forEach((item) => {
      item.classList.remove("selected");
      item.classList.add("notSelected");
    });

    el.classList.add("selected");
    el.classList.remove("notSelected");

    el.focus();
  });
});
//gender selection

nodeGender.forEach((el) => {
  el.addEventListener("click", () => {
    nodeGender.forEach((gender) => {
      gender.classList.remove("selected");
      gender.classList.add("notSelected");
    });

    el.classList.add("selected");
    el.classList.remove("notSelected");

    el.focus();
  });
});
//size Selections
nodeSizebtn.forEach((el) => {
  el.addEventListener("click", () => {
    nodeSizebtn.forEach((BTN) => {
      BTN.classList.remove("selected");
      BTN.classList.add("notSelected");
    });

    el.classList.add("selected");
    el.classList.remove("notSelected");

    el.focus();
  });
});
//Color Selections
nodeColor.forEach((el) => {
  bgColor = el.id;
  el.style.backgroundColor = bgColor;
  el.addEventListener("click", () => {
    nodeColor.forEach((BTN) => {
      BTN.classList.remove("selected");
      BTN.classList.add("notSelected");
    });

    el.classList.add("selected");
    el.classList.remove("notSelected");

    el.focus();
  });
});
