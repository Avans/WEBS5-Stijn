var router = require('express').Router();

/*
----------------------------------------------
				Helpers
----------------------------------------------
*/
function getEasterSunday(year) {
    var C = Math.floor(year/100);
    var N = year - 19*Math.floor(year/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = year + Math.floor(year/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var month = 3 + Math.floor((L + 40)/44);
    var date = L + 28 - 31*Math.floor(month/4);

    return new Date(year, month - 1 /* Months are zero based */, date);
};

function getDateString(date){
    var curr_date = date.getDate();
    var curr_month = date.getMonth() + 1;
    var curr_year = date.getFullYear();
    return (curr_date < 10 ? '0' : '') + curr_date + "-" + (curr_month < 10 ? '0' : '') + curr_month + "-" + curr_year;
}

function getDayNameNL(date){
	switch (date.getDay())
	{
		case 0: return 'Zondag';
		case 1: return 'Maandag';
		case 2: return 'Dinsdag';
		case 3: return 'Woensdag';
		case 4: return 'Donderdag';
		case 5: return 'Vrijdag';
		case 6: return 'Zaterdag';
		
	}
};

function getHolidayNL(date){
	var dd = date.getDate();
	var mm = date.getMonth();
	var yyyy = date.getFullYear();
	var easterSunday = getEasterSunday(yyyy);

	var one_day = 1000*60*60*24;
	var daysfterEasterSunday = Math.round((date - easterSunday) / one_day);

	switch(true)
	{
		case dd == 01 && mm == 00: return "Nieuwjaarsdag";
		case dd == 27 && mm == 03: return "Koningsdag";
		case dd == 05 && mm == 04 && (yyyy % 5) == 0: return "Bevrijdingsdag";
		case dd == 25 && mm == 11: return "Eerste Kerstdag";
		case dd == 26 && mm == 11: return "Tweede Kerstdag";
		case daysfterEasterSunday == 0: return "Eerste Paasdag";
		case daysfterEasterSunday == 1: return "Tweede Paasdag";

		default: return undefined;
	}
}
/*
----------------------------------------------
				/Helpers
----------------------------------------------
*/

/*
----------------------------------------------
				Build response
----------------------------------------------
*/
function sendHoliday(date, res){
	var holidayNL = getHolidayNL(date);

	var toReturn = {
		date: getDateString(date),
		dayNameNL: getDayNameNL(date),
		isHolidayNL: (holidayNL !== undefined),
		holidayNameNL: holidayNL
	};

	res.json(toReturn);
};

function validateDate(year, month, date){
	var returnDate = new Date(year, month - 1, date);

	if(returnDate.getFullYear() != year || returnDate.getMonth() + 1 != month || returnDate.getDate() != date){
		return undefined;
	} else {
		return returnDate;
	}
};

/*
----------------------------------------------
				/Build response
----------------------------------------------
*/

/*
----------------------------------------------
				Routing
----------------------------------------------
*/
router.route('/').get(function(req, res){
	sendHoliday(new Date(), res);
});

router.route('/:date/:month/:year').get(function(req, res){
	var date = validateDate(req.params.year, req.params.month, req.params.date);
	if(!date) {
		return res.status(400).end('Wrong date format');
	}

	sendHoliday(date, res);
});

/*
----------------------------------------------
				Exports
----------------------------------------------
*/
module.exports = router;