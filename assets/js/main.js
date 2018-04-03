function owlHome() {
  $('.owlHome').owlCarousel({
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

////////////////////////////////////////////////

function owlService() {
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

  $('.owl2').owlCarousel({
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
        items: 4
      }
    } // end! responsive
  })

}

////////////////////////////////////////////////

function owlArmatura() {
  $('.owl3').owlCarousel({
    nav: true,
    dots: false,
    margin: 15,
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
  owlService()
  owlArmatura()
  magicForm()

})(jQuery)