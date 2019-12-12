

function formrun()                                    
{ 
    var fname = document.forms["ContactForm"]["FName"];              
    var email = document.forms["ContactForm"]["EMail"];    
    var message =  document.forms["ContactForm"]["Comment"];  

      if (fname.value === "")                                   
    { 
        window.alert("Please enter your first name."); 
        fname.focus(); 
        return false; 
    } 
   
    if (email.length > 0 && email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.length > 0 && email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (message.selectedIndex < 1)                  
    { 
        window.alert("Please enter your message."); 
        message.focus(); 
        return false; 
    } 
    
    let lettercheck = /^[a-zA-Z]+$/;
    let letterspacecheck = /^[a-zA-Z ]+$/;

    if (!fname.value.match(letterspacecheck)) {
        window.alert("Please enter a valid name.");
        fname.focus();
        return false;
    }

    let output = "Name: " + fname.value + "\n" + lname.value;
    let output3 = "Email: " + email.value;
    let output6 = "Message: " + message.value;

    localStorage.setItem("output", output);
    localStorage.setItem("output3", output3);
    localStorage.setItem("output6", output6);


//    window.setTimeout(function(){ window.location = "success.html"; },3000);

    return true;
}

function validator() {
    let valcodes = ["234f24", "39348H", "3iKt46", "234j43", "kjG93F", "fnJdf3", "n32tsb", "rkLe35", "ddn23f", "jvkfd9", "fn2nv4", "439jG3", "qo4Ndd", "43hfsg", "3jd9dN", "2jdWW3"];
    let valcode = valcodes[Math.floor(Math.random()*valcodes.length)];
    document.getElementById("valcode").innerHTML = valcode;
}