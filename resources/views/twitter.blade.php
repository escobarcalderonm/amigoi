<?php

use Abraham\TwitterOAuth\TwitterOAuth;

$settings = array(
    'oauth_access_token' => "1067796569527894017-j2tQbR5rTwVWD0h7GfWKq6S4PCBDJC",
    'oauth_access_token_secret' => "3IBIharSvxe6663t7hp3Sjz966J3DLXnEHsbLIjvsT19s",
    'consumer_key' => "	F8gWymDTNrYcA3SY8JIFKPmL1",
    'consumer_secret' => "Rp5f0WJNOgtQd5L63uWqWvOa3GihaqpZ4F6efhVK6lqDQnqIjj"
);

$connection = new TwitterOAuth($settings['consumer_key'], $settings['consumer_secret'], $settings['oauth_access_token'], $settings['oauth_access_token_secret']);
$content = $connection->get("account/verify_credentials");

$statuses = $connection->get("statuses/home_timeline", ["count" => 5, "exclude_replies" => true]);

var_dump($statuses);


?>