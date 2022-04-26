const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = function (newtodo) {         //To add todo as list

    const html =
        `
     <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${newtodo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>

    `
    list.innerHTML += html;         //we cant use .value cause its for curent value
};

addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newtodo = e.target.add.value.trim();
    console.log(newtodo);
    if (newtodo.length) {             // if positive value than go inside if
        generateTemplate(newtodo);
    }
    e.target.reset();              //you can also use addForm.reset();
});

list.addEventListener('click', function (e) {          //whenever you click on list
    if (e.target.classList.contains('delete')) {          //if clicked list conttains (delete: which trash icon)
        e.target.parentElement.remove();                //Than remove parent element(le), you cant use this.remover();

    }
});

const filterTodos = function (term) {           // for filter
    Array.from(list.children)
    .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo)=>todo.textContent.toLowerCase().includes(term))
    .forEach((todo)=> todo.classList.remove('filtered'));
    
};

search.addEventListener('keyup', function () {
    const term = search.value.trim();
    filterTodos(term)
})
