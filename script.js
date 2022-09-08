const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');


form.addEventListener("submit", (e) => {
    e.preventDefault();


    const todo = input.value;
    
    if (todo) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todo;

        todoEl.addEventListener('click',(e)=>{
            todoEl.classList.toggle('completed');
        });

       
        todos.appendChild(todoEl);
        input.value = '';

        const delButton = document.createElement('button');
        delButton.innerText = 'X';
        delButton.style = 'display:absolute;opacity:0.7; border-radius:20px; width:100%;font-size:20px;font-weight:500;background-color:rgba(255,0,0,0.2);border:none;color:black;box-shadow: rgb(44, 62, 80) 0px 15px 15px -20px inset;justify-content:center;';
        todos.appendChild(delButton);

        delButton.addEventListener('dblclick',(e)=>{
           e.preventDefault();
            todoEl.remove();
            delButton.remove();
        })
    }


});