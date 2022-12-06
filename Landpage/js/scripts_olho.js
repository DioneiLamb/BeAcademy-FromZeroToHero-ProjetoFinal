// mostra e econde no olho login
let btn = document.querySelector('.fa-eye') //adicionei a classe .fa-eye na minha variável btn

btn.addEventListener('click', () =>{ //esse meu btn recebe um evento click que ao ser clicado vai executar uma função
    let input_senha = document.querySelector ('#senha') //essa função vai criar uma variável input_senha e vai pegar o id senha do input 

    if(input_senha.getAttribute('type') == 'password') { //se o meu input_senha tiver o atributo type e se esse atributo for do tipo password eu pego ele e...
        input_senha.setAttribute('type','text') //troco pelo tipo text
        } else { //senão
            input_senha.setAttribute('type','password') //faça ao contrário
        }
})

//##########################

// mostra e econde no olho no campo senha do cadastro 
let btn1 = document.querySelector('#ver_senha') //adicionei a classe .fa-eye na minha variável btn

btn1.addEventListener('click', () =>{ //esse meu btn recebe um evento click que ao ser clicado vai executar uma função
    let input_senha = document.querySelector ('#label_v_senha') //essa função vai criar uma variável input_senha e vai pegar o id senha do input 

    if(input_senha.getAttribute('type') == 'password') { //se o meu input_senha tiver o atributo type e se esse atributo for do tipo password eu pego ele e...
        input_senha.setAttribute('type','text') //troco pelo tipo text
        } else { //senão
            input_senha.setAttribute('type','password') //faça ao contrário
        }
})

//################
// mostra e econde no olho no campo senha do cadastro 
let btn2 = document.querySelector('#ver_confirm_senha') //adicionei a classe .fa-eye na minha variável btn

btn2.addEventListener('click', () =>{ //esse meu btn recebe um evento click que ao ser clicado vai executar uma função
    let input_senha = document.querySelector ('#label_v_conf_senha') //essa função vai criar uma variável input_senha e vai pegar o id senha do input 

    if(input_senha.getAttribute('type') == 'password') { //se o meu input_senha tiver o atributo type e se esse atributo for do tipo password eu pego ele e...
        input_senha.setAttribute('type','text') //troco pelo tipo text
        } else { //senão
            input_senha.setAttribute('type','password') //faça ao contrário
        }
})