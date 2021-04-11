/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweet = (tweet) => {
    
    let $tweet = 
        `<article>
            <header>
                <img src="${tweet.user.avatars}" />
                <p>
                    <span>${tweet.user.name}</span>
                    <span>${tweet.user.handle}</span>
                </p>
            </header>
            <div class="tweet-content">
                ${tweet.content.text}
            </div>
            <footer></footer>
        </article`;

    return $tweet;
}

const renderTweets = (tweets) => {

    tweets.forEach(tweet => {
        let $newTweet = createTweet(tweet);
        $("#tweets-container").append($newTweet);
    });
}
$(document).ready(function(data){

    $('form').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: '/tweets',
            data: $(this).serialize(),
            success: () => {
                console.log("success");
                $('#tweets-container').children().filter(':not(.new-tweet)').remove();
                loadTweets();
            },
            error: () => {
                console.log("Error")
            }
        });
        
    });

    $('.btn-compose-tweet').on('click', function(){
        $('.new-tweet').stop(true, true).slideToggle('slow');
    });

    const loadTweets = () => {
        $.ajax({
            type: "GET",
            url: '/tweets',
            data: $(this).serialize(),
            success: (res) => {
                renderTweets(res);
            },
            error: () => {
                console.log("Error")
            }
        });
    }

    loadTweets();
})
