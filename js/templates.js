(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['events'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.link1 || (depth0 != null ? depth0.link1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link1","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date1 || (depth0 != null ? depth0.date1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date1","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time1 || (depth0 != null ? depth0.time1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time1","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description1 || (depth0 != null ? depth0.description1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description1","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location1 || (depth0 != null ? depth0.location1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location1","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description1 || (depth0 != null ? depth0.description1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description1","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text1 || (depth0 != null ? depth0.text1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text1","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext1 || (depth0 != null ? depth0.secondtext1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext1","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link2 || (depth0 != null ? depth0.link2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link2","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date2 || (depth0 != null ? depth0.date2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date2","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time2 || (depth0 != null ? depth0.time2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time2","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description2 || (depth0 != null ? depth0.description2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description2","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location2 || (depth0 != null ? depth0.location2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location2","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description2 || (depth0 != null ? depth0.description2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description2","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text2 || (depth0 != null ? depth0.text2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text2","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext2 || (depth0 != null ? depth0.secondtext2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext2","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link3 || (depth0 != null ? depth0.link3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link3","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date3 || (depth0 != null ? depth0.date3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date3","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time3 || (depth0 != null ? depth0.time3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time3","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description3 || (depth0 != null ? depth0.description3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description3","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location3 || (depth0 != null ? depth0.location3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location3","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description3 || (depth0 != null ? depth0.description3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description3","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text3 || (depth0 != null ? depth0.text3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text3","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext3 || (depth0 != null ? depth0.secondtext3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext3","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\"><p>See <a href=\"professional.html\">Here.</a></p></div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link4 || (depth0 != null ? depth0.link4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link4","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date4 || (depth0 != null ? depth0.date4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date4","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time4 || (depth0 != null ? depth0.time4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time4","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description4 || (depth0 != null ? depth0.description4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description4","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location4 || (depth0 != null ? depth0.location4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location4","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description4 || (depth0 != null ? depth0.description4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description4","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text4 || (depth0 != null ? depth0.text4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text4","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext4 || (depth0 != null ? depth0.secondtext4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext4","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link5 || (depth0 != null ? depth0.link5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link5","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date5 || (depth0 != null ? depth0.date5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date5","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time5 || (depth0 != null ? depth0.time5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time5","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description5 || (depth0 != null ? depth0.description5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description5","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location5 || (depth0 != null ? depth0.location5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location5","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description5 || (depth0 != null ? depth0.description5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description5","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text5 || (depth0 != null ? depth0.text5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text5","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext5 || (depth0 != null ? depth0.secondtext5 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext5","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link6 || (depth0 != null ? depth0.link6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link6","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date6 || (depth0 != null ? depth0.date6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date6","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time6 || (depth0 != null ? depth0.time6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time6","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description6 || (depth0 != null ? depth0.description6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description6","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location6 || (depth0 != null ? depth0.location6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location6","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description6 || (depth0 != null ? depth0.description6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description6","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text6 || (depth0 != null ? depth0.text6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text6","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext6 || (depth0 != null ? depth0.secondtext6 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext6","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link7 || (depth0 != null ? depth0.link7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link7","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date7 || (depth0 != null ? depth0.date7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date7","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time7 || (depth0 != null ? depth0.time7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time7","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description7 || (depth0 != null ? depth0.description7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description7","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location7 || (depth0 != null ? depth0.location7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location7","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description7 || (depth0 != null ? depth0.description7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description7","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text7 || (depth0 != null ? depth0.text7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text7","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext7 || (depth0 != null ? depth0.secondtext7 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext7","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link8 || (depth0 != null ? depth0.link8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link8","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date8 || (depth0 != null ? depth0.date8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date8","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time8 || (depth0 != null ? depth0.time8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time8","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description8 || (depth0 != null ? depth0.description8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description8","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location8 || (depth0 != null ? depth0.location8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location8","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description8 || (depth0 != null ? depth0.description8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description8","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text8 || (depth0 != null ? depth0.text8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text8","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext8 || (depth0 != null ? depth0.secondtext8 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext8","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link9 || (depth0 != null ? depth0.link9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link9","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date9 || (depth0 != null ? depth0.date9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date9","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time9 || (depth0 != null ? depth0.time9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time9","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description9 || (depth0 != null ? depth0.description9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description9","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location9 || (depth0 != null ? depth0.location9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location9","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description9 || (depth0 != null ? depth0.description9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description9","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text9 || (depth0 != null ? depth0.text9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text9","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext9 || (depth0 != null ? depth0.secondtext9 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext9","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link10 || (depth0 != null ? depth0.link10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link10","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date10 || (depth0 != null ? depth0.date10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date10","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time10 || (depth0 != null ? depth0.time10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time10","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description10 || (depth0 != null ? depth0.description10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description10","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location10 || (depth0 != null ? depth0.location10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location10","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description10 || (depth0 != null ? depth0.description10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description10","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text10 || (depth0 != null ? depth0.text10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text10","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext10 || (depth0 != null ? depth0.secondtext10 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext10","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link12 || (depth0 != null ? depth0.link12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link12","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date12 || (depth0 != null ? depth0.date12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date12","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time12 || (depth0 != null ? depth0.time12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time12","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description12 || (depth0 != null ? depth0.description12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description12","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location12 || (depth0 != null ? depth0.location12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location12","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description12 || (depth0 != null ? depth0.description12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description12","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text12 || (depth0 != null ? depth0.text12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text12","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext12 || (depth0 != null ? depth0.secondtext12 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext12","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link13 || (depth0 != null ? depth0.link13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link13","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date13 || (depth0 != null ? depth0.date13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date13","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time13 || (depth0 != null ? depth0.time13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time13","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description13 || (depth0 != null ? depth0.description13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description13","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location13 || (depth0 != null ? depth0.location13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location13","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description13 || (depth0 != null ? depth0.description13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description13","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text13 || (depth0 != null ? depth0.text13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text13","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext13 || (depth0 != null ? depth0.secondtext13 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext13","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link14 || (depth0 != null ? depth0.link14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link14","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date14 || (depth0 != null ? depth0.date14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date14","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time14 || (depth0 != null ? depth0.time14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time14","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description14 || (depth0 != null ? depth0.description14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description14","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location14 || (depth0 != null ? depth0.location14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location14","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description14 || (depth0 != null ? depth0.description14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description14","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text14 || (depth0 != null ? depth0.text14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text14","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext14 || (depth0 != null ? depth0.secondtext14 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext14","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link15 || (depth0 != null ? depth0.link15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link15","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date15 || (depth0 != null ? depth0.date15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date15","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time15 || (depth0 != null ? depth0.time15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time15","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description15 || (depth0 != null ? depth0.description15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description15","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location15 || (depth0 != null ? depth0.location15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location15","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description15 || (depth0 != null ? depth0.description15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description15","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text15 || (depth0 != null ? depth0.text15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text15","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext15 || (depth0 != null ? depth0.secondtext15 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext15","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link16 || (depth0 != null ? depth0.link16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link16","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid disabled\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date16 || (depth0 != null ? depth0.date16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date16","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time16 || (depth0 != null ? depth0.time16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time16","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description16 || (depth0 != null ? depth0.description16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description16","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location16 || (depth0 != null ? depth0.location16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location16","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description16 || (depth0 != null ? depth0.description16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description16","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text16 || (depth0 != null ? depth0.text16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text16","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext16 || (depth0 != null ? depth0.secondtext16 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext16","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link17 || (depth0 != null ? depth0.link17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link17","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date17 || (depth0 != null ? depth0.date17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date17","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time17 || (depth0 != null ? depth0.time17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time17","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description17 || (depth0 != null ? depth0.description17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description17","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location17 || (depth0 != null ? depth0.location17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location17","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description17 || (depth0 != null ? depth0.description17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description17","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text17 || (depth0 != null ? depth0.text17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text17","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext17 || (depth0 != null ? depth0.secondtext17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext17","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link18 || (depth0 != null ? depth0.link18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link18","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date18 || (depth0 != null ? depth0.date18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date18","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time18 || (depth0 != null ? depth0.time18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time18","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description18 || (depth0 != null ? depth0.description18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description18","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location18 || (depth0 != null ? depth0.location18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location18","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description18 || (depth0 != null ? depth0.description18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description18","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text18 || (depth0 != null ? depth0.text18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text18","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext18 || (depth0 != null ? depth0.secondtext18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext18","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link19 || (depth0 != null ? depth0.link19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link19","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date19 || (depth0 != null ? depth0.date19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date19","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time19 || (depth0 != null ? depth0.time19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time19","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description19 || (depth0 != null ? depth0.description19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description19","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location19 || (depth0 != null ? depth0.location19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location19","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description19 || (depth0 != null ? depth0.description19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description19","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text19 || (depth0 != null ? depth0.text19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text19","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext19 || (depth0 != null ? depth0.secondtext19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext19","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link20 || (depth0 != null ? depth0.link20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link20","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date20 || (depth0 != null ? depth0.date20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date20","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time20 || (depth0 != null ? depth0.time20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time20","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description20 || (depth0 != null ? depth0.description20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description20","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location20 || (depth0 != null ? depth0.location20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location20","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description20 || (depth0 != null ? depth0.description20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description20","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text20 || (depth0 != null ? depth0.text20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text20","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext20 || (depth0 != null ? depth0.secondtext20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext20","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link21 || (depth0 != null ? depth0.link21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link21","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date21 || (depth0 != null ? depth0.date21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date21","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time21 || (depth0 != null ? depth0.time21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time21","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description21 || (depth0 != null ? depth0.description21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description21","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location21 || (depth0 != null ? depth0.location21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location21","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description21 || (depth0 != null ? depth0.description21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description21","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text21 || (depth0 != null ? depth0.text21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text21","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext21 || (depth0 != null ? depth0.secondtext21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext21","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link22 || (depth0 != null ? depth0.link22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link22","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date22 || (depth0 != null ? depth0.date22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date22","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time22 || (depth0 != null ? depth0.time22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time22","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description22 || (depth0 != null ? depth0.description22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description22","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location22 || (depth0 != null ? depth0.location22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location22","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description22 || (depth0 != null ? depth0.description22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description22","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text22 || (depth0 != null ? depth0.text22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text22","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext22 || (depth0 != null ? depth0.secondtext22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext22","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link23 || (depth0 != null ? depth0.link23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link23","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date23 || (depth0 != null ? depth0.date23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date23","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time23 || (depth0 != null ? depth0.time23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time23","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description23 || (depth0 != null ? depth0.description23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description23","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location23 || (depth0 != null ? depth0.location23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location23","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description23 || (depth0 != null ? depth0.description23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description23","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text23 || (depth0 != null ? depth0.text23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text23","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext23 || (depth0 != null ? depth0.secondtext23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext23","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link24 || (depth0 != null ? depth0.link24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link24","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date24 || (depth0 != null ? depth0.date24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date24","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time24 || (depth0 != null ? depth0.time24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time24","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description24 || (depth0 != null ? depth0.description24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description24","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location24 || (depth0 != null ? depth0.location24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location24","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description24 || (depth0 != null ? depth0.description24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description24","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text24 || (depth0 != null ? depth0.text24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text24","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext24 || (depth0 != null ? depth0.secondtext24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext24","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link27 || (depth0 != null ? depth0.link27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link27","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date27 || (depth0 != null ? depth0.date27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date27","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time27 || (depth0 != null ? depth0.time27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time27","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description27 || (depth0 != null ? depth0.description27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description27","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location27 || (depth0 != null ? depth0.location27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location27","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description27 || (depth0 != null ? depth0.description27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description27","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text27 || (depth0 != null ? depth0.text27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text27","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext27 || (depth0 != null ? depth0.secondtext27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext27","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link25 || (depth0 != null ? depth0.link25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link25","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date25 || (depth0 != null ? depth0.date25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date25","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time25 || (depth0 != null ? depth0.time25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time25","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description25 || (depth0 != null ? depth0.description25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description25","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location25 || (depth0 != null ? depth0.location25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location25","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description25 || (depth0 != null ? depth0.description25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description25","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text25 || (depth0 != null ? depth0.text25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text25","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext25 || (depth0 != null ? depth0.secondtext25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext25","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n<div id=\""
    + alias4(((helper = (helper = helpers.link26 || (depth0 != null ? depth0.link26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link26","hash":{},"data":data}) : helper)))
    + "\" class=\"ui two stackable column grid\">\n	<div class=\"ui six wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.date26 || (depth0 != null ? depth0.date26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date26","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.time26 || (depth0 != null ? depth0.time26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time26","hash":{},"data":data}) : helper)))
    + " | "
    + alias4(((helper = (helper = helpers.description26 || (depth0 != null ? depth0.description26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description26","hash":{},"data":data}) : helper)))
    + "</div>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.location26 || (depth0 != null ? depth0.location26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location26","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n	<div class=\"ui ten wide column\">\n		<h3 class=\"ui header\">"
    + alias4(((helper = (helper = helpers.description26 || (depth0 != null ? depth0.description26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description26","hash":{},"data":data}) : helper)))
    + "</h3>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.text26 || (depth0 != null ? depth0.text26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text26","hash":{},"data":data}) : helper)))
    + "</div>\n		<br>\n		<div class=\"description\">"
    + alias4(((helper = (helper = helpers.secondtext26 || (depth0 != null ? depth0.secondtext26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondtext26","hash":{},"data":data}) : helper)))
    + "</div>\n	</div>\n</div>\n<hr>\n";
},"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"ui fluid container\">\n    <div class=\"ui three column stackable centered grid\">\n      <div class=\"three wide column left aligned\">\n        <h4><a href=\"index.html\">Home</a></h4>\n        <h4><a href=\"events.html\">Events</a></h4>\n        <h4><a href=\"membership.html\">Resources</a></h4>\n      </div>\n      <div class=\"six wide column left aligned\">\n        <h4>American Institute of Architecture Students</h4>\n        <h4>Carnegie Mellon Chapter</h4>\n        <p class=\"description lighten\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <p class=\"description lighten\">&copy; <span id=\"year\"></span>All Rights Reserved</p>\n      </div>\n      <div class=\"four wide column left aligned\"> \n        <h4>Join our CMU Chapter!</h4>\n        <a href=\"http://www.aias.org/membership/#join\" target=\"_blank\"><button class=\"ui button black\" style=\"margin: 7px 0 7px 0;\">Join</button></a>\n        <address>\n          <a href=\"mailto:aiascmu@gmail.com\"><h4>aiascmu@gmail.com</h4></a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <script type=\"text/javascript\">\n      $('#year')[0].innerText = (new Date()).getFullYear()\n  </script>";
},"useData":true});
templates['navigation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<style>\n  .hidden.menu {\n    display: none;\n  }\n  .masthead.segment {\n    height: 100%;\n    padding: 1em 0em;\n  }\n  .masthead .logo.item img {\n    margin-right: 1em;\n  }\n  .masthead .ui.menu .ui.button {\n    margin-left: 0.5em;\n  }\n  .masthead h1.ui.header {\n    margin-top: 3em;\n    margin-bottom: 0em;\n    font-size: 4em;\n    font-weight: normal;\n  }\n  .masthead h2 {\n    font-size: 1.7em;\n    font-weight: normal;\n  }\n  .ui.vertical.stripe {\n    padding: 8em 0em;\n  }\n  .ui.vertical.stripe h3 {\n    font-size: 2em;\n  }\n  .ui.vertical.stripe .button + h3,\n  .ui.vertical.stripe p + h3 {\n    margin-top: 3em;\n  }\n  .ui.vertical.stripe .floated.image {\n    clear: both;\n  }\n  .ui.vertical.stripe p {\n    font-size: 1.33em;\n  }\n  .ui.vertical.stripe .horizontal.divider {\n    margin: 3em 0em;\n  }\n  .quote.stripe.segment {\n    padding: 0em;\n  }\n  .quote.stripe.segment .grid .column {\n    padding-top: 5em;\n    padding-bottom: 5em;\n  }\n  .footer.segment {\n    padding: 5em 0em;\n  }\n  .secondary.menu .toc.item {\n    display: none;\n  }\n  .ui.secondary.menu {\n    border-bottom: none;\n  }\n  .ui.secondary.inverted.pointing.menu {\n    border: none;\n  }\n  @media only screen and (max-width: 700px) {\n    .ui.fixed.menu {\n      display: none !important;\n    }\n    .ui.secondary.menu .item,\n    .ui.secondary.menu .menu {\n      display: none;\n    }\n    .secondary.menu .toc.item {\n      display: block;\n      padding-left: 0;\n    }\n    .masthead.segment {\n      /*min-height: 350px;*/\n    }\n    .masthead h1.ui.header {\n      font-size: 2em;\n      margin-top: 1.5em;\n    }\n    .masthead h2 {\n      margin-top: 0.5em;\n      font-size: 1.5em;\n    }\n  }\n</style>\n\n<div class=\"pusher\">\n  <div class=\"ui vertical masthead center aligned segment overlay\">\n    <div class=\"ui container\">\n      <div class=\"ui secondary inverted menu\">\n        <a class=\"toc item\">\n          <i class=\"white sidebar icon\"></i>\n        </a>\n        <a href=\"index.html\" class=\"item\" style=\"margin: 0 10px 0 0;padding: 0;\"><img src=\"img/logowhite.svg\"></a>\n        <a href=\"index.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionhome || (depth0 != null ? depth0.itemoptionhome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionhome","hash":{},"data":data}) : helper)))
    + "\">Home</a>\n        <a href=\"events.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionevents || (depth0 != null ? depth0.itemoptionevents : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionevents","hash":{},"data":data}) : helper)))
    + "\">Events</a>\n        <a href=\"membership.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionresources || (depth0 != null ? depth0.itemoptionresources : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionresources","hash":{},"data":data}) : helper)))
    + "\">Resources</a>\n        <a href=\"about.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionabout || (depth0 != null ? depth0.itemoptionabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionabout","hash":{},"data":data}) : helper)))
    + "\">About</a>\n        <div class=\"item right aligned\"  style=\"margin: 0;padding: 0;\"><button class=\"ui button joinbutton\"><a href=\"http://www.aias.org/membership/#join\" target=\"_blank\">Join</a></button></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui left vertical sidebar labeled icon menu\">\n  <a href=\"index.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionhome || (depth0 != null ? depth0.itemoptionhome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionhome","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorhome || (depth0 != null ? depth0.colorhome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorhome","hash":{},"data":data}) : helper)))
    + " home icon\"></i>\n    Home\n  </a>\n  <a href=\"events.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionevents || (depth0 != null ? depth0.itemoptionevents : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionevents","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorevents || (depth0 != null ? depth0.colorevents : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorevents","hash":{},"data":data}) : helper)))
    + " calendar icon\"></i>\n    Events\n  </a>\n  <a href=\"resources.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionresources || (depth0 != null ? depth0.itemoptionresources : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionresources","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorresources || (depth0 != null ? depth0.colorresources : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorresources","hash":{},"data":data}) : helper)))
    + " desktop letter icon\"></i>\n    Resources\n  </a>\n  <a href=\"about.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionabout || (depth0 != null ? depth0.itemoptionabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionabout","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorabout || (depth0 != null ? depth0.colorabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorabout","hash":{},"data":data}) : helper)))
    + " smile icon\"></i>\n    About\n  </a>\n</div>\n\n\n<!--nav found at https://jsfiddle.net/f8pgk4n5/1/-->\n";
},"useData":true});
templates['person'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"entry\">\n  <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <div class=\"body\">\n    "
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "\n  </div>\n</div>\n";
},"useData":true});
templates['propertiesaccordion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ui accordion\">\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestateapartments || (depth0 != null ? depth0.titlestateapartments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestateapartments","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Apartments\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstateapartments || (depth0 != null ? depth0.contentstateapartments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstateapartments","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui list\" >\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleeastwoodapts || (depth0 != null ? depth0.styleeastwoodapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleeastwoodapts","hash":{},"data":data}) : helper)))
    + "\" href=\"eastwood.html\">Eastwood Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleriverbluffapts || (depth0 != null ? depth0.styleriverbluffapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleriverbluffapts","hash":{},"data":data}) : helper)))
    + "\" href=\"riverbluff.html\">River Bluff Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylewalnutstapts || (depth0 != null ? depth0.stylewalnutstapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylewalnutstapts","hash":{},"data":data}) : helper)))
    + "\" href=\"walnutst.html\">Walnut St. Apts</a>\n    </div>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestaterestaurants || (depth0 != null ? depth0.titlestaterestaurants : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestaterestaurants","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Restaurants\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstaterestaurants || (depth0 != null ? depth0.contentstaterestaurants : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstaterestaurants","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylewongsfamilyrestaurant || (depth0 != null ? depth0.stylewongsfamilyrestaurant : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylewongsfamilyrestaurant","hash":{},"data":data}) : helper)))
    + "\" href=\"wongsfamilyrestaurant.html\">Wong's Family Restaurant</a><br>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylejohnnywongschinesebistro || (depth0 != null ? depth0.stylejohnnywongschinesebistro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylejohnnywongschinesebistro","hash":{},"data":data}) : helper)))
    + "\" href=\"johnnywongschinesebistro.html\">Johnny Wong's Chinese Bistro</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatesinglefamilyhomes || (depth0 != null ? depth0.titlestatesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Single Family Homes\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatesinglefamilyhomes || (depth0 != null ? depth0.contentstatesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylesinglefamilyhomes || (depth0 != null ? depth0.stylesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\" href=\"singlefamilyhomes.html\">Single Family Homes</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestateofficecomplexes || (depth0 != null ? depth0.titlestateofficecomplexes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestateofficecomplexes","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Office Complexes\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstateofficecomplexes || (depth0 != null ? depth0.contentstateofficecomplexes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstateofficecomplexes","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleprofessionalvillageeastofficecomplex || (depth0 != null ? depth0.styleprofessionalvillageeastofficecomplex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleprofessionalvillageeastofficecomplex","hash":{},"data":data}) : helper)))
    + "\" href=\"professionalvillageeastofficecomplex.html\">Professional Village East Office Complex</a>\n  </div>\n\n\n\n\n\n\n<!-- <div class=\"ui accordion\">\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestateapartments || (depth0 != null ? depth0.titlestateapartments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestateapartments","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Apartments\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstateapartments || (depth0 != null ? depth0.contentstateapartments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstateapartments","hash":{},"data":data}) : helper)))
    + "\">\n\n    <div class=\"ui list\" >\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleeastwoodapts || (depth0 != null ? depth0.styleeastwoodapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleeastwoodapts","hash":{},"data":data}) : helper)))
    + "\" href=\"eastwood.html\">Eastwood Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleriverbluffapts || (depth0 != null ? depth0.styleriverbluffapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleriverbluffapts","hash":{},"data":data}) : helper)))
    + "\" href=\"riverbluff.html\">River Bluff Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylewalnutstapts || (depth0 != null ? depth0.stylewalnutstapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylewalnutstapts","hash":{},"data":data}) : helper)))
    + "\" href=\"walnutst.html\">Walnut St. Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleautumnwoodsapts || (depth0 != null ? depth0.styleautumnwoodsapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleautumnwoodsapts","hash":{},"data":data}) : helper)))
    + "\" href=\"autumnwoods.html\">Autumn Woods Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylecountryclubapts || (depth0 != null ? depth0.stylecountryclubapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylecountryclubapts","hash":{},"data":data}) : helper)))
    + "\" href=\"countryclub.html\">Country Club Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styletowneterraceapts || (depth0 != null ? depth0.styletowneterraceapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styletowneterraceapts","hash":{},"data":data}) : helper)))
    + "\" href=\"towneterrace.html\">Towne Terrace Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylemulberryapts || (depth0 != null ? depth0.stylemulberryapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylemulberryapts","hash":{},"data":data}) : helper)))
    + "\" href=\"mulberry.html\">Mulberry Apts</a>\n    </div>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatehotel || (depth0 != null ? depth0.titlestatehotel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatehotel","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Hotel\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatehotel || (depth0 != null ? depth0.contentstatehotel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatehotel","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleraintreeinn || (depth0 != null ? depth0.styleraintreeinn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleraintreeinn","hash":{},"data":data}) : helper)))
    + "\" href=\"raintreeinn.html\">Raintree Inn</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestaterestaurants || (depth0 != null ? depth0.titlestaterestaurants : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestaterestaurants","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Restaurants\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstaterestaurants || (depth0 != null ? depth0.contentstaterestaurants : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstaterestaurants","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylewongsfamilyrestautant || (depth0 != null ? depth0.stylewongsfamilyrestautant : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylewongsfamilyrestautant","hash":{},"data":data}) : helper)))
    + "\" href=\"wongsfamilyrestaurant.html\">Wong's Family Restaurant</a><br>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylejohnnywongschinesebistro || (depth0 != null ? depth0.stylejohnnywongschinesebistro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylejohnnywongschinesebistro","hash":{},"data":data}) : helper)))
    + "\" href=\"johnnywongschinesebistro.html\">Johnny Wong's Chinese Bistro</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatesinglefamilyhomes || (depth0 != null ? depth0.titlestatesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Single Family Homes\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatesinglefamilyhomes || (depth0 != null ? depth0.contentstatesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylesinglefamilyhomes || (depth0 != null ? depth0.stylesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\" href=\"singlefamilyhomes.html\">Single Family Homes</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestateofficecomplexes || (depth0 != null ? depth0.titlestateofficecomplexes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestateofficecomplexes","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Office Complexes\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstateofficecomplexes || (depth0 != null ? depth0.contentstateofficecomplexes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstateofficecomplexes","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleprofessionalvillageeastofficecomplex || (depth0 != null ? depth0.styleprofessionalvillageeastofficecomplex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleprofessionalvillageeastofficecomplex","hash":{},"data":data}) : helper)))
    + "\" href=\"professionalvillageeastofficecomplex.html\">Professional Village East Office Complex</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatemobilehomeparks || (depth0 != null ? depth0.titlestatemobilehomeparks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatemobilehomeparks","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Mobile Home Parks\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatemobilehomeparks || (depth0 != null ? depth0.contentstatemobilehomeparks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatemobilehomeparks","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylesherwoodmobilehomepark || (depth0 != null ? depth0.stylesherwoodmobilehomepark : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylesherwoodmobilehomepark","hash":{},"data":data}) : helper)))
    + "\" href=\"sherwoodmobilehomepark.html\">Sherwood Mobile Home Park</a><br>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylebourneendmobilehomepark || (depth0 != null ? depth0.stylebourneendmobilehomepark : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylebourneendmobilehomepark","hash":{},"data":data}) : helper)))
    + "\" href=\"bourneendmobilehomepark.html\">Bourne End Mobile Home Park</a>\n  </div>\n</div>\n -->";
},"useData":true});
templates['resourcesmenu'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ui vertical menu \" id=\"resourcesverticalmenu\">\n  <a class=\""
    + alias4(((helper = (helper = helpers.itemmembership || (depth0 != null ? depth0.itemmembership : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemmembership","hash":{},"data":data}) : helper)))
    + "\" href=\"membership.html\">Membership</a>\n  <a class=\""
    + alias4(((helper = (helper = helpers.itemprofessional || (depth0 != null ? depth0.itemprofessional : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemprofessional","hash":{},"data":data}) : helper)))
    + "\" href=\"professional.html\">Professional</a>\n  <a class=\""
    + alias4(((helper = (helper = helpers.itemcommunity || (depth0 != null ? depth0.itemcommunity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemcommunity","hash":{},"data":data}) : helper)))
    + "\" href=\"community.html\">Community</a>\n  <a class=\""
    + alias4(((helper = (helper = helpers.itemnational || (depth0 != null ? depth0.itemnational : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemnational","hash":{},"data":data}) : helper)))
    + "\" href=\"national.html\">National</a>\n  <a class=\""
    + alias4(((helper = (helper = helpers.itemmemberdrive || (depth0 != null ? depth0.itemmemberdrive : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemmemberdrive","hash":{},"data":data}) : helper)))
    + "\" href=\"https://drive.google.com/open?id=0B2A11UUlfHyicUtwNGxKTkFFLTA\" target = \"_blank\">Member Google Drive</a>\n</div>\n\n";
},"useData":true});
templates['upcomingevents'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ui medium header\">Upcoming Events</div>\n\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link18 || (depth0 != null ? depth0.link18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link18","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date18 || (depth0 != null ? depth0.date18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date18","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description18 || (depth0 != null ? depth0.description18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description18","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time18 || (depth0 != null ? depth0.time18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time18","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location18 || (depth0 != null ? depth0.location18 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location18","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link19 || (depth0 != null ? depth0.link19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link19","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date19 || (depth0 != null ? depth0.date19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date19","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description19 || (depth0 != null ? depth0.description19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description19","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time19 || (depth0 != null ? depth0.time19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time19","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location19 || (depth0 != null ? depth0.location19 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location19","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link20 || (depth0 != null ? depth0.link20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link20","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date20 || (depth0 != null ? depth0.date20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date20","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description20 || (depth0 != null ? depth0.description20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description20","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time20 || (depth0 != null ? depth0.time20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time20","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location20 || (depth0 != null ? depth0.location20 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location20","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link21 || (depth0 != null ? depth0.link21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link21","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date21 || (depth0 != null ? depth0.date21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date21","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description21 || (depth0 != null ? depth0.description21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description21","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time21 || (depth0 != null ? depth0.time21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time21","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location21 || (depth0 != null ? depth0.location21 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location21","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link22 || (depth0 != null ? depth0.link22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link22","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date22 || (depth0 != null ? depth0.date22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date22","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description22 || (depth0 != null ? depth0.description22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description22","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time22 || (depth0 != null ? depth0.time22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time22","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location22 || (depth0 != null ? depth0.location22 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location22","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link23 || (depth0 != null ? depth0.link23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link23","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date23 || (depth0 != null ? depth0.date23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date23","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description23 || (depth0 != null ? depth0.description23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description23","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time23 || (depth0 != null ? depth0.time23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time23","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location23 || (depth0 != null ? depth0.location23 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location23","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link24 || (depth0 != null ? depth0.link24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link24","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date24 || (depth0 != null ? depth0.date24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date24","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description24 || (depth0 != null ? depth0.description24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description24","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time24 || (depth0 != null ? depth0.time24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time24","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location24 || (depth0 != null ? depth0.location24 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location24","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link27 || (depth0 != null ? depth0.link27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link27","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date27 || (depth0 != null ? depth0.date27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date27","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description27 || (depth0 != null ? depth0.description27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description27","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time27 || (depth0 != null ? depth0.time27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time27","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location27 || (depth0 != null ? depth0.location27 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location27","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link25 || (depth0 != null ? depth0.link25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link25","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date25 || (depth0 != null ? depth0.date25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date25","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description25 || (depth0 != null ? depth0.description25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description25","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time25 || (depth0 != null ? depth0.time25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time25","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location25 || (depth0 != null ? depth0.location25 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location25","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link26 || (depth0 != null ? depth0.link26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link26","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date26 || (depth0 != null ? depth0.date26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date26","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description26 || (depth0 != null ? depth0.description26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description26","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time26 || (depth0 != null ? depth0.time26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time26","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location26 || (depth0 != null ? depth0.location26 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location26","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div>\n<!-- <div class=\"ui link card\">\n  <div class=\"content\">\n    <a href=\"events.html#"
    + alias4(((helper = (helper = helpers.link17 || (depth0 != null ? depth0.link17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link17","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ui small header\">"
    + alias4(((helper = (helper = helpers.date17 || (depth0 != null ? depth0.date17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date17","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"ui medium description\">\n      "
    + alias4(((helper = (helper = helpers.description17 || (depth0 != null ? depth0.description17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description17","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    <hr>\n    <div class=\"ui small description\">\n      "
    + alias4(((helper = (helper = helpers.time17 || (depth0 != null ? depth0.time17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time17","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.location17 || (depth0 != null ? depth0.location17 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location17","hash":{},"data":data}) : helper)))
    + "\n    </div>\n    </a>\n  </div>\n</div> -->\n\n<div class=\"ui vertical segment right aligned\">\n  <div class=\"ui two column grid\">\n    <div class=\"left aligned column\">\n      <h4 class=\"small\">Follow us on social media for more updates!</h4>\n    </div>\n    <div class=\"centered column\">\n      <a class=\"socialmediaicon\" alt=\"facebook icon\" target=\"blank\" href=\"https://www.facebook.com/aias.cmu\"><i class=\"big facebook f icon\"></i></a>\n      <a class=\"socialmediaicon\" alt=\"instagram icon\" target=\"blank\" href=\"https://www.instagram.com/aiascmu/\"><i class=\"big instagram icon\"></i></a>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();