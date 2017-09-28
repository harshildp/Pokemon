$(document).ready(function(){
    //var i = 1;
    //alert('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i +'.png">')
    //for (var i = 0; 0 < 151; i++) {
        $('body').append("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'>");
        var i =1;
        $.get("http://pokeapi.co/api/v2/pokemon/"+i+"/", function(res) {  
        alert(res.sprites.front_shiny)    
          // $('body').append("<img src="+res.sprites.front_shiny+">");
        }, "jsonp");
    //}
});
