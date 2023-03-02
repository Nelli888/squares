const container = document.querySelector(".container");
const colors = {
  item1: "block-red",
  item2: "block-yellow",
  item3: "block-green",
};
container.addEventListener("mouseover", function (e) {
  let blockActive = e.target;
  const greyBlock = container.querySelector(".block-grey");
  let colorItem = blockActive.className.split(" ")[2];
  if (colorItem in colors) {
    greyBlock.classList.add(colors[colorItem]);
  }
});
container.addEventListener("mouseout", function () {
  const greyBlock = container.querySelector(".block-grey");
  let greyClass = greyBlock.className.split(" ");
  if (greyClass.length > 3) {
    greyBlock.className = greyClass.splice(0, 3).join(" ");
  }
});
