const form = document.getElementById('form');
const input = document.getElementById('input');
const error = document.getElementById('error');
const post = document.getElementById("post");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submit button is clicked')
    formValidation();
})

// form validation
const formValidation = () => {
    if (input.value === "") {
        error.innerHTML = "input field is empty";
    }
    else {
        error.innerHTML = "";
        acceptData();
    }
}

const data = {};

const acceptData = () => {
    data['text'] = input.value
    console.log(data);
    createPost()
}

const createPost = () => {
    post.innerHTML += `
    <div>
    <p>${data['text']}</p>
    <span class="options">
        <i onClick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onclick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
    </div>`
    input.value = "";
}

const deletePost = e => {
    e.parentElement.parentElement.remove();
}

const updatePost = e => {
    input.value = e.parentElement.previousElementSibling.innerHTML; 
    e.parentElement.parentElement.remove();
}