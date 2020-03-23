const addBtn = document.querySelector('.addButton'),
      container = document.querySelector('.container'),
      clearLS = document.querySelector('.clear-btn'),
      closeImg = "./img/quit.svg",
      editImg = "./img/edit.svg";

//var for global scope 
var mainInput = document.querySelector('.main-input');

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.value = itemName;
    taskInput.disabled = true;
    taskInput.classList.add('task-input');

    let taskBox = document.createElement('div');
    taskBox.classList.add('item');
    taskBox.style.display = "flex";
    taskBox.classList.add('showTask');  

    let editBtn = document.createElement('button');
    editBtn.insertAdjacentHTML('beforeend', `<img src="${editImg}">`);
    editBtn.classList.add('btn');
    editBtn.classList.add('btn-outline-info');
    editBtn.classList.add('edit');

    let closeBtn = document.createElement('button');
    closeBtn.insertAdjacentHTML('beforeend', `<img src="${closeImg}">`);
    closeBtn.classList.add('btn');
    closeBtn.classList.add('btn-danger');
    closeBtn.classList.add('remove');

    let btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');
    btnWrapper.appendChild(editBtn);
    btnWrapper.appendChild(closeBtn);

    container.appendChild(taskBox);
    taskBox.appendChild(taskInput);
    taskBox.appendChild(btnWrapper);

    editBtn.addEventListener('click', () => this.edit(taskInput));
    closeBtn.addEventListener('click', () => this.remove(taskBox));
    taskInput.addEventListener('change', () => {taskInput.disabled = true;});
  }
  edit(taskInput) {
    taskInput.disabled = false;
  }
  remove(elem) {
    // container.removeChild(elem);
    // localStorage.removeItem(i)
    removeValue(elem);
    }
  }


function check(taskInput) {
  if(mainInput.value !== "") {
    new item(mainInput.value);
    localStorage.setItem(mainInput.value, mainInput.value);
    mainInput.value = "";
    // mainInput.classList.remove('correctError');
  } else {
    // mainInput.classList.add('correctError');
  }
}

addBtn.addEventListener('click', () => check(mainInput));
mainInput.addEventListener('change', () => check(this));
clearLS.addEventListener('click', function() {
  localStorage.clear();
  location.href=location.href;
});

getValueAfterReload();

function removeValue(elem) {
  let parentCont = elem.parentNode.childNodes;
  console.log(parentCont)
}

function getValueAfterReload() {
  if(localStorage.length > 0) {
    for(let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      new item(key);
      console.log(key);
    }
  }
}