//define the function
var remove = document.querySelector('#remove').addEventListener('click', removeitem);
var add = document.querySelector('#add').addEventListener('click', additem);

function removeitem() {
    //input filed selected
    let input = document.querySelectorAll('input');
    
    //looping throw every single input and check wether it's checked or not 
    input.forEach((item, index) => {
        let check = item.checked;    
        if (check === true) {
            item.parentElement.remove();   //remove the checked item
        }
    });
}

function additem() {
    if ( input.value == '') {
        alert('enter the task')
    }
    else {
        //getting the input value
    let input = document.querySelector("#input");

    //select the ul
    let ul = document.querySelector('#list');

    //change the item by using cloneNode method
    let task = document.querySelector('.mycheck');
    let taskClone = task.cloneNode(true);
    let taskCloneChange = taskClone.lastChild;
    taskCloneChange.textContent = input.value;

    //placing the clone inside the ul 
    ul.insertBefore(taskClone, ul.childNodes[0]);

    input.value = '';
    }
}