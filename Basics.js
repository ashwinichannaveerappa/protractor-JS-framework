//to print anything in the console
console.log('Hello world');
var a=10;
var b= 20.4;
var n ="hello";
console.log(b);
console.log(n);

//conditional language
if(a>b)
{
	console.log("a is greater than b"+a);
}else
console.log("b is greater than a"+ "---"+ b);

//print numbers from 1 -100

for(var i=1; i<=100; i++)
{
	console.log(i);
}

//to add 1 to 100

var k=0;
for(var j=1;j<=100;j++)
{
	k+=j;
}
console.log(k);


//to print gap by 2

for(var i=1; i<=100; i=i+2)
{
	console.log(i);
}

//switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


//while

var l=1;

while(l<5)
{
	console.log(l);
	l++;
}

//do while -- irrespective of the condition, it will execute at least once
var m=10;

do{

	console.log(m)
	m++;
}while(m<12)


