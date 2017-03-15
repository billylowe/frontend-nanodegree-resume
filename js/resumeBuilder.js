var name = "Billy Lowe";
var role = "Web Developer";
var mobile = "0123 465 7898";
var email = "test@test.com";
var gitHub = "https://github.com/billylowe";
var location = "London";
var bioPic = "images/197x148.gif";
var welcomeMsg = "Hi there, welcome to my CV...";
var skills = ["html", "css", "JQuery", "JavaScript"];

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
    "Skills" : skills,
};

var work = {};

var schools = {};

work.workStart = "April 2016";
work.workEmployer = "Pythagoras";
work.workTitle = "Support Consultant";
work.workDates = "2016 - Present";
work.workLocation = "London";
work.workDescripton = "I did this and I did that"


schools.schoolStart = "Sometime";
schools.schoolName = "Sussex University";
schools.schoolDegree = "Geography";
schools.schoolDates = "Sometime";
schools.schoolLocation = "Sussex County";
schools.schoolMajor = "Geography major";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedGitHub = HTMLgithub.replace("%data%", gitHub);
var formattedLocation = HTMLlocation.replace("%data%", location);
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#lets-connect").append(formattedMobile);
$("#lets-connect").append(formattedEmail);
$("#lets-connect").append(formattedGitHub);
$("#lets-connect").append(formattedLocation);
$("#lets-connect").append(formattedBioPic);
$("#lets-connect").append(formattedWelcomeMsg);
$("#lets-connect").append(formattedSkills);

