// Objects using .notation
var schools = {};
var bio = {};
var educationOnline = {};


var work = {
    "jobs": [
        {
        "workStart" : "April 2016",
        "workEmployer" : "Pythagoras",
        "workTitle" : "Support Consultant",
        "workDates" : "2016 - Present",
        "workLocation" : "London",
        "workDescripton" : "I did this and I did that"
        },
        {
        "workStart" : "April 2011",
        "workEmployer" : "Creative Skillset",
        "workTitle" : "IT Administrator",
        "workDates" : "2011 - 2016",
        "workLocation" : "London",
        "workDescripton" : "I did this and I did that"
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

// For-in loop example
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    console.log(work.jobs[job])
}



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


var formattedName = HTMLheaderName.replace("%data%", bio.bioName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.bioRole);
/*
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGitHub = HTMLgithub.replace("%data%", gitHub);
var formattedLocation = HTMLlocation.replace("%data%", location);
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", skills);
*/

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
$("#lets-connect").append(formattedMobile);
$("#lets-connect").append(formattedEmail);
$("#lets-connect").append(formattedGitHub);
$("#lets-connect").append(formattedLocation);
$("#lets-connect").append(formattedBioPic);
$("#lets-connect").append(formattedWelcomeMsg);
$("#lets-connect").append(formattedSkills);
*/
