const main = document.querySelector('main');

const type_container = main.querySelectorAll('.container');

type_container.forEach(item => item.addEventListener('click', (event) => ref_link(event)));

function ref_link(event){
    const paragraph = event.currentTarget.querySelector('p');

    const numberText = paragraph.textContent.trim().split('.')[0];
    const number = parseInt(numberText, 10);

    const questionPath = `../pages/question_${number < 10 ? number : number.toString()}.html`;
    window.location.href = questionPath;

    console.log(questionPath);
}