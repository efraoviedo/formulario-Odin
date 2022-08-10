
  const password = document.querySelector('#password').value
  const  confirmPassword = document.querySelector('#confirmPassword').value;

  const button = document.querySelector('.button').onclick = function(){


      if(password == ""){
        alert("Field cannot be empty.");
      }
      else if(password != confirmPassword){
        alert("Password did not match try again.");
        return false
      }
      else if(password == confirmPassword){
        alert("Password match.");
      }
      return true
}