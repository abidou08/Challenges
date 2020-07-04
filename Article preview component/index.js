const shareBtn = document.querySelector('.btn_share');
const shareIcon = document.querySelector('.share_icon_container');
const arrow = document.querySelector('.arrow');
const reviewer = document.querySelector('.reviewer_div');
const shareDiv = document.querySelector('.share_div');
const blueBtn = document.querySelector('.share_icon_container .btn_share');

shareBtn.addEventListener('click', function(){
    shareIcon.classList.toggle("show");
    this.classList.toggle("bluebg");
    arrow.classList.toggle("white");
    reviewer.classList.toggle("hide");
    shareDiv.classList.toggle("hide");
});

blueBtn.addEventListener('click', function(){
    shareIcon.classList.toggle("show");
    shareBtn.classList.remove("bluebg");
    arrow.classList.remove("white");
    reviewer.classList.toggle("hide");
    shareDiv.classList.toggle("hide");
});