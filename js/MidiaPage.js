let right = document.getElementById('top')

LoadFilmData()

function LoadFilmData() {
    var Nome = localStorage.getItem('filmeClicado')
    var Data = JSON.parse(localStorage.getItem(localStorage.getItem('currentStorage')))
    var lista = JSON.parse(localStorage.getItem('moviesLikes'))
    var lista2 = JSON.parse(localStorage.getItem('moviesSeeLater'))
    
    let img = document.getElementById('img')
    var item

    lista.forEach((item_ , i) =>{
        if (Nome == item_.Nome) {
            var icon = document.getElementById('ionicon')
            icon.classList.add('Cutido')
        }else{
            icon.classList.remove('Cutido')
        }
    })

    lista2.forEach((item_2 , i) =>{
        if (Nome == item_2.Nome) {
            var icon2 = document.getElementById('Clock')
            icon2.classList.add('Asistir')
        }else{
            icon2.classList.remove('Asistir')
        }
    })

    for (let i = 0; i < Data.length; i++) {
        item = Data[i];
        if (Nome == item.Nome) {

            document.body.style.background = `var(--Body_Bg), url("${item.Link}")`
            document.body.style.backgroundRepeat = `no-repeat`
            document.body.style.backgroundSize = `cover`

            img.src = item.Link

            right.innerHTML = `
                <p>ASSISTIR ${item.Nome} ONLINE</p>
                <h2>${item.Nome}</h2>

                <div class="infos">
                    <div class="y">${item.Ano}</div>
                    <div class="r">${item.Pontuação}</div>
                    <div class="t">${item.duracaoH}h, ${item.duracaoM}min</div>
                </div>
            `
            document.getElementById('descricao').innerHTML = item.Descricao
        }

    }

}

function AddCurtido() { 
    var lista = []
    var user = []

    user = JSON.parse(localStorage.getItem('UserDb'))
    var icon = document.getElementById('ionicon')
    
    user.forEach(us => {
        if (us.Nome == localStorage.getItem('Nome')) {
            lista = us.moviesLikes
        }
    })
    if (lista == null) {
        lista = []
    }

    var podeAdd = false
    

    if (lista.length > 0) {
        lista.forEach(item_ => {
            if (localStorage.getItem('filmeClicado') != item_.Nome) {
                podeAdd = true
            }else {
                if(icon.classList.contains("Cutido")){
                    var i = lista.indexOf(GetData())
                    lista.splice(i,1)
                    podeAdd = true
                }else {
                    podeAdd = false
                }
            }
        });
    }else {
        podeAdd = true
    }


    if (podeAdd) {

        if(icon.classList.contains("Cutido")){
            icon.classList.remove('Cutido')
        }else {
            lista.push(GetData())
            icon.classList.add('Cutido')
        }

        localStorage.setItem('moviesLikes', JSON.stringify(lista))
        user.forEach((us , i) => {
            if (us.Nome == localStorage.getItem('Nome')) {
                user[i].moviesLikes = lista
            }
        })
        localStorage.setItem('UserDb', JSON.stringify(user))
    }

}
function AddMaisTarde() { 
    var lista = []
    var user = []

    user = JSON.parse(localStorage.getItem('UserDb'))
    var icon = document.getElementById('Clock')
    
    user.forEach(us => {
        if (us.Nome == localStorage.getItem('Nome')) {
            lista = us.moviesSeeLater
        }
    })
    if (lista == null) {
        lista = []
    }

    var podeAdd = false
    

    if (lista.length > 0) {
        lista.forEach(item_ => {
            if (localStorage.getItem('filmeClicado') != item_.Nome) {
                podeAdd = true
            }else {
                if(icon.classList.contains("Asistir")){
                    var i = lista.indexOf(GetData())
                    lista.splice(i,1)
                    podeAdd = true
                }else {
                    podeAdd = false
                }
            }
        });
    }else {
        podeAdd = true
    }


    if (podeAdd) {

        if(icon.classList.contains("Asistir")){
            icon.classList.remove('Asistir')
        }else {
            lista.push(GetData())
            icon.classList.add('Asistir')
        }

        localStorage.setItem('moviesSeeLater', JSON.stringify(lista))
        user.forEach((us , i) => {
            if (us.Nome == localStorage.getItem('Nome')) {
                user[i].moviesSeeLater = lista
            }
        })
        localStorage.setItem('UserDb', JSON.stringify(user))
    }

}

function GetData() {
    var Data = JSON.parse(localStorage.getItem(localStorage.getItem('currentStorage')))
    var Nome = localStorage.getItem('filmeClicado')

    var item

    for (let i = 0; i < Data.length; i++) {
        item = Data[i];
        if (Nome == item.Nome) {
            return item
        }

    }
}