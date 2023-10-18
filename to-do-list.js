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
      itemDueDate : dueDate
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
      itemDueDate : dueDate
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
    todoListStatus: 'open',
    todoListItem: []
  });

  save();

  console.log(mytodoList);
  document.getElementById('createListName').value = "";
  renderListNames();
}

function openList (selectedListID) {
  let index = getListIndex(selectedListID);

  //if(!mytodoList[index]){return;}

  let todoListHTML = `
    <div class="selected-list-name">${mytodoList[index].todoListName}</div>
    <div class="todo-input-grid">
      <input placeholder="Todo description" class="name-input" id="input-${selectedListID}">
      <input type="date" class="due-date-input">
      <button onclick="addTodo(${selectedListID})" class="add-todo-button" id="addButton-${selectedListID}">Add</button>
    </div>
    <div class="js-todo-list todo-grid"></div>
  `;

  document.querySelector('.container').innerHTML = todoListHTML;
  document.querySelector('.container').style.display = "block";
  /*
  document.querySelector('.name-input').addEventListener('keypress',(event)=>{
    if (event.key === 'Enter') {
      createList(addTodo(selectedListID));
    }
  });
*/
  if((mytodoList[index]).todoListItem.length != 0){
    renderTodoList(selectedListID);
    createEventListener();
  }
}

function addTodo(selectedListID) {
  let index = getListIndex(selectedListID);
  if(!mytodoList[index]){
   return; 
  }
  
  const inputElement = document.querySelector('.name-input')
  let description = inputElement.value;
  let dueDate = document.querySelector('.due-date-input').value;

  if (description == ''){description = "no description";}
  if (dueDate == ''){dueDate = today();}

  addTodoItem(selectedListID,description,dueDate);

  save();

  inputElement.value = '';
  renderTodoList(selectedListID);
}

function renderTodoList (selectedListID){
  let listIndex = getListIndex(selectedListID);
  let todoListHTML = '';

  ((mytodoList[listIndex]).todoListItem).forEach((todoObject, itemIndex)=>{
    // Destructuring
    const { itemID, itemDescription, itemDueDate } = todoObject;
    const html = `
    <div class="todo-item" id="${itemID}">
    <img id="img-${itemID}" class="checked" src="unchecked.png" onclick="clicked('img-${itemID}')">
    <div class="todo-item-subcontainer" id="item-${itemID}">${itemDescription}</div>
    <div>${itemDueDate}</div>
    <button class="edit-todo-button" onclick="editItem(${selectedListID},${itemID})">Edit</button>
    <button class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})">X</button>
    </div>`;
    todoListHTML += html;
  });

   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function renderListNames (){
  let todoListNames = '';
  if(mytodoList.length != 0){
    for(i=0;i<mytodoList.length;i++){
      todoListNames += `
      <div class="display-list" id='list-${mytodoList[i].todoListId}'>
        <div class="list-name" onclick='openList(${mytodoList[i].todoListId})'>${mytodoList[i].todoListName}</div>
        <button class="edit-list" onclick="editList(${mytodoList[i].todoListId})">Edit</button>
        <button class="delete-list" onclick="confirmDeleteList(${mytodoList[i].todoListId})">X</button>
      </div>`;
    }
  }
  //console.log(JSON.stringify(mytodoList[0].todoListItem));
  document.querySelector('.display-lists-container').innerHTML = todoListNames;
}

function clicked (id){
  if (document.getElementById(id).src.includes("unchecked.png")){
    document.getElementById(id).src = 'checked.png';
    document.getElementById(id.replace('img','item')).style.textDecoration = "line-through";
    document.getElementById(id.replace('img-','')).style.backgroundColor = "rgba(93, 241, 118, 0.747)";
  } else { 
    document.getElementById(id).src = 'unchecked.png';
    document.getElementById(id.replace('img-','')).style.backgroundColor = "rgba(205, 255, 238, 0.747)";
    document.getElementById(id.replace('img','item')).style.textDecoration = "none";
  }
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
    document.querySelector('.container').style.display = "none";
  }
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
  if(document.querySelector('.create-list').style.visibility == 'hidden'){
    document.querySelector('.create-list').style.visibility = 'visible';
    document.querySelector('.create-list').style.display = 'flex';
    document.querySelector('.create-list-plus').innerHTML = '-';
  }
  else {
    document.querySelector('.create-list').style.visibility = 'hidden';
    document.querySelector('.create-list').style.display = 'none';
    document.querySelector('.create-list-plus').innerHTML = '+';
  }
}

