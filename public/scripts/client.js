/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetfunction = (tweet) => {
    let $tweet = 
        `<article>
            <header>
                <img src="${tweet.avatars}" />
                <p>
                    <span>${tweet.name}<span>
                    <span>${tweet.handle}<span>
                </p>
            </header>
            <div class="tweet-content">
                ${tweet.content.text}
            </div>
            <footer></footer>
        </article`;

    return $tweet;
}