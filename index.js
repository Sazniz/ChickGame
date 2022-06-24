
/*
const chicken = document.querySelector("#chicken");
let counter = 60;
document.addEventListener("keydown", function (e) {
  console.log(e.which);
  if (e.which == "32" || e.which == "38") {
    let intervalCounter1 = -10;
    const i = setInterval(() => {
      intervalCounter1++;
      if (intervalCounter1 === 20) {
        clearInterval(i);

        let intervalCounter2 = -10;
        const j = setInterval(() => {
        intervalCounter2++;
        if (intervalCounter2 === 20) {
          clearInterval(j);
        }
          jumpDown();
        }, 10);
      }
      jumpUp();
    }, 10);
  }
});

function jumpUp() {
  counter += 8;
  chicken.style.bottom = counter + 'px';

}

function jumpDown() {
  counter -= 8;
  chicken.style.bottom = counter + 'px';
}
*/
