const p = main.querySelectorAll('p');
const p_values = Array.from(p).map(item => item.textContent);

const container = document.querySelectorAll('.container');
const container_nothing = document.querySelector('.nothing-content');

const input = main.querySelector('input');
input.addEventListener('input', search_question);


var filteredContainerValues = [];

function search_question() {
    filteredContainerValues = [];
    const searchInput = input.value.toLowerCase();
    
    if(searchInput == null || searchInput == ''){
        container.forEach(item => item.classList.remove('no_show'));
    }
    else{
        container.forEach(item => item.classList.add('no_show'));
    
        p_values.filter((text, index) => search_list(text, searchInput, index));
        filteredContainerValues.forEach(item => item.classList.remove('no_show'));

        if(filteredContainerValues.length == 0){
            container_nothing.classList.remove('no_show');
        }
        else{
            container_nothing.classList.add('no_show');
        }
    }
}

function search_list(text, searchInput, index){
    if(text.toLowerCase().includes(searchInput)){
        filteredContainerValues.push(container[index]);
    }
}
