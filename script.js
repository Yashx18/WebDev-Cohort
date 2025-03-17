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

users(user01);

// console.log(user01);
