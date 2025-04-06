function sum(a, b) {
  return a + b;
}

const first = sum(1, 2);
const second = sum(1, " hi");
const third = sum(5, 6);

function canVote(age) {
  return age >= 18;
}
const user1 = canVote(18);
// console.log(user1);

// console.log(first);
// console.log(second);
// console.log(third);

function users(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].gender == "male") {
      console.log(arr[i].firstName);
    }
  }

  //   let values = arr.filter()
}

const user01 = [
  {
    firstName: "Yash",
    age: 20,
    gender: "male",
  },
  {
    firstName: "ken",
    age: 21,
    gender: "male",
  },
  {
    firstName: "Alice",
    age: 22,
    gender: "female",
  },
  {
    firstName: "Yoichi",
    age: 17,
    gender: "male",
  },
  {
    firstName: "Michael",
    age: 26,
    gender: "male",
  },
];

// users(user01);

// console.log(user01);
function add(n) {
  let num = 1;
  for (let i = 0; i <= n; i++) {
    num = num + i;
  }
  return num;
}

const ans = add(10);
// console.log(ans);

const fs = require("fs");
const path1 = fs.readFileSync("a.txt", "utf-8");
const path2 = fs.readFileSync("b.txt", "utf-8");

// console.log(path1);
// console.log(path2);

// Making a class in JS by myself

class rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  area() {
    return this.height * this.width;
  }

  paint() {
    return `Color of the Rectangle is ${this.color}`;
  }
}
const rect = new rectangle(2, 4, "red");
const rectArea = rect.area();
const rectColor = rect.paint();
// console.log(rectArea);
// console.log(rectColor);

function random() {

}

//let p = new Promise(random); // it is supposed to return something eventually.
//console.log(p);
//
function callfn(resolve){
	console.log('callfn Called');
	resolve();
}
let p = new Promise(callfn)

function callback(){
	console.log('Resolve function called')
	console.log('Promise is fulfilled')
}

p.then(callback)
