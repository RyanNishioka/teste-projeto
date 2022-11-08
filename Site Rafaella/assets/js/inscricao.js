function showModal(){
    let element = document.getElementById('modal');
    element.classList.add('show-modal');
}

function hideModal(){
    let element = document.getElementById('modal');
    element.classList.remove('show-modal');
}

document.getElementById("btn").addEventListener("click", showModal);
document.getElementById("hide").addEventListener("click", hideModal);

function finish(){
    let element = document.getElementById('title');
    element.classList.remove('on');
    element.classList.add('off');
    
    const element0 = document.getElementById('btn-finish');
    element0.classList.remove('on');
    element0.classList.add('off');
    
    let element2 = document.getElementById('title2');
    element2.classList.remove('off');
    element2.classList.add('on');
    
    let element3 = document.getElementById('sorteiotxt');
    element3.classList.remove('off');
    element3.classList.add('on');
    
    document.getElementById('form').classList.add('off');
};

document.getElementById('btn-finish').addEventListener('click', finish);

const element0 = document.getElementById('btn-finish');

element0.addEventListener('click', function(){
    let result = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    document.querySelector('#result > span').textContent = result;
});




