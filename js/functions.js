function verstuurd(argument) {
    Materialize.toast('Uw bericht is verstuurd', 4000);
}


$(document).ready(function() {
    console.log("jQuery is loaded...");
    $(".button-collapse").sideNav();

    if(window.location.href.indexOf("#verstuurd") > -1) {
      verstuurd();
   }

   $(document).ready(function(){
      $('ul.tabs').tabs();
    });



});
