$(document).ready(function(){
        var mixer = mixitup('.data-list');

        // owl carousel
        $('.owl-carousel').owlCarousel({
        	items:4,
        	autoplay:true,
           	autoplayHoverPause:true,
           	responsiveClass:true,
           	responsiveRefreshRate:true,
           	responsive:{
           		0:{
           			items:1
           		},
           		576:{
           			items:1
           		},
           		768:{
           			items:2
           		},
           		876:{
           			items:3
           		},
           		1000:{
           			items:4
           		},
           		1200:{
           			items:4
           		},
           		1920:{
           			items:5
           		},
           	}
        });
        // scroll up button
        const scrollUp = document.querySelector('.scrollUp');
		window.addEventListener('scroll', () => {
               if(window.pageYOffset > 300){
               	scrollUp.classList.add('active');
               }
               else{
               	scrollUp.classList.remove('active');
               }
		});


	});

// HUMBERGER MENU
function openMenu(){
  document.getElementById('navbar1').style.height = '100%';
}
function closeMenu(){
  document.getElementById('navbar1').style.height = '0%';
}