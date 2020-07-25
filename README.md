# homework3

<p> For this project we were given 2 starter files, index.html and style.css. Our task at hand was to create a random password generator that when done asking for user's password requirements prints out a random password "n" number of times. 

This was achieved by working in the script.js file. 
-> Firstly I created variables to store password categories. 
-> Then I would prompt the user with a message about how many characters do they want in their password? * 

-> Stored prompts and confirms from the user into variables. 

-> A function was already provided to us. 

-> I modified the function so that it would take arguments such as the length of the password, lowercase, uppercase, numbers, special chars as arguments. 

-> Within that function I created two empty arrays. 
-> 1 array was to be populated with all the characters that user wanted to use as their password's criteria. 
-> 2nd array was to be populated with the random characters obtained from the 1st array. 

-> 1st we check if the user entered a valid input for the length of the password. This is done by if statements. If not a valid input the user will be asked to re-enter the password with a hint of a valid input. 

-> Then we check that the user selects at least 1 criteria for their password. If the user selects "no" for all the options they will be re prompted to select their criteria again with a helpful hint. 

-> Also we need to check if the user entered a password that's at least 8 characters long and not longer than 128 characters. 

-> After all the basic requirements are met the real fun begins. 

-> If the user agrees for lower case characters, we push each character from their corresponding variable into the 1st empty array and skip the process if the user doesn't want a lower case character.

-> We repeat the same process for 3 more types of characters until the 1st array is filled with at least 1 set of characters. 

-> After the array is filled with at least 1 set of characters we randomly select characters from that array and pass it to the resulting array using a for loop and Math.random. 

-> In the end we call the function with right arguments called in the right sequence and wait for the magic to happen. </p>


