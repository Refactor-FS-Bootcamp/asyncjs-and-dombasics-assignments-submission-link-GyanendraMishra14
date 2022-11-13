const  s1='Virat Kohli';
const s2='Rohit Sharma';

//String.length
console.log(s1.length);
console.log(s2.length);
//String Concat: itb add two or more than two string and return new string 
let s3=s1.concat(" ",s2);
console.log(s3);
s3=s1.concat(" ",s2," ",s3);
console.log(s3);
//String endWith: aacept one and two parameter and return true or false this method is also caseSenstive
console.log(s1.endsWith('Kohli'));
console.log(s2.endsWith('Sharma',12));
//String slice:it takes one or two parameter it extract a section of string and return new string 
console.log(s1.slice(2));
console.log(s1.slice(2,6));
console.log(s2.slice(-5));
console.log(s2.slice(-6,-2));

//String split: it devide string from given parameter  and return and array
const str= "My Name is Gyanendra Mishra"
let st=str.split(" ");
let sta=str.split(" ",3);
console.log(st);
console.log(st[3]);
//String.toString: it convert into String and return String 
const ab=new String ('DemoTesting');
console.log(typeof(ab));//object 
const ab1 = ab.toString();
console.log("TypeOf ab1 is  "+typeof(ab1));
const num=15;
console.log(typeof(num));
const num1=num.toString();
console.log(typeof(num1));

//String trim():it removes spaces  from start  and ends and return new String 
const jk  = "  I can Do ";
console.log(jk);
console.log(jk.trim());


