/*--- Variables ---*/
/* DOM Variables */
var upcoming = document.querySelector('.events');

/* Div Variable Arrays and Objects */
var events = [
  {
    title: "Women In Tech",
    location: 'Boston, MA',
    date: '15 May 2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'NASA Spotlight',
    location: 'Melborne, FL',
    date: '2 June 2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'SLS Working Group',
    location: 'Birmingham, Alabama',
    date: '15 June 2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

/*--- Functions ---*/
/*Functions to Execute on Page Load */
document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   upcomingFill();
 }
};

/* DOM Build Functions */
// Fill Upcoming Events Section
function upcomingFill() {
  var header = makeElement('h1', 'title', 'Upcoming Events');
  upcoming.appendChild(header);

  events.forEach(function(el) {
    var container = makeElement('div', 'event', null);
    var title = makeElement('h2', 'subtitle', el.title);
    var date = makeElement('span', 'date', el.date);
    var location = makeElement('span', 'location', el.time);
    var description = makeElement('p', 'eventDescription', el.description);

    appendChildren(container, title, location, date, description);

    upcoming.appendChild(container);
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
