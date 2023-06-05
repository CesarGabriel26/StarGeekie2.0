let right = document.getElementById('top')

LoadFilmData()
var item

function LoadFilmData() {
    var Nome = localStorage.getItem('filmeClicado')
    var Data = JSON.parse(localStorage.getItem(localStorage.getItem('currentStorage')))

    let img = document.getElementById('img')

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

    user.forEach(us => {
        if(us.Nome == localStorage.getItem('Nome')){
            lista = us.moviesLikes
        }
    })

    if (lista == null) {
        lista = []
    }
    console.log(lista);

    if (lista.length != 0) {

        lista.forEach(item_ => {
            if (item.Nome != item_.Nome) {
                lista.push(item)

                
                user.forEach(us => {
                    if(us.Nome == localStorage.getItem('Nome')){
                        us.moviesLikes = lista
                    }
                })
                localStorage.setItem('UserDb', JSON.stringify(user))
            }
        });
    } else {

        lista.push(item)
        user.forEach(us => {
            if(us.Nome == localStorage.getItem('Nome')){
                us.moviesLikes = lista
            }
        })
        localStorage.setItem('UserDb', JSON.stringify(user))
    }



}