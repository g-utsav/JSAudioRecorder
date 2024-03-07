function msg(){
 
    // Dialog is javascript interface name
    // mentioned in Mainactivity.Java
    // Android.showMsg("Test Fname","Test Lname");
    // let ret = Android.playSound("This is tost")
    // console.log("this is from js "+ret);

    playInVideoTag()

}

function playInVideoTag(){
    let bloburl = document.querySelector("audio").src;

    let vid = "<video width='100%' height='48' controls> <source src="+bloburl+" type='video/mp4'> </video>"
    document.querySelector("p strong").innerHTML = vid;

}

const  blobToBase64 = (url) =>  {
    return new Promise(async (resolve, _) => {
        // do a request to the blob uri
        const response = await fetch(url);
    
        // response has a method called .blob() to get the blob file
        const blob = await response.blob();
    
        // instantiate a file reader
        const fileReader = new FileReader();
    
        // read the file
        fileReader.readAsDataURL(blob);
    
        fileReader.onloadend = function(){
        resolve(fileReader.result); // Here is the base64 string
        }
    });
    };