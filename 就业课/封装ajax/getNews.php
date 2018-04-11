<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
    array('title'=>'德国女总理默克尔滑雪时摔倒1 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒2 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒3 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒4 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒5 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒6 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒7 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒8 骨盆断裂','data'=>'2014-1-6'),
    array('title'=>'德国女总理默克尔滑雪时摔倒9 骨盆断裂','data'=>'2014-1-6'),
);

echo json_encode($news);
?>