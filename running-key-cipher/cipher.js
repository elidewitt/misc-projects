//"secret" alphabet array
const codedAlphabet = [
	"Q", "q", "`",
	"w", "W", "~",
	"E", "e", "!",
	"r", "R", "1",
	"T", "t", "2",
	"y", "Y", "@",
	"U", "u", "#",
	"i", "I", "3",
	"O", "o", "4",
	"p", "P", "$",
	"{", "[", "%",
	"]", "}", "5",
	"A", "a", "6",
	"s", "S", "^",
	"D", "d", "&",
	"f", "F", "7",
	"G", "g", "8",
	"h", "H", "*",
	"J", "j", "(",
	"k", "K", "9",
	"L", "l", "0",
	";", ":", ")",
	"z", "Z", "-",
	"X", "x", "=",
	"c", "C", "+",
	"V", "v", ",",
	"b", "B", "<",
	"N", "n", ".",
	"m", "M", ">",
	"?", "/", "_",
	"\'", "\"", " ", "\\"
];


//encryption funciton
function encrypt(input, theKey) {

    var inputKey = String(theKey);
	let output = "";

	//for loop for running through input to encrypt each letter
	for (let i = 0; i < input.length; i ++) {

		if (codedAlphabet.includes(input[i])) { // if input is a letter, add encrypted letter to output

			output += codedAlphabet[((codedAlphabet.indexOf(input[i])) % codedAlphabet.length + codedAlphabet.indexOf(inputKey[i % inputKey.length])) % codedAlphabet.length];
		}
		else {//if input is any other symbol, don't change

			output += input[i];
			console.log("Character " + input[i] +  " at index " + i + " is not converted");
		}
	}

	//return the encrypted message and print it to console for debugging
	console.log(input + " => " + output);
	return(output);
}

function decrypt(input, theKey) {

    var inputKey = String(theKey);
	let output = "";

	for (let i = 0; i < input.length; i ++) {

		if (codedAlphabet.includes(input[i])) {

			output += codedAlphabet[(((codedAlphabet.indexOf(input[i])) % codedAlphabet.length - codedAlphabet.indexOf(inputKey[i % inputKey.length])) + codedAlphabet.length) % codedAlphabet.length];
		}
		else {

			output += input[i];
			console.log("Character " + input[i] +  " at index " + i + " is not converted");
		}
	}

	console.log(output);
	return(output);
}
