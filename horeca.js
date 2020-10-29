const frisPrice = 1.00;
const wijnPrice = 3.00;
const bierPrice = 2.00;

var frisTotaal = 0;
var wijnTotaal = 0;
var bierTotaal = 0;


alert("Welkom bij het cafe!")

function order(){
	var bestelling = prompt('Wat wilt u bestellen?');
		if (bestelling == 'fris'){
			var frisAantal = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?');
			alert('U heeft ' + frisAantal + 'fris toegevoegd aan uw bestelling.');
			 frisTotaal = frisTotaal + frisAantal;
			 order();
		}else if (bestelling == 'wijn'){
			var wijnAantal = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
			alert('U heeft ' + wijnAantal + 'wijn toegevoegd aan uw bestelling.');
			wijnTotaal = wijnTotaal + wijnAantal;
			order();
		}else if( bestelling == 'bier'){
			var bierAantal = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?');
			alert('U heeft ' + bierAantal + 'bier toegevoegd aan uw bestelling.');
			bierTotaal = bierTotaal + bierAantal;
			order();
		}else if(bestelling == 'stop'){
			stopOrder();// functie prijs berekenen maken
		}
}
