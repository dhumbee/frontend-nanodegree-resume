var bio = {
	"name": "Dianna Hummel",
	"role": "&lt;/Web Developer&gt;",
	"contacts": {
		"mobile": "717-688-1492",
		"email": "dhummel.1210@gmail.com",
		"github": "https://github.com/dhumbee",
		"location": "Hanover, Pennsylvania"
	},
	"picture": "../images/crop.jpg",
	"skills": [
		"Microsoft Office", "HTML5", "CSS", "JavaScript"
	]
}

var work = {
	"jobs": [
	{
		"employer": "Pine Creek Structures",
		"title": "Administrative Assistant",
		"location": "Hanover, PA",
		"dates": "June 2012-present",
		"description": "Helping and resolving customer issues in person, over the phone, or via email. " +
		"Processing orders and recording data into Excel sheets for later use and end of the year stats. " +
		"Working with sales managers and other administrative staff on event planning and daily operations."
	},
	{
		"employer": "Orbital Image Salon",
		"title": "Stylist",
		"location": "Westminster, MD",
		"dates": "Feb 2012-June 2012",
		"description": "This was a temporary position to help while one of the stylist underwent medical treatment. " +
		"Duties included, but not limited to: Back to back customer interaction either in the way of direct services or " +
		"intial	consultations.  Keep up to date with latest trends.  Formulate and keep record of customer's chemical formulas " +
		"and needs."
	},
	{
		"employer": "Buzy Bee Cleaning",
		"title": "Owner",
		"location": "Gillette, WY",
		"dates": "Jan 2009-Feb 2012",
		"description": "Residential and commercial cleaning services."
	},
	{
		"employer": "Remington Village Apartments",
		"title": "Administrative Assistant",
		"location": "Gillette, WY",
		"dates": "Mar 2009-Sept 2009",
		"description": "Administrative duties including, but not limited to: preparing, reviewing, and renewing leases. " +
		"Overseeing walk throughs with new/old tenants.  Helping and resolving customer issues."
	},
	{
		"employer": "Monix Salon and Spa",
		"title": "Manager/ Stylist",
		"location": "Gillette, WY",
		"dates": "Jan 2008-Mar 2009",
		"description": "Constant customer interaction.  Resolving customer issues.  Hiring new team members. " +
		"In salon training of new techniques and products.	Ordering products and supplies on a regular basis.  Keep up to date with latest trends."
	}
	]
};


var education = {
	"onlineCourses": [
	{
		"school": "Udacity",
		"title": "Front-End Web Developer Nano-Degree",
		"dates": "June 2015-present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"school": "Udacity",
		"title": "Intro to Programming Nano-Degree",
		"dates": "Feb 2015-June 2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Intro To Programming Stage 5",
		"dates": "June 2015",
		"description": "This was my final project in my Intro to Programming course.  It's an culmination of notes from stage 4, which touched on the full " +
		"stack web developer, and stage 5 which was an all around course on	new ideas.",
		"images": [
			"../src-images/inpd-stage5-home-400small.png", "../src-images/inpd-stage5-toggle-descriptions-400small.png", "../src-images/inpd-stage5-codepen-400small.png", "../src-images/inpd-stage5-guestbook-400small.png",
			"../src-images/inpd-stage5-notes-400small.png", "../src-images/inpd-stage5-notes2-400small.png"
		]
	},
	{
		"title": "Portfolio",
		"dates": "July 2015",
		"description": "My first project in the Front End Web Developer Nano-Degree was to create a basic portfolio page that could show off my projects and the that I wrote.",
		"images": [
			"../src-images/portfolio-1-400small.png", "../src-images/portfolio-2-400small.png", "../src-images/portfolio-3-400small.png"
		]
	}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedNameRole = formattedName + formattedRole;
$("#header").prepend(formattedNameRole);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#pic").append(formattedBioPic);

$("#skills-section").append(HTMLskillsStart);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedContactInfo = formattedMobile + formattedEmail + formattedGithub +formattedLocation;
$("#contact-me").append(formattedContactInfo);

//below is the code that will add my work information to the resume
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle =  formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDatesLocation = formattedDates + formattedLocation;
		$(".work-entry:last").append(formattedDatesLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

//this projects display function assigns my project object to the resume
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedProjectImages);
			}
		}

	}
}
projects.display();

//below is my code for displaying my education
education.display = function () {
	for (edu in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);


		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
		$(".education-entry:last").append(formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
$("#education").append(HTMLonlineClasses);
education.display();

//here is the selector that puts the google map on the page
$("#map-div").append(googleMap);

//below is the code for the internalize button, it's not running correctly yet
//var name=formattedName;

//function inName() {
	//name = name.trim().split(" ");
	//console.log(name);
	//name[1]=name[1].toUpperCase();
	//name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	//return name[0] +" "+name[1];	
//}

//$("#main").prepend(internationalizeButton);

$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 