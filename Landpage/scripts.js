// mostra e econde no olho login
let btnSenha = document.querySelector('.fa-eye')

btn.addEventListener('click', () =>{
    let inputSenha = document.querySelector ('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type','text')
        } else {
            inputSenha.setAttribute('type','password')
        }
})

// mostra e econde no olho cadastro ver senha
let btnVerSenha = document.querySelector('#verSenha')

btn.addEventListener('click', () =>{
    let inputVerSenha = document.querySelector ('#verSenha')

    if(inputVerSenha.getAttribute('type') == 'password') {
        inputVerSenha.setAttribute('type','text')
        } else {
            inputVerSenha.setAttribute('type','password')
        }
})

// mostra e econde no olho cadastro confirma senha
let verConfirmSenha = document.querySelector('#verConfirmSenha')

btn.addEventListener('click', () =>{
    let inputConfirmSenha = document.querySelector ('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type','text')
        } else {
            inputConfirmSenha.setAttribute('type','password')
        }
})
