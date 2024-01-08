let main=document.getElementById("navigate");
let hide=document.getElementById("def_nav");
let show=document.getElementById("nav_item")

function Open(){
    hide.style.display="block"
    show.style.display="none"
}

function Close(){
    hide.style.display="none"
    show.style.display="block"
}

function sendEmail() {
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("clint-message").value;
    let phone  = document.getElementById("phone").value;
    let budjet = document.getElementById("budjet").value;
    let purpose = document.getElementById("Select-Subject").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email}  <br> phone : ${phone} <br> purpose : ${purpose} <br> budjet : ${budjet} <br>  Message : ${message} `;
    Email.send({
        From : "santhananivas9894@gmail.com",
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );

    console.log(name)
    console.log(email)
    console.log(message)
    console.log(phone)
    console.log(budjet)
    console.log(purpose)

    
}