const modalCloseBtn = document.getElementById('modal-close-btn');
const projectsItem = document.getElementsByClassName('projects-item');
let modalContentName = '';
let nowPage = 1;
let pages = 0;

const openModal = (modalContent) => {
    const modal = document.getElementById('project-modal');
    const body = document.getElementsByTagName('body')[0];
    const modalImg = document.getElementsByClassName('modal-img')[0];
    const imgList = document.getElementsByClassName('img-list')[0];
    const linkBox = document.getElementsByClassName('link-box')[0];
    nowPage = 1;
    pages = modalContent.pages;
    modalContentName = modalContent.name;

    imgList.innerHTML = '';

    linkBox.innerHTML = ''

    linkBox.innerHTML += '<a href="'+modalContent.git+'"><i class="fab fa-github"></i></a>';
    if(modalContent.link) {
        linkBox.innerHTML += '<a href="'+modalContent.link+'"><i class="fab fa-internet-explorer"></i></a>';
    }


    for (let i = 0; i < pages; i++) {
        imgList.innerHTML += '<li class="img"><i class="fas fa-dot-circle"></i></li>';

        if(i+1 == nowPage) {
            document.getElementsByClassName('img')[i].style.color = 'black';
        }
    }

    for (let i = 0; i < pages; i++) {
        document.getElementsByClassName('img')[i].addEventListener('click', ()=>{
            nowPage = i+1;
            console.log(nowPage);
            for (let i = 0; i < pages; i++) {
                document.getElementsByClassName('img')[i].style.color = 'gray'
            }
            document.getElementsByClassName('img')[nowPage-1].style.color = 'black';
            console.log(modalContentName);
            modalImg.style.background = 'url(../portfolio/images/' + modalContentName + '/' + nowPage + '.png) no-repeat center /contain'
            
        });
       
    }

modal.style.display = 'flex';
body.style.overflow = 'hidden';
modalImg.style.background = 'url(../portfolio/images/' + modalContentName + '/' + nowPage + '.png) no-repeat center /contain'
};

for (let i = 0; i < projectsItem.length; i++) {
    const modalContent = {
        name: '',
        pages: 0,
        git: '',
        link: ''
    }

    projectsItem[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                modalContent.name = 'brandShop';
                modalContent.pages = 4;
                modalContent.git = 'https://github.com/hyeongkyuPark/vue-shoppingmall';
                break;
            case 1:
                modalContent.name = 'youtube';
                modalContent.pages = 2;
                modalContent.git = 'https://github.com/hyeongkyuPark/YouTube-Clone';
                modalContent.link = 'https://hyeongkyupark.github.io/YouTube-Clone/template/layout/base.html';
                break;
            case 2:
                modalContent.name = 'netflex';
                modalContent.pages = 2;
                modalContent.git = 'https://github.com/hyeongkyuPark/Netflex-Clone';
                modalContent.link = 'https://hyeongkyupark.github.io/Netflex-Clone/';
                break;
            case 3:
                modalContent.name = 'webtoons';
                modalContent.pages = 5;
                modalContent.git = 'https://github.com/hyeongkyuPark/webtoons';
                break;
        }

        openModal(modalContent);
    });
}


const contentMoveLeft = () => {
    if(nowPage <= 1) {
        nowPage = 1;
    }else {
        nowPage--;
        for (let i = 0; i < pages; i++) {
            if(i+1 == nowPage) {
                document.getElementsByClassName('img')[i].style.color = 'black'
            } else {
                document.getElementsByClassName('img')[i].style.color = 'gray'
            }
        }
        document.getElementsByClassName('modal-img')[0].style.background = 'url(../portfolio/images/' + modalContentName + '/' + nowPage + '.png) no-repeat center /contain'
    }
};
const contentMoveRight = () => {
    if(nowPage >= pages) {
        nowPage = pages;
    }else {
        nowPage++;
        for (let i = 0; i < pages; i++) {
            if(i+1 == nowPage) {
                document.getElementsByClassName('img')[i].style.color = 'black'
            } else {
                document.getElementsByClassName('img')[i].style.color = 'gray'
            }
        }
        document.getElementsByClassName('modal-img')[0].style.background = 'url(../portfolio/images/' + modalContentName + '/' + nowPage + '.png) no-repeat center /contain'
    }
};

document.getElementById('left-btn').addEventListener('click', contentMoveLeft);
document.getElementById('right-btn').addEventListener('click', contentMoveRight);




modalCloseBtn.addEventListener('click', () => {
    const modal = document.getElementById('project-modal');
    const body = document.getElementsByTagName('body')[0];

    modal.style.display = 'none';
    body.style.overflow = 'auto';
});