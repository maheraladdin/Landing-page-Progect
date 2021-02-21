# Landing Page Project

## Table of Contents

### changes happens on HTML structure

adding one section to the HTML structure "line 60: 75"

### changes happens on javascript code

first, selecting the five sections and store them in a global constant "line 25"

#### part1 building the nav bar

next, declaring a new function to build the navigation bar dynamically "line 63" 
	step1.  looping over the five sections using forEach method 
(It's consider the best way to loop over an array if I don't need to use the break or continue statements)
	step2.  declaring a new function in the forEach method, which has one parameter
	step3.  selecting the <ul> element by id and store it into  block constant 
	step4. creating <li> element and store it into block variable
	step5. manipulating with the HTML structure inside the <ul>, which I have selected, to add <a> element with href attribute refer to a section id
	step6. display the element which I have create 

#### part2 scrolling effects

after that, I declare a new function to manipulate page structure while scrolling "line 77"
	step1. adding new element Listener to the window interface
	step2. I loop over all sections again and create a new function in it with one parameter, which holds every section's ID
	step3.  I store the document (x,y) while scrolling using the "scrollTop method" into a constant
	step4. I use the previous constant to make a condition statement that be True if the user show the section with two condition one for the section Top and the other for section bottom
		step4.1. I call a function that I made to remove the active class from all sections "line 39"
		step4.2. I call a function that I also made to add the active class for the section that the user views to manipulate the view 
        "line 47"

### part3 External functions (I made them that way to orgnize my code)

function remove the active class "line 39"
	I select all sections, then I remove the active class from them all

function add the active class "line 47"
	I select the section , which the user view by its ID , then add the active class to it
