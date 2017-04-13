var blog = {
  posts: [
    {
      title: 'Hello World' ,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      background: 'https://images.bonanzastatic.com/afu/images/1998/4630/67/atrop.jpg'
    },
    {
      title: 'Pithy Title',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      background: 'https://static.vecteezy.com/system/resources/previews/000/066/324/non_2x/vector-bright-starburst.jpg'
    }
  ],

  blogs: document.querySelectorAll('.blog'),

  buildPosts: function() {
    var length = this.blogs.length;

    for(var i=0; i < length; i++) {
      var title = makeElement('h2', 'title', this.posts[i].title);
      var text = makeElement('p', 'text', this.posts[i].text);
      var btn = makeElement('div', 'btn', 'Learn More');
      var img = document.createElement('img');
      var post = this.blogs[i];

      img.src = this.posts[i].background;
      appendChildren(post, title, text, btn, img);
    }
  }
}

/*Functions to Execute on Page Load */
document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   blog.buildPosts();
 }
};

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
