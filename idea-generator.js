function generateIdeas() {
	
	if (document.querySelectorAll('input[name="role"]:checked').length == 0) {
		alert("You have to select a role!");
		return false;
	}
	
	var fullList = ["Write a response to the last article you read.","Review the last book you read.","Review the last movie you watched.","Write about a way you added value in an earlier job you had.","What is your worst character trait and how are you working to improve it?","What was your first job and what did you learn?","What is an unpopular opinion you hold and what are 3 reasons why you hold that opinion?","Give a status update on your current PDP.","Write a visitor's guide to your favorite vacation spot.","Rewrite an earlier blog post and cut the length by 30%.","What tools do you use to use consistently to do your job?","What is one thing you do better than most people you know? Write about it.","Why are you pursuing $X? ","10 Myths About $X","15 $X Blogs To Follow","8 $X podcasts you should listen to","Explain $X to a five year old","Common $X problems you'll face as a beginner – and how to conquor them","One Book on $X Everyone Needs to Read","Why you shouldn't go into $X","3 New $X Tools I'm Using","Advice About $X You Should Ignore","$X For Complete Beginners"],
	randomList = [],
	i = 5,
	j = 0;
    // Select 5 unique items from the array and make a new array
    while (i--) {
		j = Math.floor(Math.random() * fullList.length);
		randomList.push(fullList[j]);
		// Remove used items from the array to prevent duplicates
		fullList.splice(j,1);
	}		  
	
	var role = document.querySelector('input[name="role"]:checked').value;
	
	// Iterate to replace variables and append to the list	
	for (var k = 0; k < randomList.length; k++) {
		idea = randomList[k].replace("$X", role);
		document.getElementById(k+1).innerHTML = idea;
	}
	// Hide the form
	document.getElementById("input-area").style.display = 'none';	
	// Show the list
	document.getElementById("holder").style.display = 'block';

}	

document.getElementById("generate").addEventListener("click", generateIdeas);