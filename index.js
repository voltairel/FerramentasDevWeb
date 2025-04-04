document.getElementById("btn_form").addEventListener("click", function(evt) {
    evt.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("menssage");

    validateField(nameInput, "O campo Nome deve ser preenchido.");
    validateField(emailInput, "O campo Email deve ser preenchido.");
    validateField(messageInput, "O campo Mensagem deve ser preenchido.");
})

function validateField(input, message) {
    let errorSpan = input.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error-message")) {
        errorSpan = document.createElement("span");
        errorSpan.classList.add("error-message");
        input.parentNode.insertBefore(errorSpan, input.nextSibling);
    }
    
    if (input.value.trim() === "") {
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "12px";
    } else {
        errorSpan.textContent = "";
    }
}
