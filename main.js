
//Data for each project information
var coll = {
  "responsive" :{    
    "projectName": "Responsive Layout Demo",
    "img" : "imges/responsive.png",
    "lable": [],
    "linkDemo": "https://jason198411.github.io/responsive/",
    "linkSource": "https://github.com/Jason198411/responsive",
    "description": "In this project I built a responsive, mobile-first layout using HTML and CSS. The layout could demonstrate an understanding of responsive design by adjusting to accommodate small, medium, and large screen sizes. I wrote CSS to style the page for a small mobile device first. Then used min-width media queries, I added breakpoints to adjust the layout for wider tablet and desktop screens"
  },
  "photo" :{    
    "projectName": "Photo Gallery Demo",
    "img" : "imges/photo-gallery.png",
    "lable": [{"lb":"Javascript", "lbClass":"badge badge-secondary"},{"lb":"jQuery", "lbClass":"badge badge-success"}],
    "linkDemo": "https://jason198411.github.io/photo/",
    "linkSource": "https://github.com/Jason198411/photo",
    "description": "In this project, I created an interactive photo gallery using JavaScript and jQuery Plugins. Thumbnails and photos were provided with descriptions. At the top of the page have a search area where photos will hide and show depending on user input. When the user clicks on a thumbnail, the photo will display in a lightbox. There should be a back and previous arrows to cycle through photos."
  },
  "game" :{    
    "projectName": "Game Demo",
    "img" : "imges/game.png",
    "lable": [{"lb":"Javascript", "lbClass":"badge badge-secondary"}],
    "linkDemo": "https://jason198411.github.io/game/",
    "linkSource": "https://github.com/Jason198411/game",
    "description": "In this project I created a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase. I used Javascript to create an array of phrases and wrote functions to choose a random phrase from that array and put those letters onto the gameboard. Each time the player guesses a letter, if the letter is in the phrase, update the game board with the chosen letters. Otherwise, lose one chance, If the player completes the phrase before they run out of guesses, a winning screen will display. If the player guesses incorrectly 5 times, a losing screen will display."
  },
  "dashboard" :{    
    "projectName": "Dashboard Demo",
    "img" : "imges/dashboard.png",
    "lable": [{"lb":"Javascript", "lbClass":"badge badge-secondary"}],
    "linkDemo": "https://jason198411.github.io/dashboard/",
    "linkSource": "https://github.com/Jason198411/dashboard",
    "description": "In this project, I took a mockup and a few icons and built a beautiful, web dashboard complete with JavaScript-driven charts and graphs. I took the design and created the HTML, CSS and JavaScript functionality for this one page. I didn’t create other pages, the data is the makeup."
  },
  "employee" :{    
    "projectName": "Employee Directory Demo",
    "img" : "imges/employee.png",
    "lable": [{"lb":"Javascript", "lbClass":"badge badge-secondary"},{"lb":"API", "lbClass":"badge badge-warning"}],
    "linkDemo": "https://jason198411.github.io/employee/",
    "linkSource": "https://github.com/Jason198411/employee",
    "description": "In this project, I used the Random User Generator API to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. I requested a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information. "
  }, 
  "flickr" :{    
    "projectName": "Flickr Gallery Demo",
    "img" : "imges/flickr.png",
    "lable": [{"lb":"Javascript", "lbClass":"badge badge-secondary"},{"lb":"React","lbClass":"badge badge-info"},{"lb":"API", "lbClass":"badge badge-warning"}],
    "linkDemo": "",
    "linkSource": "https://github.com/Jason198411/flickr",
    "description": "In this project, I created an image gallery using React and the Flickr API. I built the gallery components, wrote the CSS and set up routing. The page include a Search link that includes a search field to let users search for photos. Under the search field, there are 3 links that return a list of photos matching the criteria I used React Router to set up routes for each navigation link in the directory app."
  }   
}
// scroll to target smoothly
$(".navbar a[href^='#']").on('click', function(event){
      event.preventDefault();
      var hash=this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 300, function(){
        window.location.hash = hash;
      });
} )

//Display modal
$(".callModal").on('click', function (event){
   event.preventDefault();
   var parm = $(event.target).attr("data-info");  //get data-info to identify which project was click 
   $(".modal-title").text(coll[parm].projectName);//set title
   $(".modal-body p").text(coll[parm].description);//set description
   $(".modal-body img").attr("src", coll[parm].img);//set project img 
   //when linkDemo != "" display view demo button
   if(coll[parm].linkDemo === ""){
     $(".modal-body a").first().css("display", "none");
   }else{
     $(".modal-body a").first().attr("href", coll[parm].linkDemo);
   }   
   $(".modal-body a").last().attr("href", coll[parm].linkSource);
   // get each lable and apend to html
   for(var i = 0 ; i<coll[parm].lable.length ;i++ ){     
     var text ="<span class =\""+coll[parm].lable[i].lbClass+"\">"+coll[parm].lable[i].lb+"</span> ";
     $(".modal-body .my-3").append(text);         
   }   
   $(".modal").modal('show'); //display modal
})

// initializ lables in modal
var bedges = "<span class=\"badge badge-primary\">HTML</span> <span class=\"badge badge-success\">CSS</span> ";
// when modal was hidden, remove all lables and back to initialization
$('.modal').on('hidden.bs.modal', function (e) {
  $(".modal-body .text-center span").remove();
  $(".modal-body .my-3").append(bedges);
  $(".modal-body a").first().css("display", "inline-block");
})


//On the mobile version when scroll if the menu is open, close it 
$( window ).scroll(function() {
  console.log($( "#navbarNavAltMarkup" ).hasClass(".show"));
  if($( "#navbarNavAltMarkup" ).hasClass("show")){
    console.log("come here");
    $( "#navbarNavAltMarkup" ).removeClass("show");
  }
});
 
