const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = function(newtodo){         //To add todo as list

    const html =
     `
     <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${newtodo }</span>
          <i class="far fa-trash-alt delete"></i>
        </li>

    `
list.innerHTML += html;         //we cant use .value cause its for curent value
};

addForm.addEventListener('submit',function(e){
e.preventDefault();
const newtodo = e.target.add.value.trim() ;
console.log(newtodo);
generateTemplate(newtodo);
});

