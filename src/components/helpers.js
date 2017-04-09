export const headerDisplayOff = () => {
	console.log('running headerDisplayOff');
	const navLinks = document.getElementById("nav-ul").children;
	const navUl = document.getElementById("nav-ul");
	const height = document.getElementById("nav-ul").style.height;

	if (height !== '3.5vh'){
		for (let i = 1; i < navLinks.length; i++){
			navLinks[i].style.display = 'none';
		}
		navUl.style.height = '3.5vh';
	}
}

export const footerDisplayOff = () => {
	const footerDiv = document.getElementById("footer-div");
	const footerLinks = document.getElementById("footer-div").children;

	if (footerLinks[1].style.display !== 'none') {
		footerDiv.style.height = '5.5vh';
		for (let i = 0; i < footerLinks.length - 1; i++){
			footerLinks[i].style.display = 'none'
		}
	}
 }
