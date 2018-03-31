function magicForm() {
  $('#magicFormTabs a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
}

// Call all functions
(function ($) {
  
  magicForm()

})(jQuery)