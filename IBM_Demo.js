var Client = require("ibmiotf");






	var config = 
{   
    "org" : "mil440",
    "id" : "buildiing",
    "type" : "smart_building",
    "auth-method" : "token",
    "auth-token" : "dmgreenojo12345"
};








var deviceClient = new Client.IotfDevice(config);
deviceClient.connect();
deviceClient.on('connect', function () {


deviceClient.log.setLevel('debug');

	
		deviceClient.on("command", function (commandName,format,payload,topic) 
{
    if(commandName === "blink") 
	{
        console.log(blink);
        blink(payload);
    } 
	else 
	{
        console.log("Command not supported.. " + commandName);
    }
	
});
            for (i=0;i<30;i++) 
				{
			deviceClient.publish("status","json",'{"d" : {"CO2" : 112.8, "NOx" : 0.53, "NH3" : 290.6}}');
				}
	  });
	
	

		
	 

	 