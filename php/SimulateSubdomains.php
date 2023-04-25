<?php
// Simulate subdomains
// This is very stupid how will client download assets??
// USE RewriteEngine INSTEAD OF THIS!!!
// RewriteEngine On
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule ^([^\.]+)$ index.php?page=$1 [NC,L]
// Read comment below it's important for subdomains.

$subdomains = [ // Not this comment, but there can be created an array with keys and values more natively.
    ["writenote","WriteNoteApp"], // I don't think subdomains can be uppercase. But folders can.
    ["test", "test"],
];

function matchSubdomain($domain){
    $arr = [];
    global $subdomains;
    foreach ($subdomains as $key) {
        $arr[] = $key[0];
    }
    $domain = explode('.', $domain)[0]; // Just realized! Subdomains can have their own subdomains! This code only supports 1 subdomain, the first inputted.
    $i = array_search($domain, $arr);
    if(!empty($i)){
        $myfile = fopen("".$subdomains[$i][1]."/index.php", "r") or die("Unable to open subdomain reference!");
        echo fread($myfile,filesize("".$subdomains[$i][1]."/index.php"));
        fclose($myfile);
    }
}

matchSubdomain($_SERVER["SERVER_NAME"]);

//Debug info
foreach ($_SERVER as $key => $value) {
    echo "$key:<br>$value<br><br>";
}