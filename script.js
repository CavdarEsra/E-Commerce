function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}
// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //show search
  const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass=document.querySelector('.site');
    searchButton.addEventListener('click', function(){
        showClass.classList.toggle('showsearch')
    })
    tClose.addEventListener('click', function(){
        showClass.classList.remove('showsearch')
    })

    window.addEventListener("scroll", function() {
        var headerNav = document.querySelector(".header-nav");
        var searchBox = document.querySelector(".search-box2");
        if (window.pageYOffset > 0) {
          headerNav.classList.add("sticky");
          searchBox.classList.add("show-search");
        } else {
          headerNav.classList.remove("sticky");
          searchBox.classList.remove("show-search");
        }
      });
      
      