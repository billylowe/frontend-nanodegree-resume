var formattedName = HTMLheaderName.replace("%data%", "Billy Lowe");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

