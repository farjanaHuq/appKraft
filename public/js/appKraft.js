$(document).ready(function() {
    console.log( "ready!" );
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('.parallax').parallax();
    // $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true,
        yearRange: 1
      });
      $('.scrollspy').scrollSpy();
      $('.tooltipped').tooltip();

});