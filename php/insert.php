 <?php
 include_once 'db.php';
    
    // registration
    if($_POST["action"] == 'register')
	{
		if(isset($_POST["first_name"]))
		{
			$query = "
			INSERT INTO user 
			(first_name, last_name, username, password, travel_id) VALUES 
			('".$_POST["first_name"]."', '".$_POST["last_name"]."','".$_POST["username"]."','".$_POST["password"]."','".$_POST["travel_id"]."')
			";
			if ($conn->query($query) === TRUE) {
			    echo true;
			} else {
			    echo false;
			}
	    }
	}

    // Purchase Ticket
	if($_POST["action"] == 'purchase')
	{
		if(isset($_POST["travel_id"]))
		{
			$query = "
			INSERT INTO journey (from_place, to_place, total_seats, remaning_seats, seat_number, quantity, price, date_time, travel_id, transport) VALUES 
			('".$_POST["from_place"]."', '".$_POST["to_place"]."',".$_POST["total_seats"].",".$_POST["remaning_seats"].",'".$_POST["seat_number"]."',
			 ".$_POST["quantity"].", ".$_POST["price"].",'".$_POST["date_time"]."','".$_POST["travel_id"]."','".$_POST["transport"]."')
			";
			if ($conn->query($query) === TRUE) {
			    echo true;
			} else {
			    echo false;
			}
	    }
	}
        $conn->close();
?> 