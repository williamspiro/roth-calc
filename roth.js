/***** RETIRE FUNCTION DEFINITION *****/
function retire(currentAge, retireAge, rateOfReturn, initialInvestmentAmount, annualContributionAmount) {
	var startAge = Number(currentAge);
	var retirementAge = Number(retireAge);
	var marginalInterestRate = rateOfReturn;
	var initialInvestment = Number(initialInvestmentAmount);
	var annualContribution = Number(annualContributionAmount);
	var totalYearsInvested = retirementAge - startAge;

	var percent = Number(marginalInterestRate);
	if (percent < 10) {
		var rate = Number('1.0' + percent);
	} else {
		var rate = Number('1.' + percent);
	}

	var investentLoad = (initialInvestment + annualContribution) * rate;
	var RunCount = 1;
	while (totalYearsInvested > RunCount){
		RunCount++;
		var investentLoad = (investentLoad + annualContribution) * rate;
		if (totalYearsInvested == RunCount){
			alert(investentLoad);
		}
	}
}
/***** END RETIRE FUNCTION DEFINITION *****/

/***** INPUT RANGE SLIDER WITH VALUE DISPLAYED *****/
/* set variables */
var range = $('.input-range'); /* range input */
var value = $('.range-value'); /* range display */

/* set / display initial starting range value */
var startingVal = range.prop('value')
value.html('$' + startingVal);

/* live update range value */
range.on('input', function(){ 
	roundAmount() 
});
/* live update range value - IE */
range.on('change', function(){ 
	roundAmount() 
});

/* round number based on range amount */
function roundAmount() {
	var liveVal = range.prop('value')
	if (liveVal < 500) {
		liveVal = 500;
	} else if (liveVal < 1000 ) { 
		liveVal = 1000;
	} else if (liveVal < 1500 ) { 
		liveVal = 1500;
	} else if (liveVal < 2000 ) { 
		liveVal = 2000;
	} else if (liveVal < 2500 ) { 
		liveVal = 2500;
	} else if (liveVal < 3000 ) { 
		liveVal = 3000;
	} else if (liveVal < 3500 ) { 
		liveVal = 3500;
	} else if (liveVal < 4000 ) { 
		liveVal = 4000;
	} else if (liveVal < 4500 ) { 
		liveVal = 4500;
	} else if (liveVal < 5000 ) { 
		liveVal = 5000;
	} else if (liveVal < 5500 ) { 
		liveVal = 5500;
	} 
	value.html('$' + liveVal);
	range.attr('value', liveVal);
}; 
/***** END AMOUNT SLIDER JS *****/


/***** Qued Questions *****/
var q = 1,
qMax = 0;

$(function () {
	qMax = $('div.group').length;
	$('div.group').hide();
	$('div.group:nth-child(1)').show();
	$('#btnNext').on('click', function (event) {
		event.preventDefault();
		handleClick();
	});
});

function handleClick() {
	if (q < qMax) {
		$('div.group:nth-child(' + q + ')').fadeOut();
		$('div.group:nth-child(' + (q + 1) + ')').fadeIn();
		if (q == (qMax - 1)) {
			$('#btnNext').hide();
			$('.retire').fadeIn();
		}
		q++;
	}
}
/***** End Qued Questions *****/