var validName="husainzoopdiwala";
var validPass="zxcv1234"

function validate()
{
    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;
    if(name===validName && pass===validPass)
    {
        location.replace("/landingPage/index.html")

    }
    else
    {
        document.getElementById("login-Button").innerHTML="Wrong Id/Password";
    }
}