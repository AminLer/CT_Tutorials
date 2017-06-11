
var fruits = [
  {name: "mango", score: 5},
  {name: "blueberry", score: 3},
  {name: "cherry", score: 1},
  {name: "melon", score: 7},
  {name: "apple", score: 1}
];


function setup() {
  createCanvas(500, 500);
  background(50, 0, 0);

  var sum = 0; //calculates the porbability of the fruits
  for(var i = 0; i <fruits.length; i++){
    sum += fruits[i].score;
  }
  for(var i = 0; i <fruits.length; i++){
    fruits[i].prob = fruits[i].score / sum;
    fruits[i].count = 0;
  }

  var melonCount = 0;
  for(var i = 0; i < 1000; i++){
    var fruit = pickOne(fruits);
    fruit.count++;
  }
}

function pickOne(list){
  var index = 0;
  var r = random(1);

  while(r > 0){
    r = r-list[index].prob;
    index++;
  }
  index--;
  return list[index];
}
