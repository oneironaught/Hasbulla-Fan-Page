// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the hasbullaFacts)
	var number = Math.floor((Math.random() * hasbullaFacts.length));
	// We display the fact from the booFacts that is in the random position we just generated.
	$("#factText").text(hasbullaFacts[number])
})

//this array holds Hasbulla Facts
var hasbullaFacts = ["In May 2021, his popularity exploded after his pre-fight press conference with popular 17-year-old Tajikistan singer Abdu Rozik", "Hasbulla stands 3 feet and 3 inches tall", "Hasbulla has Growth Hormone Deficiency (GHD), also known as dwarfism. This genetic condition stunts growth and is the reason for Hasbulla's childlike features and high-pitched voice.",]
