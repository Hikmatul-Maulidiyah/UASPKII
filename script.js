var n = prompt("Masukan Nama Anda:");
var c = confirm("Hai " + n + " Selamat Datang di Home Bakery");
if (c == true) {
    alert('Selamat Berbelanja♡');
} else {
    alert('No Problem');
}

const txtElement = ['Tart', 'Cookies', 'Cake', 'Dessert'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();
