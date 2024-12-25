var username = document.querySelector(".inputone").value
var useremail = document.querySelector(".inputtwo").value
var userpass = document.querySelector(".inputthree").value

function tologin() {

    window.location.href = "two.html"
}

function tosignup() {

    window.location.href = "index.html"
}

//add users
var user = ""
var allusers = []
function add() {

    user = {
        username: document.querySelector(".inputone").value,
        useremail: document.querySelector(".inputtwo").value,
        userpass: document.querySelector(".inputthree").value,
    }
    var allusers = JSON.parse(localStorage.getItem("newuser")) || [];

    allusers.push(user);

    localStorage.setItem("newuser", JSON.stringify(allusers));


}
function massage() {

    document.querySelector(".show").innerHTML = "all inputs must be valid please"
}

function testName() {

    var username = document.querySelector(".inputone").value;

    var nameregex = /^[a-zA-Z\s]+$/;

    if (nameregex.test(username)) {
        document.getElementById("one").classList.remove("is-invalid");
        document.getElementById("one").classList.add("is-valid");
        console.log("hi name");

        return true;
    } else {
        document.getElementById("one").classList.remove("is-valid");
        document.getElementById("one").classList.add("is-invalid");
        console.log("no");

        return false;
    }
}


var emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

var emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function testEmail() {
    var useremail = document.querySelector(".inputtwo").value;
    if (emailregex.test(useremail)) {
        document.getElementById("two").classList.remove("is-invalid");
        document.getElementById("two").classList.add("is-valid");
        console.log("valid email");
        return true;
    } else {
        document.getElementById("two").classList.remove("is-valid");
        document.getElementById("two").classList.add("is-invalid");
        console.log("invalid email");
        return false;
    }
}


var passregex = /^.{6,}$/;

function testPass() {
    var userpass = document.querySelector(".inputthree").value;
    if (passregex.test(userpass)) {
        document.getElementById("three").classList.remove("is-invalid");
        document.getElementById("three").classList.add("is-valid");
        console.log("valid password");
        return true;
    } else {
        document.getElementById("three").classList.remove("is-valid");
        document.getElementById("three").classList.add("is-invalid");
        console.log("invalid password");
        return false;
    }
}


var submit = document.querySelector(".btn1")
submit.addEventListener("click", function () {
    if (testName() == true && testPass() == true && testEmail() == true) {


        add()
        tologin()


    }

    else {
        testEmail()
        testName()
        testPass()
        massage()
    }

})
/*sign in process*/

function login() {
    var loginname = document.querySelector("#loginname").value;
    var loginemail = document.querySelector("#loginemail").value;

    var allusers = JSON.parse(localStorage.getItem("newuser")) || [];
    for (let i = 0; i < allusers.length; i++) {

        if (allusers[i].username == loginname && allusers[i].useremail == loginemail) {
         
            window.location.href = "three.html"



        }
        else {
            document.getElementById("notAvailable").innerHTML="please enter a valid Credentials"
        }
    }
}





