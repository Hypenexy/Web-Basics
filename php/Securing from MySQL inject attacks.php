<?php
$conn = new mysqli($host, $user, $pass, $database);

$indentity = $conn->real_escape_string($_POST['username']);