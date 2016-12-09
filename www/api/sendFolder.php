<?php 
    $path = $_POST['path'];
    $fullscreen = $_POST['fullscreen'];
    $random = $_POST['random'];
    $time = $_POST['time'];
    exec('slideshow.sh' . $path . $time . $fullscreen . $random );
?>