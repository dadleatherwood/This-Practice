//show the document is ready
document.addEventListener('DOMContentLoaded', function(event) {
  console.log(this);
  console.log('loaded', event);
});

function init (event) {
  console.log(this);
  console.log('initializing');
}

var app =
{
  init: init;
}

document.addEventListener('DOMContentLoaded', app.init);

//create an app constructor (notice the capital letter to begin)
function App() {

}

App.prototype.init = function () {
  console.log('initializing');
};

var app = new App();
app.init();

function Book(title, author){
  this.title = title;
  this.author = author;
}

Book.prototype.toString = function() {
  console.log(this.title + this.author);
}

Book.prototype.changeAuthor = function(newAuthor) {
  this.author = newAuthor;
}

var book = new Book('The Brothers K', "David James Dunkin");
