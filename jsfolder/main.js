<<<<<<< HEAD
// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });

	// // Activate Carousel
	// $("#myCarousel").carousel();

	// // Enable Carousel Indicators
	// $(".item").click(function(){
	//     $("#myCarousel").carousel(1);
	// });

	// // Enable Carousel Controls
	// $(".left").click(function(){
	//     $("#myCarousel").carousel("prev");
	// });

// Initialize popup as usual
$('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});
=======

>>>>>>> 2b3d2b034e0a5d73c8bfd4aadf55af9d51e8359c
