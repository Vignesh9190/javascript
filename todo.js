let list = []; // array declaration
//function definition 
const addToList = () => { 
    let newTask = document.getElementById('new-task'); //to get access to perform action in input element
    let todoList = document.getElementById('list'); // to get access to perform action in ul list
    let item = document.createElement('li'); // to create new element dynamically to the ul list
 
    item.innerText = newTask.value; 
    item.onclick = removeFromList.bind(this, list.length); //bind that function to this click event
    todoList.appendChild(item); //adding the list item under the ul node
    list.push(newTask.value); //push function used to push value to that array

    newTask.value = ''; // free the object
}

const removeFromList = (index) => {
    let todoList = document.getElementById('list');
    console.log(index);

    list.splice(index, 1); // to remove from the list
    todoList.innerHTML = "";
    reconstructList(); // to rebuild the display again 
}

const reconstructList = () => {
   let todoList = document.getElementById('list');
   

   list.map((task, index) => { // to iterate to each element in an array
    let item = document.createElement('li'); // recreate the list
    item.innerText = task;
    todoList.appendChild(item);
    item.onclick = removeFromList.bind(this, index);
   })

}