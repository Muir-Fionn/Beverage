/**
 * @fileoverview Functions for Club page template.
 */

/* Functions to execute on page load */
 document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    upcomingFill();
    memberFill();
    galleryFill();
    aboutFill();

    navClickEvents(mainNav);
    navClickEvents(join);
    galleryClickEvents();
  }
};

/*--- DOM Events functions ---*/
function navClickEvents(nav) {
  var listItems = nav.querySelectorAll('span');

  for(var i=0; i < listItems.length; i++) {
    var li = listItems[i];
    li.addEventListener('click', function() {
      var old = document.querySelector('.active');
      old.classList.remove('active');
      this.classList.add('active');

      var oldId = old.innerText.split(' ')[0].toLowerCase();
      var oldEl = document.getElementById(oldId);
      oldEl.style.display = 'none';

      var id = this.innerText.split(' ')[0].toLowerCase();
      var el = document.getElementById(id);
      el.style.display = 'flex';
    })
  }
}

function galleryClickEvents() {
  var target = photos.querySelectorAll('img');

  for (var i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function(){
      if(!this.classList.contains('focus')){
        target.forEach(function(el) {
          el.classList.remove('focus');
        });
      }
      this.classList.toggle('focus');
    });
  }
}


/*-- Page Manipulation functions --*/
function upcomingFill() {
  var header = makeElement('h1', 'title', 'Upcoming Events');
  upcoming.appendChild(header);

  events.forEach(function(el) {
    var container = makeElement('div', 'event', null);
    var title = makeElement('h2', 'subtitle', el.title);
    var date = makeElement('span', 'date', el.date);
    var time = makeElement('span', 'time', el.time);
    var description = makeElement('p', 'eventDescription', el.description);

    appendChildren(container, title, date, time, description);

    upcoming.appendChild(container);
  });
}

function galleryFill() {
    var header = makeElement('h1', 'title', 'Gallery');
    var display = makeElement('div', 'photos', null);

    for(var name in gallery){
      var photoDiv = fillPhotos(gallery[name], name);
      display.appendChild(photoDiv);
    }

    appendChildren(photos, header, display);
}

function aboutFill() {
  var header = makeElement('h1', 'title', 'About Us');
  about.appendChild(header)

  aboutText.forEach(function(el){
    var p = makeElement('p', null, el);
    about.appendChild(p);
  });
}

function memberFill() {
  var header = makeElement('h1', 'title', 'Member Information');
  var rules = fillRules(memberInfo.rules);
  var contacts = fillFromObject(memberInfo.contacts, 'contacts');
  var resources = fillFromObject(memberInfo.resources, 'resources');

  appendChildren(members, header, rules, contacts, resources);
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

function fillPhotos(arr, name) {
  var div = makeElement('div', name, null);

  arr.forEach(function(el) {
    var photo = makeElement('img', 'thumbnail', null)
    photo.src = el['url'];
    photo.alt = el['title'];

    div.appendChild(photo);
  });

  return div;
}

function fillRules(arr) {
  var div = makeElement('div', 'rules', null);
  var header = makeElement('h2', 'subtitle', 'rules');
  var list = makeElement('ul', 'rules', null)

  arr.forEach(function(el) {
    var rule = makeElement('li', 'rule', el);
    list.appendChild(rule);
  });

  appendChildren(div, header, list);

  return div;
}

function fillFromObject(arr, name) {
  var div = makeElement('div', name, null);
  var header = makeElement('h2', 'subtitle', name);
  var list = makeElement('ul', name, null);

  arr.forEach(function(obj) {
    var section = makeElement('ul', null, null);
    for(var info in obj) {

      if(info == 'url') {
        var item = makeElement('li', info, null);
        var link = makeElement('a', null, obj[info]);
        link.href = obj[info];
        item.appendChild(link);
      }else {
        var item = makeElement('li', info, obj[info]);
      }
      section.appendChild(item);
    }
    list.appendChild(section);
  });

  appendChildren(div, header, list);

  return div;
}
