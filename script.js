function copyemail() {
    var tempTextarea = document.createElement("textarea");
    var email = "sulthanabiyyurizkyp@gmail.com";
    tempTextarea.value = email;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
}

function hireme(){
    window.location.href ="http://www.github.com/sulthan27";
}