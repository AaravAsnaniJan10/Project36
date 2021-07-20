var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the dog"); 
  feed.position(700,95);
  feed.mousePressed(feedDog)
}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function feedDog(){
  dog.addImage(happyDog)
  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}

//function to update food stock and last fed time
//function to add food in stock
function addFoods(){
  foodS++;
  dataBase.ref('/').update({
    Food:foodS
  })
}