function editList(selectedListID){
  let editListHTML = `
    <input class="edit-list-name" id="edit-list-name-${selectedListID}" value="${mytodoList[getListIndex(selectedListID)].todoListName}">
    <button class="edit-list-button" onclick="saveListName(${selectedListID})">Save</button>
    <button class="edit-list-button" onclick="cancelListName(${selectedListID})">Cancel</button>
    <button class="delete-list" onclick="confirmDeleteList(${selectedListID})">X</button>
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
    <button class="edit-list" onclick="editList(${selectedListID})">edit</button>
    <button class="delete-list" onclick="confirmDeleteList(${selectedListID})">X</button>
  `;
  document.getElementById("list-"+selectedListID).innerHTML = editListHTML;
}

function cancelListName(selectedListID){
  let editListHTML = `
    <div class="list-name" onclick='openList(${selectedListID})'>${mytodoList[getListIndex(selectedListID)].todoListName}</div>
    <button class="edit-list" onclick="editList(${selectedListID})">edit</button>
    <button class="delete-list" onclick="confirmDeleteList(${selectedListID})">X</button>
  `;
  document.getElementById("list-"+selectedListID).innerHTML = editListHTML;
}

function editItem(selectedListID, itemID){
  let editInputHTML = `
  <img id="img-${itemID}" class="checked" src="unchecked.png" onclick="clicked('img-${itemID}')">
  <input class="edit-item-name" id="edit-item-desc-${itemID}" value="${mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)].itemDescription}">
  <input type="date" class="edit-date" id="edit-date-${itemID}">
  <button class="edit-todo-button" id="edit-save-${itemID}" onclick="editApply(${selectedListID},${itemID})">Save</button>
  <button class="edit-todo-button" id="edit-cancel-${itemID}" onclick="editCancel(${selectedListID},${itemID})">Cancel</button>
  <button class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})">X</button>
  `;
  
  document.getElementById(itemID).innerHTML = editInputHTML;
  document.getElementById(itemID).style.gridTemplateColumns = "1fr 12fr 6fr 4fr 4fr 1fr";
  
  document.getElementById("edit-date-"+itemID).value = mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)].dueDate;
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
    <img id="img-${itemID}" class="checked" src="unchecked.png" onclick="clicked('img-${itemID}')">
    <div class="todo-item-subcontainer" id="item-${itemID}">${item.itemDescription}</div>
    <div>${item.itemDueDate}</div>
    <button class="edit-todo-button" onclick="editItem(${selectedListID},${itemID})">edit</button>
    <button class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})">X</button>
  `;
  document.getElementById(itemID).innerHTML = edithtml;
  document.getElementById(itemID).style.gridTemplateColumns = "0.25fr 2.25fr 1.25fr 0.25fr 0.15fr";
}

function editCancel(selectedListID, itemID){
  let item = mytodoList[getListIndex(selectedListID)].todoListItem[getItemIndex(selectedListID,itemID)];
  let editHTML = `
    <img id="img-${itemID}" class="checked" src="unchecked.png" onclick="clicked('img-${itemID}')">
    <div class="todo-item-subcontainer" id="item-${itemID}">${item.itemDescription}</div>
    <div>${item.itemDueDate}</div>
    <button class="edit-todo-button" onclick="editItem(${selectedListID},${itemID})">edit</button>
    <button class="delete-todo-button js-delete-todo-button" onclick="confirmDeleteItem(${selectedListID},${itemID})">X</button>
  `;
  document.getElementById(itemID).innerHTML = editHTML;
  document.getElementById(itemID).style.gridTemplateColumns = "0.25fr 2.25fr 1.25fr 0.25fr 0.15fr";
}

//document.querySelector('.create-list-plus').addEventListener('click',clickedCreate);

//localStorage.removeItem('todolist');
load();
//console.log(mytodoList);
renderListNames();