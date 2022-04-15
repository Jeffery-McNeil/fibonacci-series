function fibonacci(num) {
  let array = []
  let element1
  let element2
  for (let i = 0; i <= num; i++) {
    if (array[array.length -2]) {
      element1 = array[array.length -2]
    } else {
      element1 = 0
    }
    if (array[array.length -1]) {
      element2 = array[array.length -1]
    } else {
      element2 = 0
    }
    sum = element1 + element2
    if (i === 1) {
      array.push(1)
    } else {
      array.push(sum)    
    }
  }
  return array[array.length-1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
