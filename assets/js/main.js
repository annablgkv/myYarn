function owlHome() {
  $('.owl-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 50,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      700: {
        items: 3
      },
      900: {
        items: 6
      }
    } // end! responsive
  })
}