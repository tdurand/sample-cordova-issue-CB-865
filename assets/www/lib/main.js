SAMPLE = {};

$(document).ready(function(){

    document.addEventListener("deviceready", onDeviceReady, false);

    SAMPLE.isPhoneGap = typeof cordova !== 'undefined';
	
    if(!SAMPLE.isPhoneGap) {
        SAMPLE.Home.showHomePage();
    }  
});

		
function onDeviceReady() {
		/* device ready is only for Phonegap */
        SAMPLE.Home.showHomePage();
        
        document.addEventListener("backbutton", function () { 
                console.log("RETURN BUTTON PRESSED")
                navigator.app.exitApp();
        }, false);
}


