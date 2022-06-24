// Hauptschleife mit der Logik
let windowWidth = window.screen.width;
const hiddenBox = document.querySelector("#gameOverContainer");
window.addEventListener("resize", () => windowWidth = window.innerWidth);
const resetButton = document.querySelector("#tryAgain");

const chick = { x: 100, y: 60, w: 114, h: 114 };

let gameOver = false;
function gameLoop() {
  // Outer loop that creates a monster that moves from right to left
  setTimeout(() => {
    // create monster object
    const monsterWidth = Math.floor(getRandomArbitrary(50, 100));
    const monsterHeight = Math.floor(getRandomArbitrary(60, 150));
    // console.log("monsterWidth: ", monsterWidth, "monsterHeight: ", monsterHeight);
    const monster = { x: windowWidth, y: 60, w: monsterWidth, h: monsterHeight };

    // create corresponding dom node that represents the monster
    const monsterDomElement = createRandomMonsterElement(monsterWidth, monsterHeight);

    // inner loop for the duration of the monster to move from right to left
    const monsterIsSliding = setInterval(() => {
      // update monster x position
      monster.x -= 3;
      // mirror monster position in the dom
      monsterDomElement.style.left = monster.x + "px";

      // TODO collusion calc
      const collusion = hasCollusion(chick, monster);
      if (collusion) {
        gameOver = true;
        //alert("game over!");

        monsterDomElement.remove();
        // Make game over image visible819818

        hiddenBox.classList.remove("hidden");
        document.querySelector(".container").classList.add("shadow");
      }

      if (monster.x + monsterWidth < 0) {
        // stop inner loop
        clearInterval(monsterIsSliding);
        // remove current monster dom element
        monsterDomElement.remove();
      }
    }, 1);

    // TODO reset Game
    resetButton.addEventListener("click", resetGame);

      function resetGame() {
        gameOver= false;
        hiddenBox.classList.add("hidden");
        document.querySelector(".container").classList.remove("shadow");
        
      }

    if (!gameOver) {
      gameLoop();
    }
  }, getRandomArbitrary(1500, 4000));
}




function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function hasCollusion (leftElement, rightElement) {
  return rightElement.x < (leftElement.x + leftElement.w) && (rightElement.y + rightElement.h > leftElement.y);
}

function createRandomMonsterElement(width, height) {
  const currentMonster = document.createElement("div");
  currentMonster.classList.add("monster");
  currentMonster.style.width = width + "px";
  currentMonster.style.height = height + "px";
  document.querySelector(".container").appendChild(currentMonster);

  return currentMonster;
}

const chicken = document.querySelector("#chicken");
let counter = 60;
document.addEventListener("keydown", function (e) {
  console.log(e.which);
  if (e.which == "32" || e.which == "38") {
    let intervalCounter1 = 0;
    const i = setInterval(() => {
      intervalCounter1++;
      if (intervalCounter1 === 30) {
        clearInterval(i);

        let intervalCounter2 = 0;
        const j = setInterval(() => {
        intervalCounter2++;
        if (intervalCounter2 === 30) {
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
  chick.y = chick.y + 8;
  chicken.style.bottom = counter + 'px';

}

function jumpDown() {
  counter -= 8;
  chick.y = chick.y - 8;
  chicken.style.bottom = counter + 'px';
}

// Start loop
gameLoop();


/*resetButton.addEventListener("click", resetGame);

function resetGame() {
  gameOver= false;
  setInterval(monsterIsSliding)
  hiddenBox.classList.add("hidden");
          document.querySelector(".container").classList.remove("shadow");
}
*/