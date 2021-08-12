<?php
$host = 'localhost';
$user = 'username';
$pass = 'password';
$database = 'database';
$conn = new mysqli($host, $user, $pass, $database);
//A pretty simple connect snippet. Don't forget to disconnect after your work!
$conn->close();