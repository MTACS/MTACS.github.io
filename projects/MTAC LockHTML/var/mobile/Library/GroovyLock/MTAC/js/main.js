$.ajaxSetup({
	cache: false,
	headers: {
		"Cache-Control": "no-cache"
	}
});

$(document).ready(function() {	
	$("div.container").css("padding-top", vertical_spacing + "px");
	init();
});

function updateClock() {
	var objToday = new Date(),
			dayOfWeek = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'),
			curWeekday = dayOfWeek[objToday.getDay()],
			months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
			curMonth = months[objToday.getMonth()],
			curdayOfMonth = objToday.getDate(),
			curHour = objToday.getHours(),
			curMinute = objToday.getMinutes() < 10 ? '0' + objToday.getMinutes() : objToday.getMinutes();

	if (xhour === false) {
		curHour = (curHour < 10 ? '0' : '') + curHour;
	} else {
		curHour = (curHour > 12) ? curHour - 12 : curHour;
		curHour = (curHour === 0) ? 12 : curHour;
	}

	$('#hour').html(curHour);
	$('#colon').html(':');
	$('#minute').html(curMinute);
	$('#date').html(curWeekday + ', ' + curMonth + ' ' + curdayOfMonth);
}

function run(){
	if (window.groovyAPI){
		if (groovyAPI.isShowingNotifications()){
			$("div.container").animate({
				"padding-top": (notification_spacing) + "px"
			}, 1000);
		} else {
			$("div.container").animate({
				"padding-top": (vertical_spacing) + "px"
			}, 1000);
		}
	}
	setTimeout(run, 1000);
}

function init() {
	updateClock();
	setInterval(updateClock, 1000);
	run();
}