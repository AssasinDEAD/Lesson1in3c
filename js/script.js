// // for (let i = 1; i <= 1000; i++) {

// //    let string = String(i)

// //    if (string.includes('22')) {
// //       console.log(i)
// //    }
// // }

// // for (let i = 0; i <= 1000; i++) {
// //    if (i ** 2 <= 100) {
// //       console.log(i ** 2)
// //    }
// // }

// // $(".startBtn").click(function () {
// //    let startNum = $("#startNum").val();

// //    let finishNum = $("#finishNum").val();

// //    for (let i = +startNum; i <= finishNum; i++) {
// //       if (startNum != 0 && finishNum != 0 && i % Math.sqrt(i) == 0) {
// //          console.log(i)

// //       }
// //    };

// // });

// // function pyramyde(n) {

// //    for (let i = 1; i <= n; i++) {
// //       console.log(String(i).repeat(i))
// //    };
// // };

// // pyramyde(10); 

// $("#telNumber").keyup(function a() {
//    let telVal = $("#telNumber").val().substr(5);
//    console.log(telVal.length);



//    if (telVal.length == 7) {
//       for (let i = 1; i == 1; i++) {
//          if (telVal.includes("1111111") || telVal.includes("2222222") || telVal.includes("3333333") || telVal.includes("4444444") || telVal.includes("5555555") || telVal.includes("6666666") || telVal.includes("7777777") || telVal.includes("8888888") || telVal.includes("9999999")) {
//             console.log("Этот номер стоит 1000000");
//             break
//          } if (telVal.includes("111111") || telVal.includes("222222") || telVal.includes("333333") || telVal.includes("444444") || telVal.includes("555555") || telVal.includes("666666") || telVal.includes("777777") || telVal.includes("888888") || telVal.includes("999999")) {
//             console.log("Этот номер стоит 100000");
//             break
//          } if (telVal.includes("11111") || telVal.includes("22222") || telVal.includes("33333") || telVal.includes("44444") || telVal.includes("55555") || telVal.includes("66666") || telVal.includes("77777") || telVal.includes("88888") || telVal.includes("99999")) {
//             console.log("Этот номер стоит 50000");
//             break
//          }
//          if (telVal.includes("1111") || telVal.includes("z2222") || telVal.includes("3333") || telVal.includes("4444") || telVal.includes("5555") || telVal.includes("6666") || telVal.includes("7777") || telVal.includes("8888") || telVal.includes("9999")) {
//             console.log("Этот номер стоит 10000");
//             break
//          } if (telVal.includes("111") || telVal.includes("222") || telVal.includes("333") || telVal.includes("444") || telVal.includes("555") || telVal.includes("666") || telVal.includes("777") || telVal.includes("888") || telVal.includes("999")) {
//             console.log("Этот номер стоит 1000");
//             break
//          }
//       };
//    }

// });

// let table = {
//    w: 420,
//    h: "540mm",
//    findS() {
//       return this.h.includes("mm") ? this.w * +this.h.replace("mm", "") : this.w * +this.h
//    }

// }

// function findLetter(a) {
//    if (a.length % 2 == 0) {
//       console.log(a[Math.floor(a.length / 2 - 1)] + a[Math.floor(a.length / 2)])
//    } else {
//       console.log(a[Math.floor(a.length / 2)])
//    }
// };

// findLetter("aere");

// function countLetters(letter, string) {
//    let count = 0;
//    string.toLowerCase()
//    for (let i = 0; i < string.length; i++) {
//       if (string.toLowerCase()[i] == letter) {
//          count++;
//       }
//    }
//    console.log(count);
// }

// countLetters("a", "aaaAAAAAa")


let students = ["Sonya", "Aneĺ", "Gala", "Kais", "Nura", "Disa", "Akhontii", "Zhasik", "Baha", "Nurda", "Amuha", "Bota", "Dancho", "Nurs", "Aiza"];

let d = document;
d.g = d.getElementById;

let ul = d.g("studentsList");
let li = null;

students.forEach((student) => {
   let li = d.createElement('li');
   ul.appendChild(li);
   li.textContent = student;
});

// students.forEach((student) => {
//    d.g("studentsList").innerHTML += '<li >' + student + '</li>';
// });
