const btn = document.querySelector(".header-list_btn");
const menu = document.querySelector(".header-list");
const item = document.getElementsByClassName("header-list_item");

btn.addEventListener("click",function(){
    menu.classList.toggle("active");
});

for (let index = 0; index < item.length; index++) {
    item[index].addEventListener("click",function(){
        for (let index = 0; index < item.length; index++) {
            item[index].classList.remove("active");
        }
        item[index].classList.add("active");
    });
};