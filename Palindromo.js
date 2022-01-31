function texto()
{
	let palabra=prompt("Escribe una palabra").toLowerCase();
	palabra=palabra.replace(/ /g, "");
 
	for (let i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 
texto() ? console.log("La frase es un palindromo") : console.log("La frase no es un palindromo");