var blocks = [
  {
    header: 'Community Outreach in the Digital Age',
    backgroundColor: '#103d21',
    backgroundImage: 'https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?h=400&auto=compress&cs=tinysrgb',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    icon: 'pencil-square-o',
    type: 'Blog',
  },
  {
    header: 'The Importance of a Car',
    backgroundColor: '#814b28',
    backgroundImage: 'https://images.pexels.com/photos/139489/pexels-photo-139489.jpeg?h=400&auto=compress&cs=tinysrgb',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    icon: 'play-circle',
    type: 'Video',
  },
  {
    header: 'Volunter to Help',
    backgroundColor: '#ea6635',
    backgroundImage: 'https://images.pexels.com/photos/7064/man-notes-macbook-computer.jpg?h=400&auto=compress&cs=tinysrgb',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    icon: 'calendar-o',
    type: 'Action',
  }
];

var active = document.querySelector('.active');

document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   buildBlocks();
   sliderClickEvents();
 }
};

function sliderClickEvents() {
  var sliderSettings = document.querySelectorAll('.btn');
  var slides = document.querySelectorAll('.slide');
  var slider = document.querySelector('.slider');
  sliderSettings[0].addEventListener('click', function() {
    active.classList.remove('active');
    slides[0].classList.add('active');
    active = slides[0];
    slider.style.backgroundImage = 'linear-gradient(to right, #F11712, #834d9b, #0099F7 6.2%, transparent 6.2%)';
    slider.dataset.select = 'info';
  });
  sliderSettings[1].addEventListener('click', function() {
    active.classList.remove('active');
    slides[1].classList.add('active');
    active = slides[1];
    slider.style.backgroundImage = 'linear-gradient(to right, #F11712, #834d9b, #0099F7 50.2%, transparent 50.2%)';
    slider.dataset.select = 'voice';
  });
  sliderSettings[2].addEventListener('click', function() {
    active.classList.remove('active');
    slides[2].classList.add('active');
    active = slides[2];
    slider.style.backgroundImage = 'linear-gradient(to right, #F11712, #834d9b, #0099F7 93.2%, transparent 93.2%)';
    slider.dataset.select = 'action';
  });
};

function buildBlocks() {
  var blockSection = document.querySelector('.blocks');
  blocks.forEach(function(el){
    var block = makeElement('div', 'block', null);
    var header = makeElement('h2', 'header', el['header']);
    var i = makeElement('i', 'typeIcon', null);
    var type = makeElement('span', 'type', el['type']);

    block.style.backgroundColor = el['backgroundColor'];
    block.style.backgroundImage = 'url("' + el['backgroundImage'] + '")';

    i.classList.add('fa');
    i.classList.add('fa-' + el['icon']);

    appendChildren(block, i, type, header);
    blockSection.appendChild(block);
  });
}

/*
  @param type: type of html element to build
  @param style: class to apply to the Elementary, if any
  @param text: text to be contained by element
  @return HTML DOM element
*/
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

/*
  @param parent: desired parent element for provided children
  @args: elements to be appended to parent
*/
function appendChildren(parent) {
  var children = Array.prototype.slice.call(arguments, 1);

  children.forEach(function(el) {
    parent.appendChild(el);
  })
}
