
function abrir(){
    document.getElementById('wrap-open').style.display ="none"
    document.getElementById('menu-mobile').style.display ="flex"
}

function fechar(){
    document.getElementById('wrap-open').style.display ="flex"
    document.getElementById('menu-mobile').style.display ="none"
}

function enviar(){
    const nome =document.getElementById('nome').value
    const assunto =document.getElementById('assunto').value
    // console.log(nome, assunto)
    // montando as strings com as variaveis e utilizando crase para isso
    const msg =`Gostaria de entrar em contato:\n\nNome ${nome}\n Assunto ${assunto}`
    console.log(msg)
    const msgTranformada = encodeURIComponent(msg)
    window.open(`https:wa.me/554199999999?text=${msgTranformada}` )
}
