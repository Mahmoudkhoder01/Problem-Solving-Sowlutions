let linkedList = [];
let newArr = [];

const addNode = (x) => {
  linkedList.push(x);
  console.log(linkedList);
};

addNode(2);
addNode(5);
addNode(3);
addNode(9);
addNode(10);
addNode(8);

const removeNode = (x) => {
  for (let i = 0; i < linkedList.length; i++) {
    if (linkedList[i] <= x) {
      newArr.push(linkedList[i]);
    }
  }
};

removeNode(7);
console.log(newArr);
