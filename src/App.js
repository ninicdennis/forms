import React, {useState} from 'react';
import './App.css';

function App() {

  var [userMade] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = event.target
    if(userData.password.value !== userData.confirmpass.value) {
      console.log("Please enter the same password")
    }
    else{
      console.log('Signed up!')
      const userCreated = {
        username : userData.uservar.value,
        firstName : userData.firstname.value,
        lastName : userData.lastname.value,
        email : userData.email.value,
        phone : userData.phone.value,
        age : userData.age.value,
        password : userData.password.value
    }
    console.log(userCreated)
    return userMade = userCreated
    
  }
}

const logMeIn = (event) => {
  event.preventDefault()
  if(event.target.userLog.value !== userMade.username || event.target.passLog.value !== userMade.password){
    console.log('wrong password! ')
  }
  else{
    console.log('Yay you did it')
  }

}

const resetPass = (event) => {
  event.preventDefault()
  if(event.target.resetusername !== userMade.username || event.target.resetemail !== userMade.email) {
    console.log('user does not exist.')
  }
  else {
    userMade.password = event.target.resetpass.value
  }
  
}

  return (
    <div className = 'box'>
      Sign Up:
      <form onSubmit = {e => handleSubmit(e)}>
        Username: <input type= 'text' name = 'uservar' required />
        First Name: <input type='text' name = 'firstname' required/>
        Last Name: <input type='text' name = 'lastname' required/>
        Email:<input type= 'text' name = 'email'required/>
        Phone:<input type= 'text' name = 'phone'required/>
        Age:<input type= 'text' name = 'age'required/>
        Password:<input type= 'text' name = 'password'required/>
        Confirm Password: <input type= 'text' name = 'confirmpass'required/>
        <button>Submit! </button>
      </form>
      <div>
        Log in:
        <form onSubmit = {e => logMeIn(e)}>
          Username: <input type = 'text' name = 'userLog' required/>
          Password: <input type = 'text' name = 'passLog' required />
          <button>Sign in!</button>
        </form>
        Forgot Password? Please enter these values to reset.
        <form onSubmit = {e => {resetPass(e)}}>
          Username: <input type = 'text' name = 'resetusername' required />
          Email: <input type = 'text' name = 'resetemail' required />
          New Password: <input type = 'text' name = 'resetpass' required />
          <button>Submit Reset</button>
          
        </form>
      </div>
      
    </div>
  );
}

export default App;

