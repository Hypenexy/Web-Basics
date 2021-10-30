<?php 
include("../app/session.php");
if(!isset($_SESSION['user'])){
    header("Location: ../");
}

//header("Location: https://midelight.net")
//You have to include "Location: " before the link!