function generateIdeas() {
	
	if (document.querySelectorAll('input[name="role"]:checked').length == 0) {
		alert("You have to select a role!");
		return false;
	}
	
	var fullList = ["Write a response to the last article you read.","Review the last book you read.","Review the last movie you watched.","Write about a way you added value in an earlier job you had.","What is your worst character trait and how are you working to improve it?","What was your first job and what did you learn?","What is an unpopular opinion you hold and what are 3 reasons why you hold that opinion?","Give a status update on your current PDP.","Write a visitor's guide to your favorite vacation spot.","Rewrite an earlier blog post and cut the length by 30%.","What tools do you use to use consistently to do your job?","What is one thing you do better than most people you know? Write about it.","Break down step-by-step your experience as a customer of a product/service","One feature you wish an app/product you use had","Three unforseen effects of X technology become widespread (driverless cars, cloning, teleportation, whatever!)","Opt-in to a product/service and document how you experience their sales funnel (emails, retargeting on social, etc.)","Pick a piece of phsyical junk mail or spam email and list the pros/cons of the design, copy, approach, and conjecture who they're going after and their strategy","Break-down what you imagine the costs/revenues are in a local coffee shop, describe odds that they have a profitable model","How do people afford their lives? (estimate costs/debt/compensation based on houses/cars you see in your neighborhood...are most people living below/above their means?)","The best $100 you ever spent","The best $1 you ever spent","The most expensive 'free' thing you ever got","The difference between 'efficient' and 'effective'","Self-knowledge vs. self-honesty","The smallest activity you've done with the biggest result","List of activities you hope to never do/do again ('don't do stuff you hate' list)","Your most conventional opinions","The book that made the biggest impact on you and why","A book you tried to read but couldn't understand","Three skills in demand today that will dissappear in the near future and why","What are your non-negotiable core values?","Five things that make a city enjoyable to visit/live in","What is the last difficult tech problem you had? Write a post about what the solution was so that you can find it again in the future.","What is a difficult tech task you do on a regular basis? Write a tutorial to help others.","What advice would you give to your younger self?","What is a belief you've changed in the last year?","Write a review of an app on your phone you couldn't live without","Choose an emotion & write something that evokes that emotion","Day in the life/how you manage your schedule","Budgeting/personal finance tips for someone getting a paycheck for the first time","What's a mistake you made in the past that has been a beneficial lesson in the future?","Share a non-work related hobby you have. How does it translate to your work?","Write a review of a conference you attended","Write a product review of your latest big purchase (phone, laptop, etc)","Advice for mitigating conflict with coworkers","Why are you pursuing $X? ","10 Myths About $X","15 $X Blogs To Follow","8 $X podcasts you should listen to","Explain $X to a five year old","Common $X problems you'll face as a beginner – and how to conquor them","One Book on $X Everyone Needs to Read","Why you shouldn't go into $X","3 New $X Tools I'm Using","Advice About $X You Should Ignore","$X For Complete Beginners","Document your learning - Post your takeaways from resources you are using to learn $X","Your best experience with a $X professional","Your worst experience with a $X profesional","3 Reasons to be afraid of $X (and 3 not to)","Movie/TV characters who would make a great $X and why","If Star Wars/Harry Potter were written by an $X professional...","Why Learning $X will make you a better person/entrepreneur/artist/friend/etc...","Unlikely places to find people who are great at $X","Everything is $X, here's what I mean...","How $X connects to the vision of a company","Three personality traits that help with $X","7 Things About $X Your Boss Wants To Know","10 Quick Tips About $X","The Ultimate Cheat Sheet On $X","14 Common Misconceptions About $X ","How To Solve The Biggest Problems With $X","Why I Love $X (And You Should, Too!)","Think You're Cut Out For Doing $X? Answer these 5 questions. ","The Worst Advice I've Ever Heard About $X","5 Tools Everyone In The $X Industry Should Be Using","What experience do you have in $X so far?","If you were interviewing for a role in $X today, what past professional or personal experience would you reference?","Draw a sketch to illustrate a concept in $X","What $X has taught you about life","What [TV Show/Movie] gets right about $X","Interview someone in a $X role","How your skills/personality make you a fit for a $X role","Who is your role model in $X and why"],
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