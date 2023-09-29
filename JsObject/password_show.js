function togglePassword()
{
    let pwd=document.getElementById("pwd");
    let i=document.getElementById("i");

    if(pwd.type==="password")
    {
        pwd.type="text";
        i.className="fa-regular fa-eye-slash"
    }
    else
    {
        pwd.type="password";
        i.className="fa-solid fa-eye";
    }
}