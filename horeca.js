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
			alert('U heeft ' + frisAantal + ' fris toegevoegd aan uw bestelling.');
			 frisTotaal = Number(frisTotaal) + Number(frisAantal);
			 order();
		}else if (bestelling == 'wijn'){
			var wijnAantal = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
			alert('U heeft ' + wijnAantal + ' wijn toegevoegd aan uw bestelling.');
			wijnTotaal = Number(wijnTotaal) + Number(wijnAantal);
			order();
		}else if( bestelling == 'bier'){
			var bierAantal = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?');
			alert('U heeft ' + bierAantal + ' bier toegevoegd aan uw bestelling.');
			bierTotaal = Number(bierTotaal) + Number(bierAantal);
			order();
		}else if(bestelling == 'stop'){
			stopOrder();
		}else{
			alert('U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.');
			order();
		}
}
function stopOrder(){
	var totalPriceFris = frisTotaal * frisPrice;
	var totalPriceWijn = wijnTotaal * wijnPrice;
	var totalPriceBier = bierTotaal * bierPrice;
	var totalPrice = Number(totalPriceFris) + Number(totalPriceWijn) + Number(totalPriceBier);
	if(frisTotaal > 0){
	document.write('U heeft ' + frisTotaal + ' fris besteld.<br>');
	document.write(frisTotaal + ' x €1.00 = ' + totalPriceFris + '<br><br>');}
	if(wijnTotaal > 0){
	document.write('U heeft ' + wijnTotaal + ' wijn besteld.<br>');
	document.write(wijnTotaal + " x €3.00 = " + totalPriceWijn + '<br><br>');}
	if(bierTotaal > 0){
	document.write('U heeft ' + bierTotaal + ' bier besteld.<br>');
	document.write(bierTotaal + ' x €2.00 = ' + totalPriceBier + '<br><br>');}
	document.write('Totaal: €'+ totalPrice);
	
	
}
order();