<?php
$datatosend = (object) [];
$datatosend->version = "2.0.0";
$datatosend->name = "Hypenexy";

echo json_encode($datatosend);

//This will output the following:
//{"version":"2.0.0","name":"Hypenexy"}