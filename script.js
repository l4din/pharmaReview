



//funcoes
function showHideCont(){
    const tgBtn = document.querySelector('#togglebtn');
    const navCont = document.querySelector('.navContainer');

    navCont.classList.toggle('hidden');

    if(navCont.classList.contains('hidden')){
        tgBtn.textContent = "Acessar";
    }else{
        tgBtn.textContent = "Ocultar";
    }
}




//Eventos
document.querySelector('#togglebtn').addEventListener('click',showHideCont);