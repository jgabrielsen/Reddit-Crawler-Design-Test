// Show and Hide Stories by Subreddit
$showHideSubreddit = function(e){
  var subreddit = e.attr('data-subreddit');
  ( e.hasClass("is-primary") ? e.removeClass("is-primary") : e.addClass("is-primary") );
  ( $("[data-subreddit-target=" + subreddit + "]").hasClass("is-active") ? $("[data-subreddit-target=" + subreddit + "]").removeClass("is-active") : $("[data-subreddit-target=" + subreddit + "]").addClass("is-active") );
};
$( document ).on('click','.button.filter', function() { 
  $showHideSubreddit( $( this ) );
});


// Add New Subreddit Button Functions
$expandAddSubreddit = function(){
  $( ".add-subreddit .fa-plus" ).addClass("is-hidden") ;  
  $( ".add-subreddit .add-subreddit-field" ).addClass("is-active");
  $( ".add-subreddit-field input" ).focus();
};
$( document ).on('click','.button.add-subreddit', function() { 
  $expandAddSubreddit();
});

$contractAddSubreddit = function(){
  $( ".add-subreddit .fa-plus" ).removeClass("is-hidden") ;  
  $( ".add-subreddit .add-subreddit-field" ).removeClass("is-active");
};
$( ".add-subreddit-field input" ).blur( function() {
  $contractAddSubreddit();
});  
