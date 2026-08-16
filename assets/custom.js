jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{variant.id}}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });

});

if (typeof yotpoWidgetsContainer !== 'undefined') {

yotpoWidgetsContainer.initWidgets();



}
function toggleContent() {
    var hiddenContent = document.getElementById("hidden-content");
    var readMoreButton = document.getElementById("read-more-button");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        hiddenContent.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
}
