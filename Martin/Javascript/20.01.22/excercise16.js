function printPattern(range) {
    for (let i = 1; i <= range; i++) {
      let str = "";
      for (let j = 1; j <= i; j++) {
        str += j + " ";
      }
      console.log(str);
    }
  }
  printPattern(2);