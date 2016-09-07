console.log( 'example.js sourced');

$( document ).ready( function(){
  console.log( 'doc ready JQ');

  // on click for sendInfo id
  $( '#sendInfo' ).on( 'click', function(){
    console.log( 'sendInfo on click' );
    // get user input
    var creatureIn = $( '#creatureIn').val();
    var noiseIn = $( '#noiseIn').val();
    // assemble object to send to server
    var objectToSend={
      creature: creatureIn,
      noise: noiseIn
    };
    // ajax post that sends object to /texter route
    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function( data ){
        console.log( 'got this from server - ' + data );
      } // end ajax success
    });
  }); // end sendInfo on click
});
