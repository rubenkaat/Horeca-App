const frisPrice = 1.00;
const wijnPrice = 3.00;
const bierPrice = 2.00;
const snackPriceKlein = 5.00;
const snackPriceGroot = 8.00;

var frisTotaal = 0;
var wijnTotaal = 0;
var bierTotaal = 0;
var snackTotaalKlein = 0;
var snackTotaalGroot = 0;


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
		}else if(bestelling == 'snack'){
			var snack = prompt('Hoeveel bitterballen wilt u toevoegen(8 of 16)?');
			if(snack == 8){
				var snackAantalKlein = prompt('Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?');
				alert('U heeft ' + snackAantalKlein + ' bitterbalschalen van 8 stuks toegevoegd');
				snackTotaalKlein = Number(snackTotaalKlein) + Number(snackAantalKlein);
				order();
			}else if(snack == 16){
				var snackAantalGroot = prompt('Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?');
				alert('U heeft ' + snackAantalGroot + ' bitterbalschalen van 16 stuks toegevoegd');
				snackTotaalGroot = Number(snackTotaalGroot) + Number(snackAantalGroot);
				order();
			}else{
				alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling');
				order();
			}
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
	var totalPriceSnack8 = snackTotaalKlein * snackPriceKlein;
	var totalPriceSnack16 = snackTotaalGroot * snackPriceGroot;
	var totalPrice = Number(totalPriceFris) + Number(totalPriceWijn) + Number(totalPriceBier) + Number(totalPriceSnack8) + Number(totalPriceSnack16);
	if(frisTotaal > 0){
	document.write('U heeft ' + frisTotaal + ' fris besteld.<br>');
	document.write(frisTotaal + ' x €1.00 = ' + totalPriceFris + '<br><br>');}
	if(wijnTotaal > 0){
	document.write('U heeft ' + wijnTotaal + ' wijn besteld.<br>');
	document.write(wijnTotaal + " x €3.00 = " + totalPriceWijn + '<br><br>');}
	if(bierTotaal > 0){
	document.write('U heeft ' + bierTotaal + ' bier besteld.<br>');
	document.write(bierTotaal + ' x €2.00 = ' + totalPriceBier + '<br><br>');}
	if(snackTotaalKlein > 0){
		document.write('U heeft ' + snackTotaalKlein + ' bitterbalschalen`van 8 stuks besteld.<br>');
		document.write(snackTotaalKlein + ' x €5.00 = ' + totalPriceSnack8 + '<br><br>');
	}
	if(snackTotaalGroot > 0){
		document.write('U heeft ' + snackTotaalGroot + ' bitterbalschalen van 16 stuks besteld.<br>');
		document.write(snackTotaalGroot + ' x €8.00 = ' + totalPriceSnack16 + '<br><br>');
	}
	document.write('Totaal: €'+ totalPrice);
	
	
}
order();