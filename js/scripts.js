// var contextfooter = {test: "hello"} 
var contextupcomingevents= {
	date1: "Mon. August 28, 2017", description1: "3:00pm | First Day Assembly in McConomy Auditorium", seconddescription1: "4:30pm-6:30pm | All School BBQ in CFA Peace Garden", link1: "events.html#firstday",
	date2: "Fri. September 1, 2017", description2: "6:00pm-10:00pm | Unblurred Gallery Crawl", link2: "events.html#unblurredgallerycrawl",
	date3: "Wed. September 6, 2017", description3: "4:30pm | AIAS GBM in CFA 2014", link3: "events.html#aiasgbm08.06",
	date4: "Sun. September 10, 2017", description4: "10:30pm | Coffee O'Clock in CFA and MM", link4: "events.html#coc.06", 
	date5: "Mon. September 11, 2017", description5: "4:30pm | Picnic on Flagstaff", link5: "events.html#picnic",
	date6: "Wed. September 13, 2017", description6: "4:30pm-6:00pm | IKM Firm Tour", link6: "events.html#ikmfirmtour" ,
	date7: "Fri. September 15, 2017", description7: "All Day | Parking Day", link7: "events.html#parkingday",
	}
var contextevents = {test1: "hello"} 

var contextfooter = {description: "Advancing leadership, design, and service among architecture students."} 


var contextnavigationhome = {itemoptionhome: "active item", itemoptionevents: "item", itemoptionresources: "item", itemoptionabout: "item", colorhome: "aiascolor", colorevents: "black", colorresources: "black", colorabout: "black"}
var contextnavigationevents = {itemoptionhome: "item", itemoptionevents: "active item", itemoptionresources: "item", itemoptionabout: "item", colorhome: "black", colorevents: "aiascolor", colorresources: "black", colorabout: "black"} 
var contextnavigationresources = {itemoptionhome: "item", itemoptionevents: "item", itemoptionresources: "active item", itemoptionabout: "item", colorhome: "black", colorevents: "black", colorresources: "aiascolor", colorabout: "black"} 
var contextnavigationabout = {itemoptionhome: "item", itemoptionevents: "item", itemoptionresources: "item", itemoptionabout: "active item", colorhome: "black", colorevents: "black", colorresources: "black", colorabout: "aiascolor"} 

// -------------

var resultupcomingevents = Handlebars.templates.upcomingevents(contextupcomingevents);
var resultevents = Handlebars.templates.events(contextevents);

var resultfooter = Handlebars.templates.footer(contextfooter);


var resultnavigationhome = Handlebars.templates.navigation(contextnavigationhome);
var resultnavigationevents = Handlebars.templates.navigation(contextnavigationevents);
var resultnavigationresources = Handlebars.templates.navigation(contextnavigationresources);
var resultnavigationabout = Handlebars.templates.navigation(contextnavigationabout);



// -------------

$(function() {
  $("#upcomingevents").html(resultupcomingevents);
});
$(function() {
  $("#eventspage").html(resultevents);
});
$(function() {
  $("#footer").html(resultfooter);
});


$(function() {
  $("#navigationhome").html(resultnavigationhome);
});
$(function() {
  $("#navigationevents").html(resultnavigationevents);
});
$(function() {
  $("#navigationresources").html(resultnavigationresources);
});
$(function() {
  $("#navigationabout").html(resultnavigationabout);
});


