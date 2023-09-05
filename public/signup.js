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
document.getElementById('loginSubmit').addEventListener('click',function(){
    let loginName = document.getElementById('loginName').value;
    let loginPassword = document.getElementById('loginPassword').value;
    const form = document.getElementById('loginForm');
    let sendData 
    let response 
    const mainfunc = async ()=>{
        sendData ={
            name: loginName,
            password: loginPassword
        }
        console.log(sendData)
        response = await loginFromMain(sendData)

        

        if(response.msg)
        {
            form.action = '/loginAfterCheck'; 
            form.method = 'get'; 
            form.submit(); 
        }
        else
        {
            alert('Password wrong')
        }
    }
   
    mainfunc()
})




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

