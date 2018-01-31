
// scroll to target smoothly
$(".navbar a[href^='#']").on('click', function(event){
      console.log("lai le me ");
      event.preventDefault();
      var hash=this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
        window.location.hash = hash;
      }
      );
} )


$(".callModal").on('click', function (event){
   event.preventDefault();
   var parm = $(event.target).attr("data-info")   
   $("#exampleModalLabel").text(coll[parm].projectName);
   $(".modal-body p").text(coll[parm].description);
   $(".modal-body img").attr("src", coll[parm].img);
   console.log(coll[parm].lable.length);
   for(var i = 0 ; i<coll[parm].lable.length ;i++ ){
     console.log(coll[parm].lable[i].lb);
     var txt = document.createElement("span");    // Create with DOM
     txt.innerHTML = coll[parm].lable[i].lb;
     $(txt).addClass(coll[parm].lable[i].lbClass);
     console.log(txt);
     $(".modal-body .text-center").append(txt);
   }
   console.log($(".modal-body").html()); 
   $(".modal").modal('show');
})


 
var coll = {

  "responsive" :{    
    "projectName": "Responsive Demo",
    "img" : "imges/responsive.png",
    "lable": [{"lb":"Javascript", "lbClass":"badge badge-secondary"}, {"lb":"React","lbClass":"badge badge-info"}],
    "link": "5",
    "description": "In this project I built a responsive, mobile-first layout using HTML and CSS. The layout could demonstrate an understanding of responsive design by adjusting to accommodate small, medium, and large screen sizes.I wrote CSS to style the page for a small mobile device first. Then, using min-width media queries, I added breakpoints to adjust the layout for wider tablet and desktop screens"
  }
}