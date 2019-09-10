
function loseTheVowels(str){

var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

var newStr = '';

for (var i = 0; i <= str.length; i++) {

    var char = str.charAt(i);

    if (vowels.indexOf(char) == -1) {
        newStr += char;
    }

}
return newStr;

}
console.log(loseTheVowels("Is it going to work"))