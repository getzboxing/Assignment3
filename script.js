
//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
/*
 var movies = ["Apocalypse Now", "Raging Bull", "Rashemon", "Dersu Uzala", "Unforgiven"];

    console.log(movies[1]);    
*/
//2.    Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array
/*
var movies=[];
            movies[0]="Unforgiven";
            movies[1]="Dersu Uzala";
            movies[2]="Rashemon";
            movies[3]="Raging Bull";
            movies[4]="Apocalypse Now";
console.log(movies[0]);
*/
//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
/*
            movies.splice(2, 0,"Rocky");
    console.log(movies.length);
*/   

//4.	Declare an array called movies.  Now, use the delete operator to remove the first movie in the array. 
/*
var movies=[];
            movies[0]="Unforgiven";
            movies[1]="Dersu Uzala";
            movies[2]="Rashemon";
            movies[3]="Raging Bull";
            movies[4]="Apocalypse Now";
                delete movies[0];

            console.log(movies);
*/
//5.	Declare an array 7 movies. Now, use a for loop to iterate through the array and display each movie within the console window.
/*
var movies=[];
        movies[0]="Chariots of Fire";
        movies[1]="Gallipoli";
        movies[2]="God Father";
        movies[3]="Blade Runner";
        movies[4]="Ran";
        movies[5]="Pulp Fiction";
        movies[6]="Good Will Hunting";
    for(var i=0;i<movies.length;i++)
        {console.log(movies[i]);}
*/
        
 //6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
/*
  var movies=[];
        movies[0]="Chariots of Fire";
        movies[1]="Gallipoli";
        movies[2]="God Father";
        movies[3]="Blade Runner";
        movies[4]="Ran";
        movies[5]="Pulp Fiction";
        movies[6]="Good Will Hunting"; 
  for(var i=0 in movies){console.log(movies[i]);}
*/

//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
/*
    var movies=[];
        movies[0]="Chariots of Fire\n";
        movies[1]="Gallipoli\n";
        movies[2]="God Father\n";
        movies[3]="Blade Runner\n";
        movies[4]="Ran\n";
        movies[5]="Pulp Fiction\n";
        movies[6]="Good Will Hunting\n"; 
    movies.sort();
        for(var i=0 in movies){console.log(movies[i]);}
*/

//8.	Under previous array, create a new array leastFavMovies. Populate array with 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
/*
var movies=[];
        movies[0]="\nChariots of Fire";
        movies[1]="\nGallipoli";
        movies[2]="\nGod Father";
        movies[3]="\nBlade Runner";
        movies[4]="\nRan";
        movies[5]="\nPulp Fiction";
        movies[6]="\nGood Will Hunting"; 
  //for(var i=0 in movies){console.log(movies[i]);}
    var leastFavMovies=["\nThe Blair Witch Project", "\nWater World", "\nX-Files"];
            console.log("Movies I like:\n\n" +movies.toString());
            console.log("Movies I regret watching:\n\n" +leastFavMovies.toString());
*/

//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
/*
        var allMovies = movies.concat(leastFavMovies);
            allMovies=allMovies.sort();
            allMovies=allMovies.reverse();
        console.log(allMovies);
*/

//10.	Return just the last item in the array and display it within the console window.
/*
console.log("10. " +allMovies[allMovies.length-1]);
 */

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
/*    
        allMovies.reverse();
        console.log("11. " +allMovies[0].toString());
*/

//12.	Retrieve movies in array you do not like, return indices. Use indices, to add movies you do like. 
/*
       var favs;
        for(var i=0; i<leastFavMovies.length; i++){
           leastFavMovies[i] = prompt("Change nomination for least favorite movie."); 
            }
                console.log(leastFavMovies.toString());
*/

//13.	Two assoc arrays called employee1 and employee2. Each array have an employ id, name, title, department, and , is a current employee of the company. Add both of those assoc arrays to a new array employees. Then, display the name of second employee in console window. 
/*  
var employee1 = {
    "empId": "7564",
    "name": "Zak Ruvalcaba",
    "title": "Web Developer",
    "department": "Enginering",
    "active": true
};
var employee2 = {
    "empId": "3457",
    "name": "Rene Descartes",
    "title": "Instructor",
    "department": "Mathematics",
    "active": false
};
var employees=[];
employees.push(employee1);
employees.push(employee2);

console.log(employee2.name);
*/ 

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
/*
for(var i=0;i<employees.length;i++)
        {console.log(employees[i].name);}

*/
//15.	Add a third employee and set employment status false. Then, loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
 /*  
    var employee3 = {
    "empId": "2391",
    "name": "Mariah Carey",
    "title": "Performerr",
    "department": "Music",
    "active": true
    };
        
        employees.push(employee3);
    console.log(employees.["name"]);
       
for(var i=0;i<employees.length;i++)
            {
                if (employees["active"] == true) 
                
                console.log(employees[i])
            }
*/
        
//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5.  
/*
var movies = [["Donnie Darko", 1], ["Dazed and Confused", 4], ["The Warriors", 5], ["Office Space", 3], ["Harold and Maude", 2]];

var moVstr = movies.filter(function(item) { return typeof item === "string"; });
for (var i in moVstr){ 
console.log(moVstr[i]+"\n");}

//var x;
    //for(var x in moVstr){console.log(moVstr[x]+"\n");}
*/

