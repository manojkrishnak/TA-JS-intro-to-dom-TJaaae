/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label, type = "text") {
  var label = document.createElement("label");
  label.innerText = "enter text";
  var btn = document.createElement("input");
  btn.setAttribute("type", type);
  btn.setAttribute("placeholder", "enter text");
  document.body.appendChild(label);
  document.querySelector("label").appendChild(btn);
}
// TEST
// console.log(createInputElm("Your name")); //<label>Your name: <input type="text"></label>
// console.log(createInputElm("Your age", "number")); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label, type = "text") {
  return `<label>${label}: <input type='${type}' placeholder='enter text'></label>`;
}

// TEST
console.log(createInputElm("Your name")); //<label>Your name: <input type="text"></label>
console.log(createInputElm("Your age", "number")); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(arr){
  // let html = "<ul>" ;
  // arr.forEach(element => {
  //   html += `<li>${element}</li>`
  // });
  // return html + "</ul>"
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  arr.forEach(element => {
      let li = document.createElement("li");
      li.innerText = element;
      ul.appendChild(li)
  });
  return ul;
}

// TEST
console.log(createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]));
console.log(createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]));

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(arr){
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  arr.forEach(element => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      let span = document.createElement("span");
      let input = document.createElement("input");
      p.innerText = element.name;
      input.setAttribute("type", "checkbox");
      input.setAttribute("checked", element.isDone);
      input.setAttribute("name", "");
      input.setAttribute("id", "");
      span.innerText = "X";
      li.appendChild(p)
      li.appendChild(input)
      li.appendChild(span);
      ul.appendChild(li)
  });
  return ul;
}

// Your code goes here

// TEST
console.log(createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]));
console.log(createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]));
