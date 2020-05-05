
let formContainer = document.getElementById('forms');
var signInButton = document.getElementById("signIn");
var signUpButton = document.getElementById('signUp');

formContainer = false;


function boolSwitch(){
    formContainer = !formContainer;
}
if(signInButton == null){
    console.log("aye")
}
// if(signInButton){

// function animate(a){
//     console.log("anime")
//     if(formContainer){
//         formContainer.classList.add("sign-up-active");
    
//     } else {
//         if(formContainer != null){
    
//             formContainer.classList.remove("sign-up-active");
//         }
//     }

// }
    console.log("apapapaap");
    signInButton.addEventListener("click", function() {
        formContainer = !formContainer;
        console.log("apapapaap");
        if(formContainer){
            formContainer.classList.add("sign-up-active");
        
        } else {
            if(formContainer != null){
        
                formContainer.classList.remove("sign-up-active");
            }
        }
    });

    
// }
// console.log("apapapaap");
if(signUpButton){
    console.log("apapapaap");
    signUpButton.addEventListener('click', ()=> {
        formContainer = !formContainer;
        console.log("apapapaap");
        if(formContainer){
            formContainer.classList.add("sign-up-active");
        
        } else {
            if(formContainer != null){
        
                formContainer.classList.remove("sign-up-active");
            }
        }
        
    })


}




