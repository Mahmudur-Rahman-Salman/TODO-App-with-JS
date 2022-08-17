let form = document.getElementById("form");
let input = document.getElementById("input");
let error = document.getElementById("error");
let posts = document.getElementById("posts");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click');
    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        error.innerHTML = "Input box is blank! Please, write something. "
    }
    else {
        error.innerHTML = "";
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data["text"]}</p>
    <span class="options">
        <i onClick="updatePost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash"></i></span>
    </div>
`
    input.value = "";
}


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let updatePost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML; 
    e.parentElement.parentElement.remove();
}