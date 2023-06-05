let Container_All = document.getElementById('Container_All')
let container_recente = document.getElementById('container_recente')
let TituloRecente = document.getElementById('TituloRecente')
let ItemNav = document.querySelectorAll('.ItemNav')

function GotoConteudo(data) {
    localStorage.setItem('currentStorage',data)
}

ItemNav.forEach(item => {

    if (item.getAttribute('data-Storager') == localStorage.getItem('currentStorage')) {
        item.classList.add('atual')
    }else {
        item.classList.remove('atual')
    }
})

document.title = `Star Geekie - ${localStorage.getItem('currentStorage')}`
LoadList(localStorage.getItem('currentStorage'))

function LoadList(Data){
    TituloRecente.innerHTML = `Veja ${Data} - Recomendados`
    var Reset = `
        <div class="notYet" style="color: white;">
            <svg style="display: block;height: 100px;" viewBox="0 -41 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M480.602 0H31.398C14.086 0 0 14.086 0 31.398V332.98c0 17.317 14.086 31.403 31.398 31.403h56.696c4.172 0 7.554-3.383 7.554-7.555s-3.382-7.55-7.554-7.55H31.398c-8.984 0-16.293-7.31-16.293-16.298V31.398c0-8.984 7.31-16.293 16.293-16.293h449.204c8.984 0 16.296 7.31 16.296 16.293V332.98c0 8.989-7.312 16.297-16.296 16.297H339.074c-7.383 0-14.32 2.875-19.539 8.094l-54.676 54.676c-4.886 4.883-12.832 4.883-17.718 0l-54.676-54.676c-5.219-5.219-12.156-8.094-19.54-8.094h-53.363a7.552 7.552 0 100 15.106h53.364c3.347 0 6.492 1.3 8.855 3.668l54.68 54.68c5.387 5.382 12.465 8.078 19.539 8.078s14.152-2.696 19.54-8.079l54.679-54.68a12.426 12.426 0 018.855-3.667h141.528c17.312 0 31.398-14.086 31.398-31.403V31.398C512 14.086 497.914 0 480.602 0zm0 0" fill="currentColor" stroke="currentColor">
                
                </path>
                <path
                    d="M463.7 75.656a7.549 7.549 0 007.55-7.55V50.968c0-6.805-5.531-12.336-12.336-12.336H53.086c-6.805 0-12.336 5.531-12.336 12.336v261.386c0 6.801 5.531 12.336 12.336 12.336h127.23c10.301 0 19.989 4.012 27.27 11.293l40.195 40.196a12.263 12.263 0 008.723 3.613 12.24 12.24 0 008.723-3.613l40.191-40.192c7.285-7.285 16.969-11.297 27.273-11.297h126.223c6.805 0 12.34-5.535 12.34-12.336V99.32c0-4.172-3.383-7.55-7.555-7.55s-7.55 3.378-7.55 7.55v210.266H332.69c-14.34 0-27.816 5.582-37.953 15.723l-38.234 38.23-38.238-38.234c-10.133-10.137-23.614-15.72-37.95-15.72H55.852V53.736h400.296v14.37a7.549 7.549 0 007.551 7.551zm0 0"  fill="currentColor" stroke="currentColor">
                </path>
                <path
                    d="M329.422 112.754c-11.781-11.777-30.945-11.777-42.695-.027L256 143.145l-30.7-30.391c-11.777-11.777-30.94-11.777-42.722 0-11.777 11.777-11.777 30.941.027 42.746l30.461 30.148-29.968 29.672c-5.852 5.79-9.082 13.528-9.106 21.79-.02 8.257 3.172 16.011 8.996 21.835 5.766 5.766 13.356 8.649 20.95 8.649 7.539 0 15.085-2.848 20.84-8.543L256 228.148l31.223 30.903c11.55 11.433 30.297 11.383 41.793-.106 5.82-5.824 9.011-13.578 8.992-21.836-.02-8.261-3.254-16-9.106-21.789l-29.968-29.672 30.488-30.171c11.777-11.782 11.777-30.946 0-42.723zm-10.656 32.016l-33.043 32.707a11.416 11.416 0 00-3.41 8.175c0 3.094 1.21 5.996 3.41 8.172l32.554 32.23c2.973 2.942 4.614 6.883 4.625 11.094.012 4.211-1.613 8.16-4.57 11.118-5.633 5.632-14.824 5.656-20.484.05l-33.754-33.41c-4.465-4.418-11.727-4.418-16.188 0l-33.758 33.41c-5.66 5.606-14.847 5.582-20.484-.054-2.957-2.957-4.578-6.903-4.57-11.114.011-4.21 1.652-8.152 4.629-11.093l32.55-32.23a11.414 11.414 0 003.41-8.173c0-3.097-1.21-6-3.41-8.175l-33.015-32.68c-5.887-5.89-5.887-15.473 0-21.363a15.044 15.044 0 0110.672-4.414c3.875 0 7.754 1.48 10.715 4.44l33.257 32.927c4.465 4.418 11.727 4.418 16.192 0l33.285-32.95c5.887-5.89 15.473-5.89 21.36 0 5.89 5.887 5.89 15.47.027 21.333zm0 0"  fill="currentColor" stroke="currentColor">
                </path>
            </svg>
            Não a nenhum conteudo aqui ainda 
        </div>
    `

    var list = JSON.parse(localStorage.getItem(Data))
    Container_All.innerHTML = ""

    if(list && list != "" && list != null){
        list.forEach(item =>{

            var html = `
                <a title="Asistir: ${item.Nome}" class="Poster" href="#">
                    <img src="${item.Link}" class="img" width="170" height="270" alt="Poster ${item.Nome}" loading="lazy"
                        decoding="async">
                    <div class="grad"></div>
                    <div class="infos">
                        <p>${item.Nome}</p>
                        <div class="b">
                            <div class="y">${item.Ano}</div>
                            <div class="r">${item.Pontuação}</div>
                            <div class="t">${item.duracaoH}h, ${item.duracaoM}min</div>
                        </div>
                    </div>
                </a>
            `
            Container_All.innerHTML += html
        })
    }else {
        Container_All.innerHTML = Reset
    }

    container_recente.innerHTML = Reset

}

