/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1617842642225
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1617929042225
    }
]
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
    // for(tweet in tweets) {
    //     console.log(tweet);
    //     $("#tweets-container").append(createTweet(tweet));
    // }

    tweets.forEach(tweet => {

        let $newTweet = createTweet(tweet);
        console.log($newTweet)
        $("#tweets-container").append($newTweet);
    });
}
$(document).ready(function(){
    renderTweets(data);
})
