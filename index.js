var fs = require("fs");

var Function3=(callback)=>{
	console.log('Function 3 Called\n'); 
	fs.readFile('./test.txt', 'utf-8', function(err, data) {
	if (err) throw err
    var l=[];
	l=data.split("\n");
	console.log("Sucessfully retrived the third line by function 3\n\""+l[2]+"\"\n");
	callback(l[2]);
})
	
}
var Function2=()=>{
	console.log('Function 2 Called\n'); 

	var thirdLine;
	Function3((thirdLine)=>{

	console.log("Sucessfully retrived the third line from function 3 by function2\n\""+thirdLine+"\"\n");  
    fs.readFile('./test.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
      var l=[];
	  l=data.split("\n");
      console.log("File before change by function2\n"+data+"\n"); 
      var result = data.replace(l[4], thirdLine);
      console.log("File after change by function2\n"+result+"\n"); 
      fs.writeFile('./test.txt', result, 'utf8', function (err) {
	     if (err) return console.log(err);
	  });
	});  

 });
};

var Function1=()=>{
	
	console.log('Function 1 Called\n');  
	Function2();
    fs.readFile('./test.txt', 'utf-8', function(err, data) {
	if (err) throw err
	var l=[];
	l=data.split("\n");
	console.log("Fifth Line Before Change by function 1\n\""+l[4]+"\"\n");
 });
};
   
 
Function1();
//I am the fifth line