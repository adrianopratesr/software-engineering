const validationInsertEmail = () => {
    const emailField = document.getElementById('emailInput')
    const error = document.getElementById('errorText')
    if (emailField.value == "") {
        error.textContent = "Erouuuuuuuu, falta digitar seu e-mail!"
    } else {
        alert("Email cadastrado com sucesso!")
    }
}

document.getElementById('sendButton').
    addEventListener('click', validationInsertEmail)