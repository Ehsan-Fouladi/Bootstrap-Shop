$(document).ready(function () {
	$(".dropdown").hover(
		function () {
			$('.dropdown-menu', this).stop(true, true).slideDown("fast");
			$(this).toggleClass('open');
		},
		function () {
			$('.dropdown-menu', this).stop(true, true).slideUp("fast");
			$(this).toggleClass('open');
		}
	);
});
$(document).ready(function () {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});
paypals.minicarts.render(); //use only unique class names other than paypals.minicarts.Also Replace same class name in css and minicart.min.js

		paypals.minicarts.cart.on('checkout', function (evt) {
			var items = this.items(),
				len = items.length,
				total = 0,
				i;

			// Count the number of each item in the cart
			for (i = 0; i < len; i++) {
				total += items[i].get('quantity');
			}

			if (total < 3) {
				alert('حداقل ۳ تا خرید را میتوانید به سبد خرید خود اضافه کنید');
				evt.preventDefault();
			}
});
window.onload = function () {
	document.getElementById("password1").onchange = validatePassword;
	document.getElementById("password2").onchange = validatePassword;
}

function validatePassword() {
	var pass2 = document.getElementById("password2").value;
	var pass1 = document.getElementById("password1").value;
	if (pass1 != pass2)
		document.getElementById("password2").setCustomValidity("Passwords Don't Match");
	else
		document.getElementById("password2").setCustomValidity('');
	//empty string means no validation error
}
jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});
});
$(document).ready(function () {
	/*
	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 1200,
		easingType: 'linear' 
	};
	*/
	$().UItoTop({
		easingType: 'easeOutQuart'
	});

});
addEventListener("load", function () {
	setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
	window.scrollTo(0, 1);
}
// paymrnt
$(document).ready(function () {
			
	$().UItoTop({
		easingType: 'easeOutQuart'
	});

});
jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});
});
$(function () {
	var creditly = Creditly2.initialize(
		'.creditly-wrapper .expiration-month-and-year-2',
		'.creditly-wrapper .credit-card-number-2',
		'.creditly-wrapper .security-code-2',
		'.creditly-wrapper .card-type');

	$(".creditly-card-form-2 .submit").click(function (e) {
		e.preventDefault();
		var output = creditly.validate();
		if (output) {
			
			console.log(output);
		}
	});
});
$(function () {
	var creditly = Creditly.initialize(
		'.creditly-wrapper .expiration-month-and-year',
		'.creditly-wrapper .credit-card-number',
		'.creditly-wrapper .security-code',
		'.creditly-wrapper .card-type');


	$(".creditly-card-form .submit").click(function (e) {
		e.preventDefault();
		var output = creditly.validate();
		if (output) {
		
			console.log(output);
		}
	});
});
$(document).ready(function () {
			
	$('#parentHorizontalTab').easyResponsiveTabs({
		type: 'default', 
		width: 'auto', 
		fit: true, 
		tabidentify: 'hor_1', 
		activate: function (event) { 
			var $tab = $(this);
			var $info = $('#nested-tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
});
window.onload = function () {
	document.getElementById("password1").onchange = validatePassword;
	document.getElementById("password2").onchange = validatePassword;
}

function validatePassword() {
	var pass2 = document.getElementById("password2").value;
	var pass1 = document.getElementById("password1").value;
	if (pass1 != pass2)
		document.getElementById("password2").setCustomValidity("Passwords Don't Match");
	else
		document.getElementById("password2").setCustomValidity('');
	
}
paypals.minicarts.render();

		paypals.minicarts.cart.on('checkout', function (evt) {
			var items = this.items(),
				len = items.length,
				total = 0,
				i;


			for (i = 0; i < len; i++) {
				total += items[i].get('quantity');
			}

			if (total < 3) {
				alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
				evt.preventDefault();
			}
});
$(document).ready(function () {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});
$(document).ready(function () {
	$(".dropdown").hover(
		function () {
			$('.dropdown-menu', this).stop(true, true).slideDown("fast");
			$(this).toggleClass('open');
		},
		function () {
			$('.dropdown-menu', this).stop(true, true).slideUp("fast");
			$(this).toggleClass('open');
		}
	);
});
// checkout
$(document).ready(function () {
		
	$().UItoTop({
		easingType: 'easeOutQuart'
	});

});
jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});
});
$(document).ready(function (c) {
	$('.close3').on('click', function (c) {
		$('.rem3').fadeOut('slow', function (c) {
			$('.rem3').remove();
		});
	});
});
$(document).ready(function (c) {
	$('.close2').on('click', function (c) {
		$('.rem2').fadeOut('slow', function (c) {
			$('.rem2').remove();
		});
	});
});
$(document).ready(function (c) {
	$('.close1').on('click', function (c) {
		$('.rem1').fadeOut('slow', function (c) {
			$('.rem1').remove();
		});
	});
});
$('.value-plus').on('click', function () {
	var divUpd = $(this).parent().find('.value'),
		newVal = parseInt(divUpd.text(), 10) + 1;
	divUpd.text(newVal);
});

$('.value-minus').on('click', function () {
	var divUpd = $(this).parent().find('.value'),
		newVal = parseInt(divUpd.text(), 10) - 1;
	if (newVal >= 1) divUpd.text(newVal);
});
window.onload = function () {
	document.getElementById("password1").onchange = validatePassword;
	document.getElementById("password2").onchange = validatePassword;
}

function validatePassword() {
	var pass2 = document.getElementById("password2").value;
	var pass1 = document.getElementById("password1").value;
	if (pass1 != pass2)
		document.getElementById("password2").setCustomValidity("Passwords Don't Match");
	else
		document.getElementById("password2").setCustomValidity('');
	
}
paypals.minicarts.render();

		paypals.minicarts.cart.on('checkout', function (evt) {
			var items = this.items(),
				len = items.length,
				total = 0,
				i;

			
			for (i = 0; i < len; i++) {
				total += items[i].get('quantity');
			}

			if (total < 3) {
				alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
				evt.preventDefault();
			}
});
$(document).ready(function () {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});
$(document).ready(function () {
	$(".dropdown").hover(
		function () {
			$('.dropdown-menu', this).stop(true, true).slideDown("fast");
			$(this).toggleClass('open');
		},
		function () {
			$('.dropdown-menu', this).stop(true, true).slideUp("fast");
			$(this).toggleClass('open');
		}
	);
});
addEventListener("load", function () {
	setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
	window.scrollTo(0, 1);
}