/**
 * Created by Gerry.Zeng on 5/12/2014.
 */
var app = {
    init: function(){
        $('#message').on( 'click', function(){
            $.ajax({
                url:'ajax',
                type:'post',
                dataType:'json',
                data:{ method: 'getUsers' },
                success: function( resp ){

                }
            });
        })
    }
};
$( document ).ready( function(){
    app.init();
});