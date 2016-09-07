console.log( 'example.js sourced');

$( document ).ready( function(){
  console.log( 'doc ready' );
  $( '#sendInfo' ).on( 'click', function(){
    console.log( 'sendInfo clicked' );
    // ajax POST to route on our server
    $.ajax({
      type: 'POST',
      url: '/texter',
      success: function( data ){
        console.log( 'ajax success:', data );
      } // end success
    }); // end ajax
  })
});
