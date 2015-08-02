var bio = {
	"name": "Dianna Hummel",
	"role": "Web Developer",
	"contacts": {
		"mobile": "717-688-1492",
		"email": "dhummel.1210@gmail.com",
		"github": "https://github.com/dhumbee",
		"location": "Hanover, Pennsylvania"
	},
	"picture": "images/crop.jpg",
	"welcomeMessage": "Thanks for viewing my resume!  Please see below for ways to reach out to me.",
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
			"images/inpd-stage5-home.png", "images/inpd-stage5-toggle-descriptions.png", "images/inpd-stage5-codepen.png", "images/inpd-stage5-guestbook.png",
			"images/inpd-stage5-notes.png", "images/inpd-stage5-notes2.png"
		]
	},
	{
		"title": "Portfolio",
		"dates": "July 2015",
		"description": "My first project in the Front End Web Developer Nano-Degree was to create a basic portfolio page that could show off my projects and the that I wrote.",
		"images": [
			"images/portfolio-1.png", "images/portfolio-2.png", "images/portfolio-3.png"
		]
	}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedNameRole = formattedName + formattedRole;
$("#header").prepend(formattedNameRole);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#msg").append(formattedWelcomeMsg);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedContactInfo = formattedMobile + formattedEmail + formattedGithub +formattedLocation;
$("#topContacts").prepend(formattedContactInfo);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}


function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle =  formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDatesLocation = formattedDates + formattedLocation;
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDatesLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

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


var name=formattedName;

function inName() {
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];	
}

$("#main").prepend(internationalizeButton);

$("#map-div").append(googleMap);
