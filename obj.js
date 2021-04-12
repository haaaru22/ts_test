// const test = new Object();
const test = {
  test1: {
    name: "sasa",
    age: 22,
  },
  test2: {
    name: "susu",
    age: 33,
  },
  test3: {
    name: "sese",
    age: 12,
  },
};
console.table(test);
console.log(Object.values(test));

const postalCode = "123-4567";
const postal = {
  postalCode: "123-4567",
  checkPostalCode() {
    const replaced = this.postalCode.replace("-", "").length;
    // const length = replaced.length;

    if (replaced === 7) {
      return true;
    }
    return false;
  },
};

console.log(postal.checkPostalCode());
