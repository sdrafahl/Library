window.onload = function() {
	var user = document.getElementById("input").value;
	var pass = document.getElementById("password").value;
	var button = document.getElementById("submit");

	button.onclick = function() {
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "getbooks.php",
			data: JSON.stringify ({ 
				user: user,
				password: pass
			}),
		});
	}


}
