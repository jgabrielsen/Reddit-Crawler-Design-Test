// Show and Hide Stories by Subreddit

$showHideSubreddit = function(e){
  var subreddit = e.attr('data-subreddit');
  ( e.hasClass("is-primary") ? e.removeClass("is-primary") : e.addClass("is-primary") );
  ( $("[data-subreddit-target="+subreddit+"]").hasClass("is-active") ? $("[data-subreddit-target="+subreddit+"]").removeClass("is-active") : $("[data-subreddit-target="+subreddit+"]").addClass("is-active") );
};

$( document ).on('click','.button.filter', function() { 
  $showHideSubreddit( $( this ) );
});