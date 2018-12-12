<?php

use Abraham\TwitterOAuth\TwitterOAuth;

$settings = array(
    'oauth_access_token' => "1067796569527894017-tHCNSVCIRYY2W7Qu04hzs0u2vFRmGY",
    'oauth_access_token_secret' => "dm2Su5Sn72m0mVXFfRHUDFiIAZ1MsmbVG8uDXtE1BpW0C",
    'consumer_key' => "	Gdvij9eg9W2Ql8UGcWWvsj8hk",
    'consumer_secret' => "gch3o0EAljlhzbEOOL9yYLlg3kYuPzgdzecohFUqSn1TUiIgwo"
);

$connection = new TwitterOAuth($settings['consumer_key'], $settings['consumer_secret'], $settings['oauth_access_token'], $settings['oauth_access_token_secret']);
$content = $connection->get("account/verify_credentials");

$statuses = $connection->get("statuses/home_timeline", ["count" => 5, "exclude_replies" => true]);

var_dump($statuses);


?>