//######### criando a função de cadastrar o usuario ####
//criando as variaveis
let nome = document.querySelector('#c_nome')
let label_nome = document.querySelector('#label_nome')

let usuario = document.querySelector('#usuario')
let label_usuario = document.querySelector('#label_usuario')

let ver_senha = document.querySelector('#ver_senha')
let label_v_senha = document.querySelector('#label_v_senha')

let ver_confirm_senha = document.querySelector('#ver_confirm_senha')
let label_v_conf_senha = document.querySelector('#label_v_conf_senha')

// chamando os inputs e criando eventos para eles
nome.addEventListener('keyup', () => {//pra quando eu tirar o dedo da tecla ele já começa a fazer o que está dentro da arrow function
    if(nome.value.lenght < 2){ 
        label_nome.setAttribute('style', 'color: red')
        //se o valor da minha variavel nome for menor ou igual a 2 então eu troco a cor da letra pra vermelho
        label_nome.innerHTML = '*Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'color: red')
    } else{
        label_nome.setAttribute('style', 'color: green')
        // se tiver mais que 3 letras a cor fica verde
        nome.setAttribute('style', 'color: green')
    }
}) 

usuario.addEventListener('keyup', () => {
    if(usuario.value.lenght < 2){ 
        label_usuario.setAttribute('style', 'color: red')
        label_usuario.innerHTML = '*Insira no minimo 3 caracteres'
        usuario.setAttribute('style', 'color: red')
    } else{
        label_usuario.setAttribute('style', 'color: green')
        usuario.setAttribute('style', 'color: green')
    }
})


function cadastrar(){
    //  alert('botão clicado')
}
