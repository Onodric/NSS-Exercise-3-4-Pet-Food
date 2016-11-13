"use strict";

// Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.
var Fooder = (function(oldFooder){
  let dogFood = [];
  let catFood = [];

  oldFooder.getDogFood = () => {
    return dogFood;
  };

  oldFooder.getCatFood = () => {
    return catFood;
  };

  oldFooder.loadDogfood = function(cbackFunc){
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", 'data/dog-food.json');
    myRequest.send();

    myRequest.addEventListener("load", function(){
      dogFood = JSON.parse(this.responseText).dog_brands;
      cbackFunc(dogFood);
    });
  };

  oldFooder.loadCatfood = function(cbackFunc){
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", 'data/cat-food.json');
    myRequest.send();

    myRequest.addEventListener("load", function(){
      catFood = JSON.parse(this.responseText).cat_brands;
      cbackFunc(catFood);
    });
  };

  return oldFooder;

})(Fooder || {});

