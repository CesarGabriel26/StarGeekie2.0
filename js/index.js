let Buttons = document.querySelectorAll("#Entrar")
let Select_language = document.querySelectorAll("#LanguageSelect");

if (localStorage.getItem('Nome') != "") {
    window.location.href = "html/perfil.html"
}

Buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        window.location.href = "html/login.html"
    })
})

Select_language.forEach(selec =>{

    var value = 0

    selec.addEventListener('change', ()=>{
        value = selec.selectedIndex;
        Select_language.forEach(selec =>{
            selec.selectedIndex = value;
        })  
        localStorage.setItem('Language',value)
    })

    selec.selectedIndex = localStorage.getItem('Language');
})