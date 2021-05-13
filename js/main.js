const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

var width =
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

about.addEventListener('click', () => {
	const aboutBox = new WinBox({
		title: 'About Me',
		// modal: true,
		width: width < 1000 ? '50%' : '500',
		mount: aboutContent,
		onfocus: function () {
			this.setBackground('#50fa7b');
		},
		onblur: function () {
			this.setBackground('#777');
		},
	});
});

contact.addEventListener('click', () => {
	const contactBox = new WinBox({
		title: 'Contact Me',
		width: width < 1000 ? '50%' : '500',
		x: 'center',
		y: 'center',
		mount: contactContent,
		onfocus: function () {
			this.setBackground('#50fa7b');
		},
		onblur: function () {
			this.setBackground('#777');
		},
	});
});
