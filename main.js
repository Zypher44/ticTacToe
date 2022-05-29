let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click', function(){
    var paragarph = document.createElement('p');
    paragarph.classList.add('paragraph-styling');
    paragarph.innerText = inputField.value;
    toDoContainer.appendChild(paragarph);
    inputField.value = '';
    paragarph.addEventListener('click', function(){
        paragarph.style.textDecoration = 'line-through';

    })

    paragarph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragarph);
    })
})