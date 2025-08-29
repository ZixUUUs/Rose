const nodeItems = document.querySelectorAll(".item-card");
const nodeGender = document.querySelectorAll(".gender-card");
const nodeSizebtn = document.querySelectorAll(".sizeBtn");
const nodeColor = document.querySelectorAll(".shirt-color");
const nodePose = document.querySelectorAll(".positon-selection");
const nodeImgBox = document.querySelectorAll(".custom-img-box");
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
//Position Selection
nodePose.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("selected")) {
      el.classList.remove("selected");
      el.classList.add("notSelected");
      el.blur();
      console.log(el);
    } else {
      el.classList.add("selected");
      el.classList.remove("notSelected");
      console.log(el);
      el.focus();
    }
  });
});
//Image Selection
nodeImgBox.forEach((el) => {
  el.addEventListener("click", () => {
    nodeImgBox.forEach((e) => {
      e.classList.remove("selected");
      e.classList.add("notSelected");
    });

    el.classList.add("selected");
    el.classList.remove("notSelected");

    el.focus();
  });
});

// display behaviour
const customShirt = document.querySelector(".custom-shirt");

nodeItems.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("selected")) {
      console.log(element);
      if (element.dataset.choice === "shirt") {
        customShirt.classList.remove("hidden");
        customShirt.classList.add("show");
        return;
      }
      return;
    }
  });
});
