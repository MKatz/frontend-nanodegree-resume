$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

var bio = {
    "name": "Matt Katz",
    "role" : "Front End Developer",
    "contacts" : {
    "email" : "MrMattKatz@gmail.com",
    "github" : "MKatz",
    "mobile" : "785.691.9750",
    "location": "Tulsa, Oklahoma"
     },
    "skills" : ['HTML', 'CSS', 'JavaScript', 'jQuerey', 'AngularJS', 'Bootstrap'],
    "picture" : "images/headshot.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var displayImage = HTMLbioPic.replace("%data%",bio.picture);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(displayImage);
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#header").append(formattedSkill);
    }
    $("#topContacts").append(contactsEmail);
    $("#topContacts").append(contactsMobile);
    $("#topContacts").append(contactsGithub);
    $("#topContacts").append(contactsLocation);
    $("#footerContacts").append(contactsEmail);
    $("#footerContacts").append(contactsMobile);
    $("#footerContacts").append(contactsGithub);
    $("#footerContacts").append(contactsLocation);
};

var education = {
    'schools' : [
        {
            'name' : 'University of Kansas',
            'location' : 'Lawrence, Kansas',
            'degree' : 'Bachelor of Science',
            'majors' : 'Journalism/Sociology',
            'dates' : 2008,
            'website' : 'http://www.ku.edu/'
        }
    ],
        'onlineCourses' : [
            {
                'title' : 'Front-End Web Developer',
                'school' : 'Udacity',
                'dates' : 2015,
                'website' : 'http://www.udacity.com'
            },
            {
                'title' : 'OK Coders',
                'school' : 'University of Oklahoma',
                'dates' : 2015,
                'website' : 'http://www.okcoders.com/'
            }
    ],
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("#",education.schools[school].website);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (var course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            formattedOnlineTitle = formattedOnlineTitle.replace("#",education.onlineCourses[course].website);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
       }
    }
};

var work = {
    'jobs' : [
        {
            'employer' : 'Shipzen',
            'website' : 'http://cloutship.com/',
            'title' : "Front-End Developer",
            'duration' : 'August 2015 to Present',
            'descrition' : 'Developing interactive websites and applications with HTML, CSS, JavaScript, AngularJS, and jQuery. Creating both seamless user interfaces, and effortless management systems for clients.'
        },
        {
            'employer' : 'Uber',
            'website' : 'http://www.uber.com/',
            'title' : 'Community Support Representative',
            'duration' : 'June 2014 to August 2015',
            'descrition' : 'Delivering high-quality service via email support helping and educating both riders and drivers. Building loyalty among new users and getting early adopters to fall in love with Uber all over again by taking upset riders and drivers, and turning them into our strongest evangelists with unique and effective solutions.'
        },
        {
            'employer' : 'Prairie Artisan Ales',
            'website' : 'http://prairieales.com/',
            'title' : 'Taproom/Brewery Worker',
            'duration' : 'June 2014 to Present',
            'descrition' : 'Pouring and sampling local craft beer on-site and at special events. Supporting local entrepreneurship and building a loyal customer base by being an ambassador for the Prairie brand. Assisting in brewing and bottling.'
        }
    ]
};

work.display = function () {
    for (var job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("#", work.jobs[job].website);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('.work-entry:last').append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].duration);

        $('.work-entry:last').append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].descrition);

        $('.work-entry:last').append(formattedDescription);
    }
};

var projects = {
    'projects' : [
        {
            'title' : 'Portfolio',
            'dates' : 2015,
            'descrition' : 'This is the project descrition',
            'url' : "Lorem ipsum",
            'images' : ['images/fry.jpg']
        }
    ]
};

projects.display = function () {
    for (var project in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].descrition);
        $('.project-entry:last').append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
