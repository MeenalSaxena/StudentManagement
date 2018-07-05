<?php

$data = json_decode(file_get_contents('php://input'), true);
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
//$sql="select * from `form` where `SSubject`=`C`";
if(array_key_exists('SName',$data))
{
 $a=$data['SName'];
 $sql="select * from `form` where `SName` LIKE '%$a%'";
}
if(array_key_exists('SSubject',$data))
{
 $b=$data['SSubject'];
 $sql="select * from `form` where `SSubject`='$b'";
}
if(array_key_exists('SSource',$data))
{
 $c=$data['SSource'];
 $sql="select * from `form` where `SSource`='$c'";
}
if((array_key_exists('SName',$data))&&(array_key_exists('SSubject',$data)))
{
$a=$data['SName'];
$b=$data['SSubject'];
$sql="select * from `form` where `SName`='$a' AND  `SSubject`='$b'";

}
if((array_key_exists('SName',$data))&&(array_key_exists('SSource',$data)))
{
$a=$data['SName'];
$c=$data['SSource'];
$sql="select * from `form` where `SName`='$a' AND  `SSource`='$c'";
}
if((array_key_exists('SSource',$data))&&(array_key_exists('SSubject',$data)))
{
$b=$data['SSubject'];
$c=$data['SSource'];
$sql="select * from `form` where `SSubject`='$b' AND  `SSource`='$c'";
}
if((array_key_exists('SName',$data))&&(array_key_exists('SSubject',$data))&&(array_key_exists('SSource',$data)))
{
$a=$data['SName'];
$b=$data['SSubject'];
$c=$data['SSource'];
$sql="select * from `form` where `SName`='$a' AND  `SSubject`='$b' AND `SSource`='$c'";
}
  
$data=[];
 $result = mysqli_query($conn, $sql);

 if (mysqli_num_rows($result) > 0) {
     // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
 //     $SSubject = $data['SSubject'];
  //    $SName = $row['SName'];
    //  $contact = $row['SContact'];
      //$SSource = $row['SSource'];
//      $call = $row['SCall'];
       $data1[count($data)]=$row;
    //      echo $SName;
      // 
        //     echo $SSubject;
          //   echo $contact;
            // echo $SSource;
          //echo date("d.m.Y", strtotime($call));



        
    }
 } 
// echo json_encode($data);
//  else {
 	//echo("email is wrong");
   
 //}
echo json_encode($data1);

mysqli_close($conn);
?>