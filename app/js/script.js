
$( document ).ready(function() {
  $('.js-show-info').on('click', (e)=>{
    e.preventDefault();
    $('.js-text').addClass('hidden');
    $('.js-info').removeClass('hidden');
  })

  $('.js-start-ar').on('click', ()=>{
    $('.ar').addClass('show')
    $('.js-kaartje').addClass('hidden')
    $( ".ar" ).load( "ar" );
  })
});