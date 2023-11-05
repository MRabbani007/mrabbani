let mytodoList = []; 
/*
  // mytodoList // array of todoLists
  {
    todoListId: listID,
    todoListName: listName,
    todoListStatus: 'open',
    todoListItem: []
  }
  // for each todoList array of todo Items
  {
      itemID: setItemID(),
      itemDescription : description,
      itemDueDate : dueDate,
      itemStatus : "done" / "open"
  }
*/

function today(){
  const today = new Date();
  let format = "yyyy-mm-dd";
  let mm = today.getMonth()+1;
  let dd = today.getDate();
  if (mm < 10){ mm = "0"+mm};
  if (dd < 10){ dd = "0"+dd};
  return today.getFullYear() + "-" + mm + "-" + dd;
}

function setListID (){
 const length = 16;
 return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
}

function setItemID (){
  //return itemID++;
  const length = 16
  return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
  //return crypto.randomUUID();
}

function getListIndex (selectedListID){
  for (i=0; i<mytodoList.length; i++){
    if(mytodoList[i].todoListId == selectedListID){
      return i;
    }
  }
}

function getItemIndex (selectedListID, itemID){
  const list = mytodoList[getListIndex(selectedListID)].todoListItem;
  for(i=0; i< list.length;i++){
    if(list[i].itemID === itemID){
      return i;
    }
  }
  return -1;
}

function addTodoItem (selectedListID, description, dueDate){
    mytodoList[getListIndex(selectedListID)].todoListItem.push({
      itemID: setItemID(),
      itemDescription : description,
      itemDueDate : dueDate,
      itemStatus : "open"
    });
  }

function save(){
  if(mytodoList.length != 0){
    localStorage.setItem('todolist',JSON.stringify(mytodoList));
  }
}

function load(){
  let data = localStorage.getItem('todolist');
  if(data){
    mytodoList = JSON.parse(data);
  }
}

function createList (){
  let listName = document.getElementById('createListName').value;
  if(listName === ''){
    listName = "newList";
  }

  listID = setListID();  

  mytodoList.push ({
    todoListId: listID,
    todoListName: listName,
    todoListStatus: 'closed',
    todoListItem: []
  });

  save();

  console.log(mytodoList);
  document.getElementById('createListName').value = "";
  renderListNames();
}

function openList (selectedListID) {
  // check if list already open
  if(!document.getElementById("cont-"+selectedListID)){
    let index = getListIndex(selectedListID);
    mytodoList[index].todoListStatus = "open";
    let todoListHTML = `
      <div class="list-container" id="cont-${selectedListID}">
        <div class="todolist-header">
          <div class="selected-list-name">${mytodoList[index].todoListName}</div>
          <div class="selected-list-close" onclick="closeList(${selectedListID})"><img class="icons" src="./icons/cancel.png"></div>
        </div>
        <div class="todo-input-grid">
          <input placeholder="Todo description" class="name-input" id="input-${selectedListID}">
          <input type="date" class="due-date-input">
          <div onclick="addTodo(${selectedListID})" class="add-todo-button" id="addButton-${selectedListID}">
          <img title="add new task" class="icons" src="./icons/add-task.png"></div>
        </div>
        <div class="js-todo-list todo-grid" id="grid-${selectedListID}"></div>
      </div>
    `;

    document.querySelector('.active-list-container').innerHTML += todoListHTML;
    document.querySelector('.active-list-container').style.display = "flex";

    if((mytodoList[index]).todoListItem.length != 0){
      renderTodoList(selectedListID);
      //createEventListener();
    }
  }
}

function addTodo(selectedListID) {
  let index = getListIndex(selectedListID);
  if(!mytodoList[index]){
   return; 
  }
  
  const inputElement = document.getElementById('input-'+selectedListID)
  let description = inputElement.value;
  let dueDate = document.querySelector('.due-date-input').value;

  if (description == ''){description = "no description";}
  if (dueDate == ''){dueDate = today();}

  addTodoItem(selectedListID,description,dueDate);

  save();

  inputElement.value = '';
  renderTodoList(selectedListID);
}

// generate HTML and display list names
function renderListNames (){
  let todoListNames = '';
  if(mytodoList.length != 0){
    for(i=0;i<mytodoList.length;i++){
      todoListNames += `
      <div class="display-list" id='list-${mytodoList[i].todoListId}'>
        <div class="list-name" onclick='openList(${mytodoList[i].todoListId})'>${mytodoList[i].todoListName}</div>
        <div class="edit-list" onclick="editList(${mytodoList[i].todoListId})"><img class="icons" src="./icons/edit.png"></div>
        <div class="delete-list" onclick="confirmDeleteList(${mytodoList[i].todoListId})"><img class="icons" src="./icons/delete.png"></div>
      </div>`;
    }
  }
  //console.log(JSON.stringify(mytodoList[0].todoListItem));
  document.querySelector('.display-lists-container').innerHTML = todoListNames;
}

