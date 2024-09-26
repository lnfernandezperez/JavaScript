function askInfo(callback) {
  setTimeout(function () {
    console.log("Informacion Obtenida");
    callback();
  }, 3000);
}
function firstSection(callback) {
  console.log("preparando");
  setTimeout(() => {
    console.log("Primera Parte");
    callback();
  }, 3000);
}
function secondSection(callback) {
  console.log("preparando");
  setTimeout(() => {
    console.log("Segunda Parte");
    callback();
  }, 2000);
}
function thirdSection(callback) {
  console.log("preparando");
  setTimeout(() => {
    console.log("Tercera Parte");
    callback();
  }, 1000);
}

function getAllTogether() {
  askInfo(() => {
    firstSection(() => {
      askInfo(() => {
        secondSection(() => {
          askInfo(() => {
            thirdSection(() => {
              console.log("finished");
            });
          });
        });
      });
    });
  });
}

getAllTogether();
