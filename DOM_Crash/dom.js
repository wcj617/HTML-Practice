// // EXAMINE THE DOCUMENT OBJECT
// // console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

// GetElementbyID(document)

// console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>';

// headerTitle.style.borderBottom='solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

//getElementByClassName//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items.length);
// console.log(items[1]);

// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementByTagName

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QuerySelector

// var header = document.querySelector('#main-header');

// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');

// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color ='red';

// var lastItem = document.querySelector('.list-group-item:last-child');

// lastItem.style.color ='blue';

// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color ='coral';

// Query SelectorAll//

// var titles = document.querySelectorAll('.title');

// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length;i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


