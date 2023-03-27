 window.onload =function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const button = document.getElementsByClassName('menubtn');

    menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
for (var i=0;i<button.length;i++){
    button[i].addEventListener('click',function () {
        mobile_menu.classList.remove('is-active');
        menu_btn.classList.remove('is-active')
    })
}
    
 }