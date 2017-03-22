// Objects using .notation
var schools = {};
var bio = {};
var educationOnline = {};

var projects = {[
        {
        "projectStart" : "Jan 2014",
        "projectTitle" : "Build website",
        "projectDates" : "Jan 2014 - Apr 2014"
        "projectDescription" : "I built a website. It. Was. Good."
        "projectImage" : "images/197x148.gif"
        },
        {
        "projectStart" : "Apr 2016",
        "projectTitle" : "Built a car",
        "projectDates" : "Mar 2015 - Apr 2016"
        "projectDescription" : "I built a car. It. Was. Fast."
        "projectImage" : "images/197x148.gif"
        }
        {
        "projectStart" : "Apr 2016",
        "projectTitle" : "Built a boat",
        "projectDates" : "Dec 2012 - Apr 2014"
        "projectDescription" : "I built a built. It. Was. Floaty."
        "projectImage" : "images/197x148.gif"
        }
    ]
}

var work = {
    "jobs": [
        {
        "workStart" : "April 2016",
        "workEmployer" : "Pythagoras",
        "workTitle" : "Support Consultant",
        "workDates" : "2016 - Present",
        "workLocation" : "London",
        "workDescription" : "I did this and I did that"
        },
        {
        "workStart" : "April 2011",
        "workEmployer" : "Creative Skillset",
        "workTitle" : "IT Administrator",
        "workDates" : "2011 - 2016",
        "workLocation" : "London",
        "workDescription" : "I did this and I did that"
        }
    ]
}


schools.schoolStart = "Sometime";
schools.schoolName = "Sussex University";
schools.schoolDegree = "Geography";
schools.schoolDates = "Sometime";
schools.schoolLocation = "Sussex County";
schools.schoolMajor = "Geography major";

bio.bioName = "Billy Lowe";
bio.bioRole = "Web Developer";
bio.bioMobile = "0123 465 7898";
bio.bioEmail = "test@test.com";
bio.bioGitHub = "https://github.com/billylowe";
bio.bioLocation = "London";
bio.bioPic = "images/197x148.gif";
bio.bioWelcomeMsg = "Hi there, welcome to my CV...";
bio.bioSkills = ["html", "css", "JQuery", "JavaScript"];

educationOnline.name = "Udacity";
educationOnline.type = "online";
educationOnline.course = ["html", "JavaScript", "CSS"];

projects
//Create function that will hold work details
function displayWork() {
// For-in loop example
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
//    var formattedWorkStart = HTMLworkStart.replace("%data%", work.jobs[job].workStart);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
//    var formattedWorkDatesStart = work.jobs[job].workStart + formattedWorkDates;
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkDates);
//    $(".work-entry:last").append(work.jobs[job].workStart);
    $(".work-entry:last").append(formattedDescription);
}
}
//Call function to display work details
displayWork();


var formattedName = HTMLheaderName.replace("%data%", bio.bioName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.bioRole);
var formattedMobile = HTMLmobile.replace("%data%", bio.bioMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.bioEmail);
var formattedGitHub = HTMLgithub.replace("%data%", bio.bioGitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.bioLocation);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedBioWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.bioWelcomeMsg);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedBioWelcomeMsg);
$("#main").append(internationalizeButton);


// If statement to check bio object
if (bio.bioSkills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.bioSkills[0]);
    // create new variable - replace HTML skills data with first item in skills array

    // append skill to the page
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.bioSkills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.bioSkills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.bioSkills[3]);
    $("#skills").append(formattedSkill);

}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

//Internationalize button function - takes in 2 names and returns international version

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name [0] + " " + name[1];
}
//trim removes white space from front and back of string
//split says split the string at the point of every space. This could be defined to split on a character or number
//split returns an array. Console.log prints the array to the console
//for name 0 we are saying silce the letter between position 0 and 1, which is the first letter. And then append that
//letter to before position 1 within the name[0] strin. This ensures that the first name begins with capital letter

// JSON example for creating an object

/*
var education = {
    "onlineClasses": [
      {
        "name": "Udacity",
        "type": "online",
        "course": ["html", "JavaScript", "CSS"]
    }, {
        "name": "CodeCademy",
        "type": "online",
        "course": ["html", "JavaScript", "CSS"]
    }
    ]
}

/*
// Complete Object
var bio = {
    "name" : name,
    "role" : role,
    "contacts" {
        "mobile" : mobile,
        "email" : email,
        "gitHub" : github,
        "location" : location,
    },
    "bio pic" : bioPic,
    "welcomeMessage" : welcomeMsg,
    "skills" : skills,
};









// JSON example for creating an object

/*
var education = {
    "onlineClasses": [
      {
        "name": "Udacity",
        "type": "online",
        "course": ["html", "JavaScript", "CSS"]
    }, {
        "name": "CodeCademy",
        "type": "online",
        "course": ["html", "JavaScript", "CSS"]
    }
    ]
}
*/



/*
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGitHub = HTMLgithub.replace("%data%", gitHub);
var formattedLocation = HTMLlocation.replace("%data%", location);
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", skills);
*/



/*
$("#lets-connect").append(formattedMobile);
$("#lets-connect").append(formattedEmail);
$("#lets-connect").append(formattedGitHub);
$("#lets-connect").append(formattedLocation);
$("#lets-connect").append(formattedBioPic);
$("#lets-connect").append(formattedWelcomeMsg);
$("#lets-connect").append(formattedSkills);
*/
