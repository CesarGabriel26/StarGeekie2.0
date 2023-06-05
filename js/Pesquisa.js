let Pesquisa_INP = document.getElementById('Pesquisa_INP')
let PosteresContainer = document.getElementById('Container_All')


Pesquisa_INP.addEventListener('keyup', () => {
    let Posterres = PosteresContainer.getElementsByClassName('Poster')

    var filtro
    var Titulos = []
    filtro = Pesquisa_INP.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    for (let i = 0; i < Posterres.length; i++) {
        Titulos.push(Posterres[i].getElementsByTagName('p')[0])
        
    }

    for (let i = 0; i < Titulos.length; i++) {
        var Item = Titulos[i];

        if (Item.innerHTML.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(filtro) > -1) {
            Posterres[i].style.display = "";
        } else {
            Posterres[i].style.display = "none";
        }

    }

})

