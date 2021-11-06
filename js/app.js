
// for(i=1; i<=10000; i++) {
//     if(String(i).includes('222')){ 
//         console.log(i);}}

// for(i=1; i<=100; i++) {
//     if(i%Math.sqrt(i)==0){
//     console.log(i);
//     }  
// function a(n){
// for (i = 1; i <= n; i++) {
// 	var res = [];
// 	for (a = 1; a <= i; a++) {                                                  // https://learn.javascript.ru/array
// 		res.push(i);
// 	}
// 	console.log(res.join(''));
//}


// n='123123123'  

// if(n.includes('111')||
// n.includes('222')||
// n.includes('333')||
// n.includes('444')||
// n.includes('555')||
// n.includes('666')||
// n.includes('777')||
// n.includes('888')||
// n.includes('999')||
// n.includes('000')){
//     console.log('красиво')
// }

// if(n.includes('1111')||
// n.includes('2222')||
// n.includes('3333')||
// n.includes('4444')||
// n.includes('5555')||
// n.includes('6666')||
// n.includes('7777')||
// n.includes('8888')||
// n.includes('9999')||
// n.includes('0000')){
//     console.log('красиво2')
// }

// if(n.includes('11111')||
// n.includes('22222')||
// n.includes('33333')||
// n.includes('44444')||
// n.includes('55555')||
// n.includes('66666')||
// n.includes('77777')||
// n.includes('88888')||
// n.includes('99999')||
// n.includes('00000')){
//     console.log('красиво3')
// }
// if(n.includes('111111')||
// n.includes('222222')||
// n.includes('333333')||
// n.includes('444444')||
// n.includes('555555')||
// n.includes('666666')||
// n.includes('777777')||
// n.includes('888888')||
// n.includes('999999')||
// n.includes('000000')){
//     console.log('красиво4')
// }
//     else{
//         console.log('фигня');
//     }
// import com.ibm.icu.text.Transliterator


String.replaceAll = function (a, b) { return this.split(a).join(b) };
var translite_lat = {
   А: "A", а: "a",
   Ә: "Á", ә: "á",
   Б: "B", б: "b",
   Д: "D", д: "d",
   Е: "E", е: "e",
   Ф: "F", ф: "f",
   "Ғ": "Ǵ", "ғ": "ǵ",
   Г: "G", г: "g",
   Х: "H", х: "h",
   И: "I", и: "i",
   Й: "I", й: "i",
   H: "H", h: "h",
   Ж: "Zh", ж: "zh",
   К: "K", к: "k",
   Л: "L", л: "l",
   М: "M", м: "m",
   Н: "N", н: "n",
   Ң: "Ń", ң: "ń",
   О: "O", о: "o",
   Ө: "Ó", ө: "ó",
   П: "P", п: "p",
   Қ: "Q", қ: "q",
   Р: "R", р: "r",
   Ш: "Sh", ш: "sh",
   С: "S", с: "s",
   Т: "T", т: "t",
   Ұ: "U", ұ: "u",
   Ү: "Ú", ү: "ú",
   В: "V", в: "v",
   Ы: "Y", ы: "y",
   У: "Ý", у: "ý",
   З: "Z", з: "z",
   Ч: "Ch", ч: "ch",
   Э: "E", э: "e",
   Щ: "", щ: "",
   ь: '',
   ъ: '',

};

var translite_kaz = {
   "Á": "Ә", "á": "ә",
   "A": "А", "a": "а",
   "B": "Б", "b": "б",
   "D": "Д", "d": "д",
   "E": "Е", "e": "е",
   "F": "Ф", "f": "ф",
   "Ǵ": "Ғ", "ǵ": "ғ",
   "G": "Г", "g": "г",
   "H": "Х", "h": "х",
   "I": "Й", "i": "й",
   "I": "И", "i": "и",
   "H": "H", "h": "h",
   "Zh": "Ж", "zh": "ж",
   "K": "К", "k": "к",
   "L": "Л", "l": "л",
   "M": "М", "m": "м",
   "Ń": "Ң", "ń": "ң",
   "N": "Н", "n": "н",
   "Ó": "Ө", "ó": "ө",
   "O": "О", "o": "о",
   "P": "П", "p": "п",
   "Q": "Қ", "q": "қ",
   "R": "Р", "r": "р",
   "Sh": "Ш", "sh": "ш",
   "S": "С", "s": "с",
   "T": "Т", "t": "т",
   "Ú": "Ү", "ú": "ү",
   "U": "Ұ", "u": "ұ",
   "V": "В", "v": "в",
   "Ý": "У", "ý": "у",
   "Z": "З", "z": "з",
   "Ch": "Ч", "ch": "ч",
   "Y": "Ы", "y": "ы",
   "Shc": "Щ", "shc": "щ"

};

var _translate_kaz = {
   "Iá": "Иә", "ıá": "иә",
   "Ya": "Я", "ya": "я",
   "Iý": "Ю", "ıý": "ю",
};
var _translate_lat = {
   Я: "Ya", я: "Ya",
   Ю: "Iý", ю: "ıý",
   Ц: "Ts", ц: "ts"

};

var convert_to_lat = function (text) {
   for (var key in _translate_lat) {
      text = text.replaceAll(key.toString(), _translate_lat[key]);
   }

   for (key in translite_lat) {
      text = text.replaceAll(key.toString(), translite_lat[key]);
   }

   return text;
};

var convert_to_kaz = function (text) {
   for (var key in _translate_kaz) {
      text = text.replaceAll(key.toString(), _translate_kaz[key]);
   }

   for (key in translite_kaz) {
      text = text.replaceAll(key.toString(), translite_kaz[key]);
   }

   return text;
};


