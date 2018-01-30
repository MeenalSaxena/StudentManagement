<?php


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "management";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$da= date("Y-m-d");
$data=[];
$sql = "SELECT * FROM `form` WHERE `SCall`='$da'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        $subject = $row['SSubject'];
		$name = $row['SName'];
         
          $contact = $row['SContact'];
           $source = $row['SSource'];
         $call = $row['SCall'];

        $data[count($data)]=$row;
        //     echo $name;
        //echo json_encode($row)
        //     echo $subject;
        //     echo $contact;
        //     echo $source;
        //  echo date("d.m.Y", strtotime($call));



        
    }
} else {
	//echo("email is wrong");
   
}
echo json_encode($data);

mysqli_close($conn);
?>