//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
//Practice with Functions (5 points)
//1.	Create anonymous function displayMessage accepts one parameter. Write a statement that prints out the value of parameter to the console window. Call function and pass a string as the parameter in the function call.
 /*   
        function displayMessage(mesg){
        var rcvd=mesg;
        console.log("message= "+rcvd);
        }
             displayMessage("1.618");
*/
//2.	Create named function calculate that accepts two parameters. With function write statement that returns modulus of first, second parameters. Call the function and pass two parameters into function call. Display result within console window.
/*    
        function calculateModulus(input1, input2){
        num1=input1;
        num2=input2;
            result=num1%num2;
        console.log("modulus number= "+result);
        }
            calculateModulus(24,5);
        

*/          
//3.	Create str  array employees,populate array with employee names. Create anonymous function showEmployee. Function accepts parameter. Call function, pass employees array into function as parameter. Display result in window. In function, loop array and display result so it looks like this in console window:

/*
  var employees = ["Charlie", "Edward", "Ronald", "Gertrude", "May"];
  var text = ("Employees: \n");          
                
    console.log(text);
   function showEmployee(param) {
        for (var index in param) 
       {console.log(param[index]);}
    }
    showEmployee(employees);
    */ 


//        ROCK, PAPER, SCISSORS
//1.	User makes choice. How collect user’s choice?
 /*
    function plyrChc() {
        var choice=prompt("To play enter: scissors, paper, rock");
        choice.toLowerCase();
        console.log(choice);
            }
        gamePlay(plyrChc(), cmptrPck());     

//2.	Computer choice. How collect computer choice?
    function cmptrPck() {
        var x = Math.floor(Math.random() *10);
        if (x<3){return "scissors";}
            else if (x<6){return "paper";}
                else if(x<=9){return "rock";}
         }

//console.log(cmptrPck());
//3.	A conditional that determines who wins.    
    function gamePlay(arg1,arg2){
         
        if (arg1 === arg2) {return alert("It was a tie! Hit refresh to play again");}
            else
        if (arg1 == "scissors" && arg2=="paper"){return alert("You win! Computer chose "+arg2);}
            else
        if (arg1 == "scissors" && arg2=="rock"){return alert("You lose! Computer chose "+arg2);}
            else
        if (arg1 == "paper" && arg2=="scissors") {return alert("You loose! Computer chose "+arg2);}
            else
        if (arg1 == "paper" && arg2=="rock") {return alert("You win! Computer chose "+arg2);}
            else
        if (arg1 == "rock" && arg2=="scissors") {return alert("You win! Computer chose "+arg2);}
            else
        if (arg1 == "rock" && arg2=="paper")
        {return alert("You loose! Computer chose "+arg2);}
        
    }
*/
 //gamePlay(plyrChc(), cmptrPck());
 
//5.	What if the result ends in a tie? Figure out how to handle that as well.
//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
//                  BASIC CALCULATOR
/*
//1.	Prompt the user for a number and store that in a variable.
        var num1=prompt("enter num one: ");
            num1=Number(num1);
//2.	Prompt the user for a second number and store that in a variable.
        var num2=prompt("enter num two: ");
            num2=Number(num2);
//3.	Prompt user for operation to perform (add, subtract, multiply, divide) and store in variable.
        var oprnd=prompt("select operand");

//4.	Create a new named function called calculate() that accepts 3 parameters.
        function calculate(arg1,arg2,arg3){
            switch(arg3) {
    case "+":
        var sum = arg1 + arg2;
        alert("sum = "+sum);
        break;
    case "-":
        var sum = arg1 - arg2;
        alert("sum = "+sum);
        break;
    case "*":
        var sum = arg1 * arg2;
            alert("sum = "+sum);
        break;
    case "/":
        var sum = arg1 / arg2;
            alert("sum = "+sum);
        break;
    default:
        
        }
        }
        calculate(num1, num2, oprnd);
        //var sum = Number(num1)+oprnd+ Number(num2);
          //  alert("Sum is " +sum);
       
//calculate(num1,num2,oprnd);
//5.	Call the calculate function and pass in the 3 variables as parameters
*/ 

//      DEATH BY JAVASCRIPT

//1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
/*
var s = "overpopulation";
var res = [];
 for (index in s){
 res[res.length]= s.charAt(index);
     console.log(res.sort());
 }
alert(res);
*/

//2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.

// for each new iteration of a word, the first letter will be Capitalized
 /*
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log("The original string is: " + stringToSplit );
    console.log(arrayOfStrings);
    for (var index in arrayOfStrings) {	
        console.log(arrayOfStrings[index]);
        arrayOfStrings.match(/\w/g).toUpperCase();
           console.log(arrayOfStrings.match(/\w/g));                            
       return arrayOfStrings;
                       }
    console.log(lastTry());
}

var quote = "\"You have to be odd to be number one\" -Dr.Suess ";
var space = ' ';
splitString(quote, space);

    function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
 
    for(var index in 
*/
/*   BEST ANSWER FOR NUMBER TWO
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
alert(uppercase("\"You have to be odd to be number one\" -Dr.Suess"));
 */

    
  // 3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number. 
 /*   
    function myFunction() {
    var str = "\"You have to be odd to be number one\" -Dr.Suess";
    var patt1 = /[aeiou]/g; 
    var result = str.match(patt1);
    console.log(result);
        var num = result.length;
        console.log("There are " +num +" values of vowels in array");
}
myFunction();
  */ 
//4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
/*
function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
        console.log(randomstring);
    }
}
randomString();
*/

//5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
/*
function longest_str(str)
{
  var arr = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < arr[x].length)
    {
    result = arr[x];
    } 
  }
  return result;
}
alert(longest_str("Germany, Azerbaijan, Checkloslovakia, Czech Republic, Puerto Rico"));
*/