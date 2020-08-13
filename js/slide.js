let itemNum = 0;

function getItems() {
    const selected = document.getElementsByClassName('slide-item')[itemNum];
    let noneSelected;

    if(itemNum) {
        noneSelected = document.getElementsByClassName('slide-item')[0];
    } else {
        noneSelected = document.getElementsByClassName('slide-item')[1];
    }

    return {selected, noneSelected};
}

function getBtn() {
    const selectedBtn = document.getElementsByClassName('slide-btn')[itemNum];
    let noneSelectedBtn;

    if(itemNum) {
        noneSelectedBtn = document.getElementsByClassName('slide-btn')[0];
    } else {
        noneSelectedBtn = document.getElementsByClassName('slide-btn')[1];
    }

    return {selectedBtn, noneSelectedBtn};
}

function setSelectedItem() {
    if(itemNum) {
        itemNum = 0;
    } else {
        itemNum = 1;
    }
}

setInterval(()=> {
    let {selected, noneSelected} = getItems();
    let {selectedBtn, noneSelectedBtn} = getBtn();

    selected.style.transform = 'scale(0.5)';
    selected.style.opacity = 0;
    selectedBtn.style.color = 'rgb(129, 129, 129)';
    noneSelected.style.transform = 'scale(1)';
    noneSelected.style.opacity = 1;
    noneSelectedBtn.style.color = 'black';

    setSelectedItem();
}, 5000);

let item1 = document.getElementsByClassName('slide-item')[0];
let item2 = document.getElementsByClassName('slide-item')[1];
let btn1 = document.getElementsByClassName('slide-btn')[0];
let btn2 = document.getElementsByClassName('slide-btn')[1];

btn1.addEventListener('click', () => {
    itemNum = 0;
    item2.style.transform = 'scale(0.5)';
    item2.style.opacity = 0;
    btn2.style.color = 'rgb(129, 129, 129)';
    item1.style.transform = 'scale(1)';
    item1.style.opacity = 1;
    btn1.style.color = 'black';
});
btn2.addEventListener('click', () => {
    itemNum = 1;
    item1.style.transform = 'scale(0.5)';
    item1.style.opacity = 0;
    btn1.style.color = 'rgb(129, 129, 129)';
    item2.style.transform = 'scale(1)';
    item2.style.opacity = 1;
    btn2.style.color = 'black';
});