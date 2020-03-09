 <?php
 include_once 'db.php';

		$table = $_POST["table"];
		$column = $_POST["column"];
		$value = $_POST["value"];
        $query;
        if(isset($_POST["login"])) //to login user
        {
        	$username = $_POST["username"];
        	$password = $_POST["password"];
        	$query = "SELECT * FROM user WHERE username = '".$username."' and password ='".$password."'";
        }
        else
			$query = "SELECT * FROM ".$table." WHERE ".$column."='".$value."'";
			$result = $conn->query($query);

			if ($result->num_rows > 0) {
			    while($row = $result->fetch_assoc()) {
			    	echo json_encode($row);
			    }
			} else {
			    echo "0 results";
			}
		$conn->close();
?> 