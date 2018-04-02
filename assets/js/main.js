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

function owlHome() {
  $('.owlServicesSerti').owlCarousel({
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
      800: {
        items: 5
      }
    } // end! responsive
  })
}

function magicForm() {
  $('#magicFormTabs a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
}

// Call all functions
(function ($) {

  owlHome()
  magicForm()

})(jQuery)