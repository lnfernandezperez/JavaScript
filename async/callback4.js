function assemblePart1(callback) {
  console.log("Assembling part 1 started....");
  setTimeout(function () {
    const isError = Math.random() < 0.3;
    if (isError) {
      console.error("There was an error assembling part 1 oh nooooo");
      return;
    }

    console.log("Part 1 assmble finished");
    callback();
  }, 1000);
}

function assemblePart2(callback) {
  console.log("Assembling part 2 started....");
  setTimeout(function () {
    const isError = Math.random() < 0.5;
    if (isError) {
      console.error("There was an error assembling part 2 oh nooooo");
    } else {
      console.log("Part 2 assmble finished");
      callback();
    }
  }, 4000);
}

function assemblePart3(callback) {
  console.log("Assembling part 3 started....");
  setTimeout(function () {
    console.log("Part 3 assmble finished");
    callback();
  }, 2500);
}

assemblePart1(function () {
  assemblePart2(function () {
    assemblePart3(function () {
      console.log("Termine loco aguante");
    });
  });
});
