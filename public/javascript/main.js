let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex-navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.getElementById("filter-clear").onclick = function () 
{
    // Lấy danh sách checkbox
    var checkboxes = document.getElementsByName('name[]');

    // Lặp và thiết lập Uncheck
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
};

document.getElementById("filter-clear1").onclick = function () 
{
    // Lấy danh sách checkbox
    var checkboxes = document.getElementsByName('name[1]');

    // Lặp và thiết lập Uncheck
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
};

document.getElementById("filter-clear2").onclick = function () 
{
    // Lấy danh sách checkbox
    var checkboxes = document.getElementsByName('name[2]');

    // Lặp và thiết lập Uncheck
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
};

document.getElementById("filter-clear3").onclick = function () 
{
    // Lấy danh sách checkbox
    var checkboxes = document.getElementsByName('name[3]');

    // Lặp và thiết lập Uncheck
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
};