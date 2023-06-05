
var Nome = localStorage.getItem('Nome')
var Email = localStorage.getItem('Email')
var Senha = localStorage.getItem('Senha')
var PfpPath= localStorage.getItem('Pfp')

let UserPicture = document.querySelectorAll('#UserPicture')
let Name = document.getElementById('Name')

SetAll()

function SetAll() {
    if (Name) {
        Name.innerHTML = Nome
    }

    UserPicture.forEach(pic => {
        pic.src = PfpPath
    })
}

function LogOut() {    
    localStorage.setItem('Nome',"")
    localStorage.setItem('Email',"")
    localStorage.setItem('Senha',"")
    localStorage.setItem('Pfp',"")
    window.location.href = '../index.html'
}

function GotoConteudo(data) {
    localStorage.setItem('currentStorage',data)
}