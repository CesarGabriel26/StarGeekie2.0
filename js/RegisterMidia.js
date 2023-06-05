function GotoConteudo(data) {
    localStorage.setItem('currentStorage',data)
}


let NomeINP = document.getElementById('Nome')
let LinkINP = document.getElementById('Link')
let AnoINP = document.getElementById('Ano')
let PontuaçãoINP = document.getElementById('Pontuação')
let duracaoHINP = document.getElementById('duracaoH')
let duracaoMINP = document.getElementById('duracaoM')
let DescricaoINP = document.getElementById('DescricaoINP')

let Registrar = document.getElementById('Registrar')
let Cancelar = document.getElementById('Cancelar')
let Tipos = document.querySelectorAll('#Tipo')

var array_ = []

setInterval(()=> {
    CheckDuracaoINP()
    CriarCard()

    Tipos.forEach(Tipo => {
        if(Tipo.checked){
            array_ = JSON.parse(localStorage.getItem(Tipo.value))
        }
    });

    if(array_ == null){
        array_ = []
    }

},100)

function CheckDuracaoINP() {
    if(duracaoHINP.value > 24){
        duracaoHINP.value = 24
    }else if (duracaoHINP.value < 0) {
        duracaoHINP.value = 0
    }

    if(duracaoMINP.value > 60){
        duracaoMINP.value = 60
    }else if (duracaoMINP.value < 0) {
        duracaoMINP.value = 0
    }

    if(PontuaçãoINP.value > 5){
        PontuaçãoINP.value = 5
    }else if (PontuaçãoINP.value < 0) {
        PontuaçãoINP.value = 0
    }
}

function CriarCard() {

    var Nome = NomeINP.value
    var Link = LinkINP.value
    var Ano = AnoINP.value
    var Pontuação = PontuaçãoINP.value
    var duracaoH = duracaoHINP.value
    var duracaoM = duracaoMINP.value

    var html = `
        <a title="Asistir: ${Nome}" class="Poster" href="#">
            <img src="${Link}" class="img" width="170" height="270" alt="Poster ${Nome}" loading="lazy"
                decoding="async">
            <div class="grad"></div>
            <div class="infos">
                <p>${Nome}</p>
                <div class="b">
                    <div class="y">${Ano}</div>
                    <div class="r">${Pontuação}</div>
                    <div class="t">${duracaoH}h, ${duracaoM}min</div>
                </div>
            </div>
        </a>
    `

    document.getElementById('CardContainer').innerHTML = html

}

Cancelar.addEventListener('click',()=>{
    document.getElementById('Form').reset()
})

Registrar.addEventListener('click',()=>{

    if (confirm('Deseja registrar esta midia?') == false) {
        return
    }

    var Storage
    var Nome = NomeINP.value
    var Link = LinkINP.value
    var Ano = AnoINP.value
    var Pontuação = PontuaçãoINP.value
    var duracaoH = duracaoHINP.value
    var duracaoM = duracaoMINP.value
    var Descricao = DescricaoINP.value

    Tipos.forEach(Tipo => {
        if(Tipo.checked){
            Storage = Tipo.value
        }
    });
    if(ChecarVasio(Nome,Link)){

        var Conteudo = {
            Nome : Nome,
            Link : Link,
            Ano : Ano,
            Pontuação : Pontuação,
            duracaoH : duracaoH,
            duracaoM : duracaoM,
            Descricao : Descricao
        }
        array_.push(Conteudo)
        localStorage.setItem(Storage,JSON.stringify(array_))/**/
    }

})

function ChecarVasio(Nome,Link) {
    
    if (Nome == "") {
        return false
    }
    if (Link == "") {
        return false
    }
    return true
}
