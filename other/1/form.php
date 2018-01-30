
 <?php
$data = json_decode(file_get_contents('php://input'), true);
$connect=mysqli_connect('localhost','root','root','management');
//echo implode(" ",$data);
 //echo $data["name"];
 //create a variable
 
 $MName=$data['SName'];
 $MSubject=$data['SSubject'];
 $MContact=$data['SContact'];
 $MSource=$data['SSource'];
 $MCall=$data['SCall'];


 
$sql = "INSERT INTO `form`(SName,SSubject,SContact,SSource,SCall)VALUES('$MName','$MSubject','$MContact','$MSource','$MCall')";

mysqli_query($connect,$sql);

echo $sql;
?>

