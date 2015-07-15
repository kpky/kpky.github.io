            $( function(){

                var speed   = 2000;
                var toggles = $( ".beer_toggle" );
                var beers   = $( ".show_hide" );

                beers.css( { "opacity" : 0 } ).hide();
                $( "#artemis" ).css( { "opacity" : 1 } ).show();

                toggles.on( "click", function( e ){

                    beers.css( { "opacity" : 0 } ).hide();

                    $( "#" + $( this ).data( "beer" ) )
                        .animate( { "opacity" : 1 }, speed )
                        .show();

                    e.preventDefault();
                } );
            } );