$('document').ready(function(){
	makediv();
	etch();
});

function makediv()
{	
	for (var x = 0; x < 64; x++) 
	{
	    for (var y = 0; y < 100; y++) 
	    {
	       $("<div>").addClass("unit").appendTo('#wrapper');
	    }
	}
}

function etch()
{
	$(".unit").hover(function(){
		$(this).css("background-color","black");
	});
}

function reset()
{
	$(".unit").css("background-color", "blue")
}