// for (let i = 1; i <= 1000; i++) {

//    let string = String(i)

//    if (string.includes('22')) {
//       console.log(i)
//    }
// }

// for (let i = 0; i <= 1000; i++) {
//    if (i ** 2 <= 100) {
//       console.log(i ** 2)
//    }
// }

$(".startBtn").click(function () {
   let startNum = $("#startNum").val();

   let finishNum = $("#finishNum").val();

   for (let i = startNum; i <= finishNum; i++) {
      if (startNum != 0 && finishNum != 0 && i % Math.sqrt(i) == 0) {
         console.log(i)
      }
   };

});
