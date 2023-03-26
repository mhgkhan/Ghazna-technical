export function homePageContent() {
    let content = document.querySelector(".content");
    let intro = document.querySelector(".intro");
    window.addEventListener("load", e => {
        intro.innerHTML = " ";
        fetch("./assets/content/intro.txt", { method: "get" }).then(response => response.text()).then(data => {
            intro.innerHTML = data
        })
        content.innerHTML = " ";
        fetch("./assets/content/services.txt", { method: "get" }).then(response => response.text()).then(data => {
            content.innerHTML = data
        })
    })
}






/*****************************************************
 * ****** TEXT ANIMATOR USING TYPED.JS ***************
 *****************************************************/
// 1)  FOR HOME PAGE 2ND HEADING 
export function subHeadGt() {
    let textAnimation = new Typed("#sec-head", {
        strings: ["Welcome To Ghazna-Technical", " Welcome to Ghazna-Portfolio", "Get Info New Vencies", "Get Projects with source-code", "Welcome to Ghazna-Website", "Congrats!:- Your are a visitor of this website"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
        startDelay: 1000,
        backDelay: 1000,
        showCursor: false,
        shuffle: true,
    });
}






// sidebar functionality 
export function allSidebar() {
    let sidebarBtn = document.querySelector(".sidebarBtn"),
        sidebar = document.querySelector(".sidebar"),
        closeSidebar = document.getElementById("close-sidebar");
    let clicked = true;
    sidebarBtn.addEventListener("click", e => {
        if (clicked) {
            // document.getElementById("sidebarIcn").classList.remove("fa-align-right");
            sidebar.setAttribute("style", "transform:translateX(0px)")
            // document.getElementById("sidebarIcn").classList.add("fa-close");
            clicked = false;
        }
        else {
            sidebar.setAttribute("style", "transform:translateX(280px)")
            clicked = true;
        }
    })
    closeSidebar.addEventListener("click", e => {
        clicked = true;
        sidebar.setAttribute("style", "transfrom:translateX(280px);")
    })
    sidebar.addEventListener("mouseenter", () => {
        clicked = false;
        sidebar.setAttribute("style", "transform:translateX(0px);");
    })
    sidebar.addEventListener("mouseleave", () => {
        clicked = true;
        sidebar.setAttribute("style", "transformL:translateX(280px);");
    })
}





















/**********************************************************************************************
 * ***********  SIGNUP AND SIGNIN PAGE (GET YOUR DASHBOARD) PAGE SCRIPTING ********************
 **********************************************************************************************/

// 1)
// preview image after upload in singup form 
export function imagePreviewSignup() {
    let userImgBlock = document.querySelector(".user-img"),
        prevImg = document.getElementById("prev-img"),
        userImgInput = document.getElementById("user-img-input");
    userImgBlock.addEventListener("click", () => {
        prevImg.src = "... "
        userImgInput.click();
    })
    userImgInput.addEventListener("change", e => {
        if (e.target.files.length < 0) {
            return
        }
        else {
            let fakeUrl = URL.createObjectURL(e.target.files[0])
            prevImg.src = fakeUrl
            prevImg.alt = "User Image "
        }
    })

}




// 2)
// form changer when i click on the link (already have an account / Not have an acount)
export function formChanger() {
    let forms = document.querySelector(".forms");
    let changeForm = document.querySelector(".changeForm");
    let signinForm = document.querySelector(".signin-form");
    let signupForm = document.querySelector(".signup-form");
    let signinviewd = true
    changeForm.addEventListener("click", () => {
        if (signinviewd) {
            signinForm.setAttribute("style", "display:none");
            signupForm.setAttribute("style", "display:block");
            changeForm.innerHTML = "Already Have an Account"
            signinviewd = false
        }
        else {
            signinForm.setAttribute("style", "display:block");
            changeForm.innerHTML = "Not Have an Account"
            signupForm.setAttribute("style", "display:none");
            signinviewd = true
        }
    })
}





// 3)
// show and hide password  
export function showHIdePassword() {
    let showPasswordCheckbox = document.getElementById("show-password"),
        password = document.getElementById("password-signup-input"),
        confirmPassword = document.getElementById("confirm-password-signup-input");
    let labelPass = document.getElementById("label-password-checkbox")
    let show = true
    showPasswordCheckbox.addEventListener("click", e => {
        if (show) {
            password.type = "text";
            confirmPassword.type = "text";
            show = false
        }
        else {
            password.type = "password";
            confirmPassword.type = "password";
            show = true
        }
    })
}















