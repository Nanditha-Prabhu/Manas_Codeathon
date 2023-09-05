


// modal is the element that pops up from the page
// for sign up form
function showModal() {
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.form-content').classList.add('show-form-content');
}
function closeModal() {
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.form-content').classList.remove('show-form-content');
}
var btnSignUp = document.querySelector('#btn-signup');
btnSignUp.addEventListener("click", showModal);
var closeBtn = document.querySelector('#span-signup');
closeBtn.addEventListener('click', closeModal);

// for login form
function showModal2() {
    // first show overlay
    document.querySelector('.overlay2').classList.add('show-overlay');
    // then content
    document.querySelector('.form-content2').classList.add('show-form-content');
}
function closeModal2() {
    // first show overlay
    document.querySelector('.overlay2').classList.remove('show-overlay');
    // then content
    document.querySelector('.form-content2').classList.remove('show-form-content');
}
var btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", showModal2);
var closeBtn = document.querySelector('#span-login');
closeBtn.addEventListener('click', closeModal2);




/* */


const loginFromMain = async (sendData) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(sendData),
    }
    let p = await fetch('/checkLoginInfo', options)
    let response = await p.json()
    return response
}
document.getElementById('loginSubmit').addEventListener('click',function(e){
    e.preventDefault()
    let loginName = document.getElementById('loginName').value;
    let loginPassword = document.getElementById('loginPassword').value;
    const form = document.getElementById('loginForm');
    // let sendName = document.getElementById('sendName')
    let sendData 
    let response 
    const mainfunc = async ()=>{
        sendData ={
            name: loginName,
            password: loginPassword
        }
        
        response = await loginFromMain(sendData)

        console.log(response)

        if(response.found)
        {
            if(response.passwordCorrect)
            {

                form.action = '/loginAfterCheck'; 
                form.method = 'post'; 
                form.submit(); 
            }
            else
            {
                alert('Password Incorrect')
            }
           
        }
        else
        {
            alert('Account Does Not Exist, Sign Up First')
        }
    }
   
    mainfunc()
})


const signUpFromMain = async (sendData) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(sendData),
    }
    console.log(sendData)
    let p = await fetch('/checkSignUpInfo', options)
    let response = await p.json()
    return response
}

document.getElementById('signUpSubmit').addEventListener('click',function(e){
    e.preventDefault();
    console.log("hi")
    let signUpName=document.getElementById('signUpName').value
   
    let signUpPassword = document.getElementById('signUpPassword').value;
    let signUpcpassword = document.getElementById('signUpcpassword').value;
    
    let sendData 
    let response 
    console.log(signUpPassword)
    console.log(signUpcpassword)
    if(signUpPassword== signUpcpassword)
    {
 
        const mainfunc = async ()=>{
            sendData ={
                name: signUpName,
                password: signUpPassword
            }
            console.log(sendData)
            response = await signUpFromMain(sendData)
    
            
    
            if(response.msg)
            {
                
                alert('User Name exists')
            }
            else
            {
                alert("Account created. Go to Login Page")
                
            }
        }
       
        mainfunc() 
        
    }
    else
    {
        alert('Password and Confirm password do not match')
    }
      
    

        
})