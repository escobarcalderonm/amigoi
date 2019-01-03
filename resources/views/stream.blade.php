<?php

echo 'comienzo<br>';

$settings = array(
    'oauth_access_token' => "1067796569527894017-tHCNSVCIRYY2W7Qu04hzs0u2vFRmGY",
    'oauth_access_token_secret' => "dm2Su5Sn72m0mVXFfRHUDFiIAZ1MsmbVG8uDXtE1BpW0C",
    'consumer_key' => "Gdvij9eg9W2Ql8UGcWWvsj8hk",
    'consumer_secret' => "gch3o0EAljlhzbEOOL9yYLlg3kYuPzgdzecohFUqSn1TUiIgwo"
);

//\Spatie\TwitterStreamingApi\PublicStream::create(
//    $settings['oauth_access_token'],
//    $settings['oauth_access_token_secret'],
//    $settings['consumer_key'],
//    $settings['consumer_secret']
//)->whenTweets('1067796569527894017', function (array $tweet) {
//    echo "{$tweet['user']['screen_name']} just tweeted {$tweet['text']}";
//    dd($tweet);
//})->startListening();

?>