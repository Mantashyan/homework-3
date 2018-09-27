 //-A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points

const operations = function(num1, num2, num3) {
const sum= num1+num2*num3;

return sum;
};

console.log(operations(7, 13, 3));

//-A function that takes no arguments and returns something - 5 points

const lyolik = function() {
	return "not real song title";
};
console.log(lyolik());

// function that takes arguments, does something but does not return anything - 6 points

const someone = function(name, lastname){
const fullname = name + "" + lastname;
}
console.log(someone("Surenchik", "Jamkochyan"));



// function that takes three strings and returns the string that is the longest.  - 6 points
const longest = function(string1, string2, string3){

	if(string1.length > string2.length && string1.length>string3.length){
		return string1;
	}
	else if(string2.length > string1.length && string2.length > string3.length){
		return string2;
	}
	else if(string3.length > string1.length && string3.length > string2.length){
		return string3;
	}
	else{
		return "they are equal";
	}
}
console.log(longest("Antananarivo", "Madagascar", "Shnorhakalutyun"));

// function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points

 const math = function(num1, num2){
 	if(num1 === num2){
 		return 0;
   }
 		else if(num1 > num2){
 			return 1;
 		}
 			else if(num1 < num2){
 				return -1;
 			}
 }
 console.log(math(67584898, 574830200));


//-Create a multiply function (that multiplies the two given arguments together and returns the result) - 2 points
const mult = function(ber1, ber2){
	return ber1 * ber2;

}
console.log(mult(25, 100));


//-Create a divide function (that divides the first argument by the second and returns the result) - 2 points
const div = function(mun1, mun2){
	return mun1 / mun2;
}
console.log(div(3546789, 3));

//-Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) - 6 points
const triangleArea = function(base, height){
	const m = mult(base, height);
	return div(m, 2);
}
	console.log(triangleArea(5, 13));


//-Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length - 6 points
const numLength = function(num){
return (''+num).length;
}
console.log(numLength(63768732));


//-Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1.  - 6 points

const smth = function(str1, str2, num){
	if((str1+str2).length > num){ 
		return "1";
	}
	else{
		return "-1";
	}
}
console.log(smth("lablabla", "miamor", 23));

//-Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.   - 10 points
const runStuff = function(num1, num2, str){
if(str==='rectangle'){
	return num1*num2;
}
else if(str==='triangle'){
return triangleArea(num1, num2);
}
else {
	return '-1';
}
}
console.log(runStuff(13, 17, 'triangle'));
