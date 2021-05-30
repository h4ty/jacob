var obrazki = ["Albert.jpg","Jan.jpg","Stefan.jpg","Wisława.jpg"];
var nr = 0;

function nastepny()
{
	var galeria = document.getElementById("galeria");
	nr++;
	if (nr >= obrazki.length)
	{
		nr = 0;
	}
	galeria.src = "images/" + obrazki[nr];
}
function zmiana ()
{
	nastepny();
	setTimeout("zmiana()",5000);
}
window.onload = function ()
{
	var t = setTimeout(zmiana, 5000);
};