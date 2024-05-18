const btnCriar = document.querySelector('#btnCriar')
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputusuario')


//
btnCriar.addEventListener('click',function (infosDoEvento){
    infosDoEvento.preventDefault(); //Não limpa o input

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value

    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click',function (){
        novoFilme.style.color = 'red'
        novoFilme.classList.toggle('item-lista')
        
    })
    novoFilme.append(btnEditar)

    listaFilmes.append(novoFilme)

    novoFilme.innerHTML = `
        <h1>${inputUsuario.value}</h1>
        <p>Avaliação: xxxx</p>
        <span>vinriegre</span>
    `
    let imagem = document.createElement('img')
    img.src='link da imagem'

    inputUsuario.value = ""
})

//infosDoEvento.target - Pega o html do objeto que foi criado
//infosDoEvento.target.id - Pega o id do elemento que foi criado
//infosDoEvento.target.parentNode - Pega o elemento pai do objeto que foi clicado