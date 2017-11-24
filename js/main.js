(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

//Variables
var theImages = document.querySelectorAll('.data-ref'),

heading = document.querySelector('.modelName'),
price = document.querySelector('.priceInfo'),
desc = document.querySelector('.modelDetails'),
appliedClass;

//Functions
function changeCarData(){
  let objectIndex = carData[this.id];

  heading.firstChild.nodeValue = objectIndex.headline;
	price.firstChild.nodeValue = objectIndex.price;
  desc.firstChild.nodeValue = objectIndex.desc;


  theImages.forEach(function(element, index){
    element.classList.add('nonActive');
  })

  this.classList.remove('nonActive');
  }

  //Listners
  theImages.forEach(function(element, index){
  element.addEventListener('click', changeCarData, false)
})

})();
