var countdownGenerator = function (x) {

  return function() {

    if (x === 0) {
      console.log('Blast Off!');

    } else if (x <= -1) {
      console.log('Rockets already gone, bub!');

    } else {
      result = ('T-minus ' + x + '...');

      console.log(result);
    }
    x--;
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
