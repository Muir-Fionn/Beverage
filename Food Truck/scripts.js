var menuItems = [
  {name: 'tacos',
  description: 'street tacos, chicken or beef',
  price: '$2.99'},
  {name: 'Chimicanga',
  description: 'Smothered in green chile',
  price: '$4.99'},
  {name: 'ribs',
  description: 'Honey BBQ Smoked',
  price: '$10.99'},
  {name: 'Hamburgers',
  description: 'American hamburger, cheese optional',
  price: '$3.99'},
  {name: 'Soylent green smoothie',
  description: 'Meal in a dirnk',
  price: '$4.99'}
];

var menu = document.querySelector('.menu');
var about = document.querySelector('.about');


function buildMenu(items) {
  var h1 = document.createElement('h1');
  var  text = document.createTextNode('What do we serve?');
  h1.appendChild(text);
  menu.appendChild(h1);

  items.forEach(function(el) {
    var p = document.createElement('p');
    text = document.createTextNode(el['description']);
    p.appendChild(text)

    var h3 = document.createElement('h3');
    text = document.createTextNode(el['name']);
    h3.appendChild(text);

    var span = document.createElement('span');
    text = document.createTextNode(el['price']);
    span.appendChild(text);

    var div = document.createElement('div');
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);

    menu.appendChild(div);
  });
}

var aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet enim ut nunc commodo, id ultricies massa feugiat. Suspendisse venenatis elit sed lacus scelerisque congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur vitae arcu a rhoncus. Mauris malesuada ipsum vulputate leo porta interdum. Nulla diam mi, elementum sed augue non, consequat ornare dui. Suspendisse diam lectus, efficitur in malesuada eu, ornare sit amet ligula.";

function buildAbout(text) {
  var h1 = document.createElement('h1');
  var string = document.createTextNode('Who are we?');
  h1.appendChild(string);
  var p = document.createElement('p');
  text = document.createTextNode(text);
  p.appendChild(text);
  about.appendChild(h1);
  about.appendChild(p);
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    buildAbout(aboutText);
    buildMenu(menuItems);
  }
};
