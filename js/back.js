const header = document.querySelector('header');
const back = header.querySelector('img');

back.addEventListener('click', ref_back);

function ref_back(){
    const questionPath = `../pages/home.html`;

    window.location.href = questionPath;
}