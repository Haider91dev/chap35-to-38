 // Q1 Write a function that displays current date & time in your
// browser.


//  function date(){
//       var date = new Date().getDate()
//       var hour = new Date().getHours()
//       var mint = new Date().getMinutes()


//        console.log("today date is "+date + "  current time is "+ hour +":"+mint)
//  }
  
//  date()

 //Q2 Write a function that takes first & last name and then it
// greets the user using his full name.

//   function fullName(){
//       var firstName = prompt(" Enter your first name")
//       var lastName = prompt(" Enter your last name")

//       var full =firstName+lastName;
//       alert("Welcome to you on my website "+full)
//       console.log("Welcome to you on my website "+full)
//   }
//   fullName() 


// Q3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(){
//       var num1 =+prompt("Enter first number")
//       var num2 =+prompt("Enter second number")
//       var sum = num1+num2
//      return console.log("the sum of two number are  " + sum)

// }
//  sum()

//Q 4 make calculator which perform normal operation

//  function calculator(num1,num2,operation) {

//       var num1 =+prompt("Enter first  number? ");
//       var num2 =+prompt("Enter second  number? ");
//       var operation =prompt("Enter operation  number? ");

//       if (operation ==="+") {
//             return num1+num2;
           
//       }

//       if(operation ==="-"){
//             return num1-num2;
//       }
//       if(operation ==="*"){
//             return num1*num2;
//       }
//       if(operation ==="/"){
//             return num1/num2;
//       }
//       if(operation ==="%"){
//             return num1%num2;
//       }     
//  }

//  console.log( calculator())

// Q5 write a function that squares its argument.

//   function squares() 
//   {
//     var a =+prompt("enter the number")
//     return a*a;

//   }

//    console.log(squares())

 // Q6 write a function that computes factorial number.

//    function factorial() {

//     var b =+prompt("enter the number")

      
//    }

 // Q7 write a function that take start and end number as inputs and display counting in your browser
  
//   function counting(){

//         var start =+prompt("enter the starting number");
//         var end = +prompt("end number of counting ")
//         for(var i =start;i<=end;i++){
//              console.log(i)
       
//         }

//   }
   
//   console.log(counting());

 // Q8
  
//   function hypotenuse(){

//         var per =prompt("enter the value of perpendicular?")
//         var base =prompt("enter the value of base?")
//         var hypotenus =base*base+per*per;
//         var s = Math.SQRT(hypotenus) // in this line something is wrong ??
//         return s;
//   }

//   console.log(hypotenuse())

      // Q9             3, 5
      // function area(width,height){
      //       var height =+prompt("enter the height value ")
      //       var width =+prompt("enter the width value ")
      //       a =width*height;
      //       return a;
      // }

      // console.log(area(3,5));
      // if i pass 3 and 5 area is not finding ; it is consider only prompt value

      //Q 10 palindrome = madam

      // function palindrome(){ // its take my 35 mint to solve this problem
      //       var str =prompt("enter something?")
            
            
      //       var em="";
      //       for(var i =str.length-1;  i>=0    ;    i--)
      //       { 
      //             em =em+str[i]
      //       }

      //       if (em ===str) {
      //             console.log("your given word is palindrome"+str)
                  
      //       }
      //       else{
      //             console.log("not a palindrome word")
      //       }
      // }

      // console.log(palindrome())

      //Q11 function which convert first letter of a string to upper case

      // function titleCase(){
      //       var str =prompt(" give me sentense to do operation")
      //       var splitStr =str.toLowerCase().split(' ');
      //       console.log("clg belove split method "+splitStr)
            
      //       for(var i =0;i<splitStr.length;i++){
                  
      //               splitStr[i]= splitStr[i].charAt(0).toUpperCase()
      //               +splitStr[i].substring(1)
      //                  console.log("clg in the loop function   "+splitStr)
                        
                  
      //             str =splitStr.join(' ')
      //       }
      //       return str;
      // }

      // console.log(titleCase())

      // Q my question  
      // function to geneate 4 digit OTP

      // function otpGen(){
      //       var num = "0123456789"
      //       var otp = ''
      //       for(var i =0;i<4 ;i++)
      //       {
      //             otp = otp+num[Math.floor(Math.random()*10)]
      //       }
      //       return otp;
      // }
  
      // for(var i =0 ;i<10;i++){

      //       console.log(otpGen())
      // }


      // otp of alphanumeric

      // function alphanumeric(){
      //       var alphaNu ="0123456789abcdefghijklmnopqrstuvwxyz"
      //       var otp =''
      //       for(var i=0;i<5;i++)
      //       {
      //             otp =otp+alphaNu[Math.floor(Math.random()*15)]
      //       }
      //       return otp
      // }

      //  console.log(alphanumeric())

      //Q find out vowels in the given string

      // function vowelSearch (){
      //       var str ="helo ji kese ho aap sab ji "
      //       console.log(str.split(""))
      //       var vowel ="aAEeIiOoUu"
      //       vowelCount =0;

      //       for(var i =0;i<str.length;i++)
      //       {
      //         if(str[i] =="o"||str[i]=='O'||str[i]=='a'||str[i] =="A"||str[i]=='i'||str[i]=='I'||str[i] =="e"||str[i]=='E'||str[i]=='u'||str[i]=='U')
      //             {
      //                   vowelCount++
      //             }

                  
      //       }
      //       return vowelCount;
      // }

      //  console.log("vowel in the given string is  "+vowelSearch())

      

  