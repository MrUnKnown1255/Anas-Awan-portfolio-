
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});









const text = "From Concept to Creation — I Design What Your Brand Deserves.";
  const target = document.getElementById("animated-textss");
  target.innerHTML = "";

  const words = text.split(" ");
  let delay = 0;

  words.forEach((word, index) => {
	const span = document.createElement("span");
	span.textContent = word + " ";
	span.style.opacity = 0;
	span.style.display = "inline-block";
	span.style.transition = "opacity 0.6s ease, transform 0.6s ease";
	span.style.transform = "translateY(20px)";
	target.appendChild(span);

	setTimeout(() => {
	  span.style.opacity = 1;
	  span.style.transform = "translateY(0)";
	}, delay);

	delay += 150;
  });