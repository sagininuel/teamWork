function CustomAlert() {
    this.render = function(dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById("dialogoverlay");
        var dialogbox = document.getElementById("dialogbox");

        if (document.getElementById("name") && document.getElementById("email")) {
            dialogoverlay.style.display = "block";
            dialogoverlay.style.height = winH + "px";
            dialogbox.style.left = "30px";
            dialogbox.style.top = "121px";
            dialogbox.style.display = "block";
            dialogbox.style.width = winW / 2 + "px";
            document.getElementById("dialogboxhead").innerHTML =
                "Successful! Reset Password";
            document.getElementById("dialogboxbody").innerHTML = dialog;
            document.getElementById("dialogboxfoot").innerHTML =
                '<button id="button" onclick="Alert.ok()">OK</button>';
        }
    };
    this.ok = function() {
        document.getElementById("dialogbox").style.display = "none";
        document.getElementById("dialogoverlay").style.display = "none";
    };
}
const Alert = new CustomAlert();