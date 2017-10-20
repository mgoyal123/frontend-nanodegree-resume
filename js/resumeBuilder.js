/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Mishu Goyal");
 // var name = "Mishu goyal";
 // var role = "Full stack developer"
 // var age = 29;
 //console.log(name);
 //console.log(age);
 // awesomethoughts = "i am mishu and i am AWESOME";
 // funthoughts = awesomethoughts.replace("AWESOME", "FUN");
//console.log(awesomethoughts);
//$("#main").append(funthoughts)
// var formattedName = HTMLheaderName.replace("%data%",name);
// var formattedRole = HTMLheaderRole.replace("%data%",role);

// $("#header").append(formattedRole)
// $("#header").prepend(formattedName)



// var bio = {
// 	"name" : name,
// 	"role" : role,
// 	"contacts" : ["9845406616", "mishugoyal11@gmail.com"],
// 	"picture_url" : "https://static.pexels.com/photos/34950/pexels-photo.jpg",
// 	"welcome_message" : "Hello",
// 	"skills" : ["programming" , "python" , "javascript", "java" ]
// };





var work = {
	"jobs" : [
	{
		"employer" : "Punjab national bank", 
		"title" : "IT officer",
		"location" : "Bangalore",
		"dates" : ["20/07/2015", "28/02/2017"],
		"description" : "Finacle support"
	},
	{
		"employer" : "Aricent Technologies",
		"title" : "Test Engineer",
		"location" : "Gurgaon",
		"dates" : ["12/09/2013", "31/05/2014"],
		"description" : "Automation of LTE framework"
	}
]
}

var projects = {
	"projects" : [
	{
		"title" : "Procurement & Installation of Hardware", 
		"dates" : ["20/07/2015", "28/02/2017"],
		"description" : "Procurement/ Disposal/ Installation/Maintenance of all hardware items",
		"images" : ["images/pnb.jpg"]
	},
	{
		"title" : "LTE Testing Automation",
		"dates" : ["12/09/2013", "31/05/2014"],
		"description" : "Migration and upliftment of a Testing Automation Framework developed",
		"images" : ["images/aricent.png"]
	}
	],
	
}

projects.display = function(){
		for(var i in projects.projects){
		$("#projects").append(HTMLprojectStart);
		formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDesc);
		formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
		$(".project-entry:last").append(formattedImage);
		
	}
	}
projects.display();

var bio = {
	"name" : "Mishu Goyal",
	"role" : "Full Stack Developer",
	"welcomeMessage" : "Results-oriented professional with a bottom-line orientation. Motivated self-starter experienced in working with all levels of staff",
	"biopic" : "images/fry.jpg",
	"contacts" : {
		"mobile" : "9845406616",
		"email" : "mishugoyal11@gmail.com",
		"github" : "mishugoyal11",
		"location" : "Bangalore"
	},

	"skills" : ["programming" , "python" , "javascript", "java" ]
}

var education = {
	"schools" : [
	{
		"name": "M.H.R",
		"majors": ["Maths", "science"],
		"location" : "bathinda",
		"degree dates" : 2009,
		"url" : "http://www.studyguideindia.com/Schools/m-h-r-sr-sec-school-bathinda_6760.html"
	},
	{
		"name" : "Chitkara",
		"majors" : ["computer", "programming"],
		"location" : "chandigarh",
		"degree dates" : 2013,
		"url" : "http://www.studyguideindia.com/Schools/m-h-r-sr-sec-school-bathinda_6760.html"

	}
	],
	"online_courses" : [
	{
		"title" : "Python programming" ,
		"school" : "Udacity",
		"dates" : ["15/04/2017", "31/07/2017"],
		"url" : "www.udacity.com"
	}

	]	
}

// var weirdObject = {
//     "property": "Time for an astronomy lesson!",
//     "property1": "Cameron's minor in college was astronomy",
//     "property-2": "The 4 Galilean largest moons of Jupiter are:",
//     "property 3": "Io, Ganymede, Callisto, Europa",
//     "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
//     " property": "The Sun contains 99.87% of the mass of the entire solar system",
//     "property()": "There are 5 dwarf planets in our solar system:",
//     "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
//     "8property": "Mars has two tiny moons: Phobos and Deimos"
// }

// console.log(weirdObject.8property);
// // console.log(weirdObject["8property"])


 formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMobile);
$("#header").append(formattedemail);
$("#header").append(formattedgithub);
$("#header").append(formattedLocation);
$("#header").append(formattedMsg);
$("#header").append(formattedPicture);
if (bio.skills.length !== 0)
{
	$("#header").append(HTMLskillsStart);
	var i = 0;
	while(i < bio.skills.length){
		formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
		i++;
	}
}

var displayWork = function(){
	for( i in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedemployer + "-" + formattedTitle);
		formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDesc);
	}
}
displayWork();

function inName(){
	finalName = bio.name;
	finalName = finalName.split(" ")
	finalName[0] = finalName[0].toLowerCase()
	finalName[1] = finalName[1].toUpperCase()
	finalName = finalName.join(" ")
	finalName = finalName[0].toUpperCase() + finalName.slice(1)
	bio.name = finalName;
	return bio.name;	
}

$("#mapDiv").append(googleMap);

// function getRelationship(x, y) {
//     // Your code goes here!
//     if (!isNaN(x) && !isNaN(y)){
//     	if(x>y)
//     		return '>';
//     	else if (x<y)
//     		return '<';
//     	else
//     		return '=';
//     }
//     else if(isNaN(x))
//     	return "Can't compare relationships because "+ x + " is not a number";
//     else if(isNaN(y))
//     	return "Can't compare relationships because " + y + " is not a number";
//     else
//     	return "Can't compare relationships because " + x + " and " + y + " are not numbers";
// };

// // Try logging these functions to test your code!
// console.log(getRelationship(1,4));
// console.log(getRelationship(1,1));
// console.log(getRelationship("that",2));
// console.log(getRelationship("this"," something else"));
// console.log(getRelationship(3));
// console.log(getRelationship("hi"));
// console.log(getRelationship(NaN));
// console.log(getRelationship(NaN, undefined));


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var newArray = [];
    for(i in names){
   		names[i] = names[i].split(" ");
        newArray.push(names[i][1]+ ", "+names[i][0]);
    }
    return newArray.sort();
}


// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));