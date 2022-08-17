let form = document.getElementById("form");
let input = document.getElementById("input");
let error = document.getElementById("error");
    
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click'); 
    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        error.innerHTML="Input box is blank! Please, write something. "
    }
    else {
        error.innerHTML = ""; 
    }
}