// generate HTML & display todo List content
function renderTodoList (selectedListID){
  let listIndex = getListIndex(selectedListID);
  let todoListHTML = '';
  let statusIcon = "./icons/unchecked.png";
  let todoClass = "todo-item-open";

  ((mytodoList[listIndex]).todoListItem).forEach((todoObject, itemIndex)=>{
    // Destructuring
    const { itemID, itemDescription, itemDueDate, itemStatus } = todoObject;
    if(itemStatus == "done"){
      statusIcon = "./icons/checked.png";
      todoClass = "todo-item-done";
    } else if (itemStatus == "open") {
      statusIcon = "./icons/unchecked.png";
      todoClass = "todo-item-open";
    }
    const html = `
    <div class="todo-item ${todoClass}" id="${itemID}">
      <img id="img-${itemID}" class="icons" src="${statusIcon}" onclick="toggleCompleted(${selectedListID},${itemID})">
      <div class="todo-item-description" id="item-${itemID}">${itemDescription}</div>
      <div class="todo-item-duedate">${itemDueDate}</div>
      <div class="edit-todo-button" onclick="editItem(${selectedListID},${itemID})"><img class="icons" src="./icons/edit.png"></div>
      <div class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})"><img class="icons" src="./icons/delete.png"></div>
    </div>`;
    todoListHTML += html;
  });

   document.getElementById("grid-"+selectedListID).innerHTML = todoListHTML;
}

function toggleCompleted (selectedListID, itemID){
  if (document.getElementById("img-"+itemID).src.includes("unchecked.png")){
    // mark completed
    mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)].itemStatus = "done";
    document.getElementById("img-"+itemID).src = './icons/checked.png';
    document.getElementById(itemID).classList.remove("todo-item-open");
    document.getElementById(itemID).classList.add("todo-item-done");
    // document.getElementById("item-"+itemID).style.textDecoration = "line-through";
    // document.getElementById(itemID).style.backgroundColor = "rgba(93, 241, 118, 0.747)";
  } else { 
    // mark uncomplete
    mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)].itemStatus = "open";
    document.getElementById("img-"+itemID).src = './icons/unchecked.png';
    document.getElementById(itemID).classList.remove("todo-item-done");
    document.getElementById(itemID).classList.add("todo-item-open");
    // document.getElementById("item-"+itemID).style.textDecoration = "none";
    // document.getElementById(itemID).style.backgroundColor = "rgba(205, 255, 238, 0.747)";
  }
  console.log(mytodoList[getListIndex(selectedListID)].todoListItem);
  save();
}

function deleteTodoItem (selectedListID, itemID){
  console.log(getItemIndex(selectedListID, itemID));
  mytodoList[getListIndex(selectedListID)].todoListItem.splice(
    getItemIndex(selectedListID, itemID),1);

  save();

  document.getElementById(itemID).remove();

  //renderTodoList(selectedListID);
}

function deleteList (selectedListID){
  mytodoList.splice(getListIndex(selectedListID),1);
  save();
  document.getElementById("list-"+selectedListID).remove();
  //renderListNames();
  
  if((document.querySelector('.name-input').id).replace("input-","") === (selectedListID+"")){
    closeList(selectedListID);
  }
}

function closeList(selectedListID){
  mytodoList[getListIndex(selectedListID)].todoListStatus = "closed";
  document.getElementById("cont-"+selectedListID).remove();
  save();
}

function confirmDeleteItem (selectedListID, itemID){
  let text = "Are you sure you want to delete?\nEither Delete or Cancel.";
  if (confirm(text) == true) {
    deleteTodoItem (selectedListID, itemID);
  }
}

function confirmDeleteList (selectedListID){
  let text = "Are you sure you want to delete?\nEither Delete or Cancel.";
  if (confirm(text) == true) {
    deleteList (selectedListID);
  }
}

function createEventListener (){
  let input = document.querySelector('.name-input');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo(input.id.replace("input-",""));
    }
  });
}

function plusToggle(){
  if(document.querySelector('.create-list').style.display == 'none'){
    document.querySelector('.create-list').style.display = 'flex';
    document.querySelector('.create-list-plus img').src = "./icons/add-hide.png";
  }
  else {
    document.querySelector('.create-list').style.display = 'none';
    document.querySelector('.create-list-plus img').src = "./icons/add-show.png";
  }
}

function editList(selectedListID){
  let editListHTML = `
    <input class="edit-list-name" id="edit-list-name-${selectedListID}" value="${mytodoList[getListIndex(selectedListID)].todoListName}">
    <div class="edit-list-button" onclick="saveListName(${selectedListID})"><img class="icons" src="./icons/save.png"></div>
    <div class="edit-list-button" onclick="cancelListName(${selectedListID})"><img class="icons" src="./icons/cancel.png"></div>
    <div class="delete-list-button" onclick="confirmDeleteList(${selectedListID})"><img class="icons" src="./icons/delete.png"></div>
  `;
  document.getElementById("list-"+selectedListID).innerHTML = editListHTML;
}

