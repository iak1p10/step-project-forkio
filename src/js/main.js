const btn = document.querySelector(".header-list__btn");
const menu = document.querySelector(".header-list");
const item = document.getElementsByClassName("header-list__item");

btn.addEventListener("click",function(){
    menu.classList.toggle("active");
    btn.classList.toggle("active");
});
for (let index = 0; index < item.length; index++) {
    item[index].addEventListener("click",function(){
        for (let index = 0; index < item.length; index++) {
            item[index].classList.remove("active");
        }
        item[index].classList.add("active");
    });
};
