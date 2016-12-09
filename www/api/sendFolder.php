<?php 
    $path = $_POST['path'];
    $fullscreen = $_POST['fullscreen'];
    $random = $_POST['random'];
    echo(exec('slideshow.sh ' . $path . $fullscreen . $random ));
?>