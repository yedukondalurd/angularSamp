<?php
/**
 * Created by PhpStorm.
 * User: kondalu
 * Date: 10/21/14
 * Time: 8:24 PM
 */
$data = file_get_contents("php://input");
$objData = json_decode($data);
$user = array('username' => 'yedu', 'password' => 'yedu');
$username = $objData->username;
$pass = $objData->password;
if ($username == $user['username'] && $pass == $user['password']) {
    $arr = array('status' => 1, 'user' => $user['username'], 'role' => 'admin');
} else {
    $arr = array('status' => 0);
}
echo json_encode($arr);
exit;