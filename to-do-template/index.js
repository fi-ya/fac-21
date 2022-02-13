//(DOM) is the JavaScript representation of the elements on a webpage,
//It’s implemented by web browsers
//A browser’s DOM APIs are how you access and manipulate elements within the page

// https://oliverjam.es/blog/dom-intro/
const form = document.querySelector('form');
const list = document.querySelector('ul');

form.addEventListener('submit', handleSubmit);
//create a new list element and set its text content:
function handleSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.newTodo.value;

  const newItem = document.createElement('li');
  newItem.textContent = value;
  list.appendChild(newItem);

  form.reset(); // reset inputs so user can enter another to-do
}
