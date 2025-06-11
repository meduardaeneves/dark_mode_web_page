const changeThemeBtn = document.querySelector('#change-theme')

// Toggle Dark Mode
function toggleDarkMode() {
// O que vai fazer? Se tem DARK, ele tira o DARK, deixando LIGHT
// Se não tem dark, ele adiciona ele, deixando neste Modo

// Agora, quando eu clico tanto no sol como na lua, ele ativa e desativa o dark    
    document.body.classList.toggle('dark')
}

//Load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();
changeThemeBtn.addEventListener('change', function () {
    toggleDarkMode();   

    //save or remove dark mode
    // Primeiro removo o dark do localStorage e caso ele esteja sendo usado, adiciono
    // Isso faz com que n seja necessário o ELSE 
    localStorage.removeItem("dark");

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark',1);
    }

})