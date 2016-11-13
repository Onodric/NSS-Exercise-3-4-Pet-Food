"use strict";

var Fooder = (function(oldFooder){

  const insertMe = document.getElementById("insertHere");

  oldFooder.dogBuilder = function (arr) {
    let tipity = document.createElement("div");
    tipity.classList.add("col-md-6");
    let top = document.createElement("div");
    top.classList.add("col-md-12", "bracketed");
    let title = document.createElement("h3");
    title.innerHTML = "Dog Food Products";
    top.append(title);
    for (let i = 0; i < arr.length; i++){
      let top2 = document.createElement("div");
      top2.classList.add("col-md-12", "bracketed");
      let brand = document.createElement("h4");
      brand.innerHTML = arr[i].name;
      top2.append(brand);
      for (let j = 0; j < arr[i].types.length; j++){
        let type1 = document.createElement("div");
        type1.classList.add("col-md-6", "bracketed");
        let type2 = document.createElement("h5");
        type2.innerHTML = arr[i].types[j].type;
        type1.append(type2);
        for (let k = 0; k < arr[i].types[j].volumes.length; k++){
          let size1 = document.createElement("div");
          size1.classList.add("col-md-6", "bracketed");
          let size2 = document.createElement("p");
          size2.innerHTML = arr[i].types[j].volumes[k].name;
          size1.append(size2);
          let price = document.createElement("p");
          price.innerHTML = arr[i].types[j].volumes[k].price;
          size1.append(price);
          type1.append(size1);
        }
        top2.append(type1);
      }
      top.append(top2);
      tipity.append(top);
      insertMe.append(tipity);
    }
  };

  oldFooder.catBuilder = function (arr) {
    let tipity = document.createElement("div");
    tipity.classList.add("col-md-6");
    let top = document.createElement("div");
    top.classList.add("col-md-12", "bracketed");
    let title = document.createElement("h3");
    title.innerHTML = "Cat Food Products";
    top.append(title);
    for (let i = 0; i < arr.length; i++){
      let top2 = document.createElement("div");
      top2.classList.add("col-md-12", "bracketed");
      let brand = document.createElement("h4");
      brand.innerHTML = arr[i].name;
      top2.append(brand);
      let breedTop = document.createElement("div");
      breedTop.classList.add("col-md-12", "bracketed");
      let breedTitle = document.createElement("h4");
      breedTitle.innerHTML = "Appropriate Breeds";
      breedTop.append(breedTitle);
      for (let h = 0; h < arr[i].breeds.length; h++){
        let breed = document.createElement("p");
        breed.classList.add("col-md-3", "bracketed");
        breed.innerHTML = arr[i].breeds[h];
        breedTop.append(breed);
      }
      for (let j = 0; j < arr[i].types.length; j++){
        let type1 = document.createElement("div");
        type1.classList.add("col-md-6", "bracketed");
        let type2 = document.createElement("h5");
        type2.innerHTML = arr[i].types[j].type;
        type1.append(type2);
        for (let k = 0; k < arr[i].types[j].volumes.length; k++){
          let size1 = document.createElement("div");
          size1.classList.add("col-md-6", "bracketed");
          let size2 = document.createElement("p");
          size2.innerHTML = arr[i].types[j].volumes[k].name;
          size1.append(size2);
          let price = document.createElement("p");
          price.innerHTML = arr[i].types[j].volumes[k].price;
          size1.append(price);
          type1.append(size1);
        }
        top2.append(type1);
      }
      top.append(top2);
      tipity.append(top);
      insertMe.append(tipity);
    }
  };

  return oldFooder;

})(Fooder || {});
