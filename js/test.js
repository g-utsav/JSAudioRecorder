function msg(){
       
    var fname=document.getElementById("fname").value;
    var pswd=document.getElementById("pswd").value;
 
    // Dialog is javascript interface name
    // mentioned in Mainactivity.Java
    Dialog.showMsg(fname,pswd);
    }