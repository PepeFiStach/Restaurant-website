// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

let bannerHamb = document.getElementById("banner");
let headerHamb = document.getElementById("header");
let bannerInnerHamb = document.getElementsByClassName("banner-inner")[0];
let navMobile = document.getElementsByClassName("wrapper-navigation-mobile")[0];
let navMobileSocial = document.getElementsByClassName("navigation-mobile-social")[0];

document.getElementById("nav-icon3").addEventListener("click", function() {
	this.classList.toggle("open");
	bannerHamb.classList.toggle("banner-hamb");
	headerHamb.classList.toggle("header-hamb");
	bannerInnerHamb.classList.toggle("banner-inner-hamb");
	navMobile.classList.toggle("wrapper-navigation-mobile-animation-click");
	navMobileSocial.classList.toggle("navigation-mobile-social-animation-click");
});