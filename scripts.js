document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   buildDrinks(drinks);
 }
};

var drinks = [
 {
   name: 'Grapefruit Juice',
   src: 'https://images.pexels.com/photos/30833/pexels-photo.jpg?w=640&auto=compress&cs=tinysrgb'
 },
 {
   name: 'Kiwi Water',
   src: 'https://images.pexels.com/photos/172261/pexels-photo-172261.jpeg?w=640&auto=compress&cs=tinysrgb'
 },
 {
   name: 'Orange Juice',
   src: 'https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?w=640&auto=compress&cs=tinysrgb'
 }
];

function buildDrinks(arr) {
 var drinks = document.querySelector('.drinks');

 arr.forEach(function(el) {
   var div = makeElement('div', 'drink', null);
   var name = makeElement('h3', 'drinkName', el.name);
   var img = makeElement('img', 'drinkImg', null);
   var addBtn = makeElement('div', 'btnAdd', 'Add To Cart');
   var infoBtn = makeElement('div', 'btnInfo', 'More Info');

   addBtn.classList.add('btn');
   infoBtn.classList.add('btn');
   img.src = el.src;

   appendChildren(div, img, name, addBtn, infoBtn);
   drinks.appendChild(div);
 });
}

function makeElement(type, style, text) {
 var el = document.createElement(type);

 if(style) {
   el.classList.add(style);
 }

 if(text) {
   var text = document.createTextNode(text);
   el.appendChild(text);
 }

 return el;
}

function appendChildren(parent) {
 var children = Array.prototype.slice.call(arguments, 1);

 children.forEach(function(el) {
   parent.appendChild(el);
 })
}
