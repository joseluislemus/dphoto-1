<?php

function getTree($path) {

    $dir  = scandir($path, 2);
    $items = array();

    foreach($dir as $v) {
        
        // Ignore the current directory and it's parent
        if($v == '.')
            continue;

        $item = array();

        // If FILE
        if(!is_dir($path.'/'.$v)) {
            /*if(basename($v).includes("jpg") || basename($v).includes("jpeg")){
                $fileName = basename($v);
                $file = array();
                $file['name'] = $fileName;
                $file['isDirectory'] = false;
                $file['isFile'] = true;
                $item = $file;
                 $items[] = $item;
            }*/
           
        } else {
        // If FOLDER, then go inside and repeat the loop

            $folder = array();
            $folder['name'] = basename($v);
            $folder['isDirectory'] = true;
            $folder['isFile'] = false;
           /* $contents = getTree($path.'/'.$v);
            $bad = array(".", "..", ".DS_Store", "_notes", "Thumbs.db");
            $childs = array_diff($contents, $bad);
            $folder['children'] = $childs;*/

            $item = $folder;
            $items[] = $item;
        }
    }

    return $items;
}

$rootpath = 'c:/';
$path = $_POST['path'];

$tree['name'] = $path;
$tree['children'] =   getTree($rootpath.'/'.$path.'/');

$json = json_encode($tree, JSON_PRETTY_PRINT);

echo $json;


?>