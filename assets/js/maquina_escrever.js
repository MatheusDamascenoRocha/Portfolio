const meuNome = document.querySelector('.meu-nome')
const fNome = meuNome.innerHTML
meuNome.innerHTML = ''

function digitar(nome) {
    setTimeout(() => {
        const meuNomeF= nome.split('')
        meuNome.innerHTML=''
        meuNomeF.forEach((letra,index) => {
            setTimeout(function (){
                meuNome.innerHTML += letra
            },100* index)
        })}, 1000)
}

digitar(fNome)