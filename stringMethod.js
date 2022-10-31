let string = "Método";
let string2 = " Método ";

string.startsWith("m"); // true
string.endsWith("g"); // false
string.includes("e"); // true
string.charAt(4); // d count starts left to right
string.charAt(-3);  // o count starts in right to left
string.concat("","de string"); //
string.indexOf("o"); //
string.lastIndexOf("m"); //
string.padStart(7,"?"); // ?Método
string.padEnd(7,"?"); // Método?
string.repeat(2); // métodométodo
string.replace("étodo", "ethod"); // method
string.slice(2,7); // 
string.split(""); // ["m", "é", "t ","o", "d" ,"o"]
string2.trim(); //Método
string2.trimStart(); // Método-
string2.trimEnd(); // Método
string2.toLowerCase(); // método
string2.toUpperCase(); // MÉTODO
string2.search("d"); // 1 (find one)