function saveListName(selectedListID){
  let newListName = document.getElementById("edit-list-name-"+selectedListID).value;
  if( newListName.length === 0){
    alert("Enter new list name");
  } else {
    mytodoList[getListIndex(selectedListID)].todoListName = newListName;
  }
  let editListHTML = `
    <div class="list-name" onclick='openList(${selectedListID})'>${mytodoList[getListIndex(selectedListID)].todoListName}</div>
    <div class="edit-list" onclick="editList(${selectedListID})"><img class="icons" src="./icons/edit.png"></div>
    <div class="delete-list" onclick="confirmDeleteList(${selectedListID})"><img class="icons" src="./icons/delete.png"></div>
  `;
  document.getElementById("list-"+selectedListID).innerHTML = editListHTML;
}

function cancelListName(selectedListID){
  let editListHTML = `
    <div class="list-name" onclick='openList(${selectedListID})'>${mytodoList[getListIndex(selectedListID)].todoListName}</div>
    <div class="edit-list" onclick="editList(${selectedListID})"><img class="icons" src="./icons/edit.png"></div>
    <div class="delete-list" onclick="confirmDeleteList(${selectedListID})"><img class="icons" src="./icons/delete.png"></div>
  `;
  document.getElementById("list-"+selectedListID).innerHTML = editListHTML;
}

function editItem(selectedListID, itemID){
  let editInputHTML = `
  <img id="img-${itemID}" class="icons" src="./icons/unchecked.png" onclick="clicked('img-${itemID}')">
  <input class="edit-item-name" id="edit-item-desc-${itemID}" value="${mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)].itemDescription}">
  <input type="date" class="edit-date" id="edit-date-${itemID}">
  <div class="edit-todo-button" id="edit-save-${itemID}" onclick="editApply(${selectedListID},${itemID})"><img class="icons" src="./icons/save.png"></div>
  <div class="edit-todo-button" id="edit-cancel-${itemID}" onclick="editCancel(${selectedListID},${itemID})"><img class="icons" src="./icons/cancel.png"></div>
  <div class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})"><img class="icons" src="./icons/delete.png"></div>
  `;
  
  document.getElementById(itemID).innerHTML = editInputHTML;
  
  document.getElementById("edit-date-"+itemID).value = mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)].itemDueDate;
}

function editApply(selectedListID, itemID){
  let newDesc = document.getElementById("edit-item-desc-"+itemID).value;
  let newDate = document.getElementById("edit-date-"+itemID).value;
  let item = mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)];
  if (newDesc == ""){
    alert ("Enter item description");
  } else {
    item.itemDescription = newDesc;
    item.itemDueDate = newDate;
    save();
  }
  let edithtml = `
    <img id="img-${itemID}" class="icons" src="./icons/unchecked.png" onclick="clicked('img-${itemID}')">
    <div class="todo-item-description" id="item-${itemID}">${item.itemDescription}</div>
    <div class="todo-item-duedate">${item.itemDueDate}</div>
    <div class="edit-todo-button" onclick="editItem(${selectedListID},${itemID})"><img class="icons" src="./icons/edit.png"></div>
    <div class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})"><img class="icons" src="./icons/delete.png"></div>
  `;
  document.getElementById(itemID).innerHTML = edithtml;
  document.getElementById(itemID).style.gridTemplateColumns = "0.25fr 2.25fr 1.25fr 0.25fr 0.15fr";
}

function editCancel(selectedListID, itemID){
  let item = mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)];
  let editHTML = `
    <img id="img-${itemID}" class="icons" src="./icons/unchecked.png" onclick="clicked('img-${itemID}')">
    <div class="todo-item-description" id="item-${itemID}">${item.itemDescription}</div>
    <div class="todo-item-duedate">${item.itemDueDate}</div>
    <div class="edit-todo-button" onclick="editItem(${selectedListID},${itemID})"><img class="icons" src="./icons/edit.png"></div>
    <div class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})"><img class="icons" src="./icons/delete.png"></div>
  `;
  document.getElementById(itemID).innerHTML = editHTML;
  document.getElementById(itemID).style.gridTemplateColumns = "0.25fr 2.25fr 1.25fr 0.25fr 0.15fr";
}

//document.querySelector('.create-list-plus').addEventListener('click',clickedCreate);

//localStorage.removeItem('todolist');
load();
//console.log(mytodoList);
renderListNames();

mytodoList.forEach((list)=>{
  if(list.todoListStatus == "open"){
    openList(list.todoListId);
  }
});
