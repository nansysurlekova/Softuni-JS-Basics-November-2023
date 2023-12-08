function passwordGuess (input){
  
    let password = input[2];
    let  correctPass= "s3cretp@ssword";
     
     if (password !== correctPass){
       console.log("Wrong password!");
     } else {
       console.log("Welcome");
     }
     
   }

passwordGuess(["qwerty", "secretp@ssword", "s3cretp@ssword"]);