let Box = document.querySelector('.box')
let LoginBox = document.querySelector('.LoginBox')
let SingUpBox = document.querySelector('.SingUpBox')
let Alerta = document.querySelectorAll('#Alerta')
let pfpInput = document.getElementById('pfpInput')
let pfpInputBtn = document.getElementById('pfpInputBtn')

var PfpPath = null

function Mudar(){

    if(Box.classList.contains('Login')){
        Box.classList.remove('Login')
        Box.classList.add('SingUp')

        LoginBox.classList.remove('active')
        SingUpBox.classList.add('active')
    }else {
        Box.classList.add('Login')
        Box.classList.remove('SingUp')

        LoginBox.classList.add('active')
        SingUpBox.classList.remove('active')
    }

}

function MostrarAlerta(Texto) {
    Alerta.forEach(Alert =>{
        Alert.style.display = 'block'
        Alert.innerHTML = Texto
    
        setInterval(()=>{
            Alert.style.display = 'none'
        },3000)
    })
}

function Login(){
    UserNameLog = document.getElementById('UserNameLog').value
    PasswordLog = document.getElementById('PasswordLog').value
    ValidarInputs(UserNameLog,'none',PasswordLog,"none")
}

function SingUp() {
    Nome = document.getElementById('UserName').value
    Email = document.getElementById('Email').value
    Senha = document.getElementById('Password').value
    ConfSenha = document.getElementById('ConfirmPassword').value

    if (PfpPath == null) {
        MostrarAlerta("Escolha uma foto de perfil")
        return
    }

    if (ValidarInputs(Nome,Email,Senha,ConfSenha)) {
        localStorage.setItem('Nome',Nome)
        localStorage.setItem('Email',Email)
        localStorage.setItem('Senha',Senha)
        localStorage.setItem('Pfp',PfpPath)
        window.location.href = "../html/perfil.html"
    }
}

pfpInputBtn.addEventListener('click',()=>{
    pfpInput.click()
})

if (pfpInput) {
    pfpInput.addEventListener('change', e => {
        const file = pfpInput.files[0]
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            PfpPath = reader.result
        })
        reader.readAsDataURL(file);
    })
}

function ValidarInputs(Nome,Email,Senha,ConfSenha) {
    
    let checkbox = document.getElementById('checkbox')

    if(Nome == "" || Email == "" || Senha == "" || ConfSenha == ""){
        MostrarAlerta("Preencha todos os campos a cima")
        return false
    }

    if (Box.classList.contains('SingUp')) {
        if (Senha != ConfSenha) {
            MostrarAlerta("Senhas não coincidem")
            return false
        }
    }

    if (Box.classList.contains('SingUp')) {
        if (checkbox.checked == false) {
            MostrarAlerta("Leia / condorde com os termos de uso")
            return false
        }   
    }

    return true
}