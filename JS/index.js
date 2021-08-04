console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("p").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "#d5eeeb");
      }, 
      click: function(){
        $(this).css("background-color", "yellow");
      }  
    });
  });
