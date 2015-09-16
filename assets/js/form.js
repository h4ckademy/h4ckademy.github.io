$(function(){
  $('#contact_form input[type!=checkbox], #contact_form textarea, #contact_form select').on('focusin', function() {
    $(this).parent().addClass('input--filled');
  })
  .on('focusout', function() {
    if(!$(this).val()) {
      $(this).parent().removeClass('input--filled');
    }
  })
})
