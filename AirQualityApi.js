//This code fetch all api data OpenAQ

const https = require('https');
//var jsonQuery = require("json-query");

https.get('https://api.openaq.org/v1/measurements?country=IN&city=Delhi&location=Anand+Vihar&parameter=pm25', (res) => {
  //console.log('statusCode: ', res.statusCode);
  //console.log('headers: ', res.headers);

  //res.on('data', (d) => {
 //   process.stdout.write(d);
	
	
  console.log(res);
	//var val=d.length;                  console.log(val);
	//for (i=0;i<val;i++)
    //{
	//	var air=(JSON.stringify(d[i])); 
	//	console.log(air);
		//jsonContent = JSON.parse(air);
		//console.log("parameter",jsonContent.parameter);
		
	//}
	
	//console.log('air');
	//console.log(val);
	
	
	
 });
 
}).on('error', (e) => {
  console.error(e);
});



