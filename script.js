
// function change() {
    // let num = document.getElementById('number');
    // let inp = document.getElementById('txt');
    // let rang = inp.value;

    // for (let i; i = num;) {
    //     // i = 1;
    //     // i = 2;
    //     // i = 3;
    //     // i = 4;
    //     // i = 5;
    //     // i = 6;
    //     if (num = 1 ) {
    //         num = document.getElementById('bir');
    //     }
    //     else if (num = 2 ) {
    //         num = document.getElementById('ikki');
    //     }
    // }

    // document.getElementById('number')[0].style.background = rang;
// }
// document.getElementById('number')[0].style.background = rang;

// for (let i = 0; i = num; i ) {
//     if 
// }


    // let num;
    // num = document.getElementById('numb');
    // if (num = 1) {
    //     function change() {
    //         let num;
    //         num = document.getElementById('numb');

    //         let inp = document.getElementById('txt');
    //         let rang = inp.value;
    //         document.getElementById('numb')[0].style.background = rang;
    //     }
    // }

    
    // numberr = document.getElementById('numb');
    // if (numberr = "1") {
    //     function change() {
    //         let inp = document.getElementById('txt');
    //         let rang = inp.value;
    //         document.getElementById('bir').style.background = rang;
    //     }
    // }   else if (numberr = "1") {
    //         function change() {
    //             let inp = document.getElementById('txt');
    //             let rang = inp.value;
    //             document.getElementById('ikki').style.background = rang;
    //         }
    //     }



    // let inp = document.getElementById('txt');
    //                 let rang = inp.value;
    //                 document.getElementById('bir').style.background = rang;

    // function change() {
    //     function numfun() {
    //         let num ;
    //         num = document.getElementById('numb');
    //         document.getElementById('numb') = parseInt(document.getElementById('numb'));
    //     }
    //         function birr(salom) {
    //             if (num = 1) {
    //                 let inp = document.getElementById('txt');
    //                 let rang = inp.value;
    //                 document.getElementById('bir').style.background = rang;
    //             }
    //         }
    //         function ikkii(salom) {
    //             if (num = 2) {
                
    //                 let inp = document.getElementById('txt');
    //                 let rang = inp.value;
    //                 document.getElementById('ikki').style.background = rang;
    //             }
    //         }
    //         function uchh(salom) {
    //         }
    //         for (let i = 0 ; num = i; i++){
                
    //         }
    // }


    // function change() {
    //     let num = document.getElementById("numbb")
    //     num = document.getElementById("bir"|"ikki"|"uch"|"turt"|"besh"|"olti");
    //     let inp = document.getElementById('txt');
    //     let rang = inp.value;
    //     document.getElementById('ikki')[0].style.color = rang;
    // }

    
    
    // function change() {
    //     let inp = document.getElementById('txt');
    //     let rang = inp.value;
    //     document.getElementsByTagName('h1')[0].style.color = rang;
    // }

    function change(){
        let number = document.getElementById('number').value;
        let rang = document.getElementById('rang').value;
        
        switch (number){
            case 1:
                document.getElementById('birinchi')[0].style.background = rang;
                break;
            case 2:
                document.getElementById('ikkiinchi').style.background = rang;
                break;
            case 3:
                document.getElementById('uchinchi').style.background = rang;
                break;
            case 4:
                document.getElementById('turtinchi').style.background = rang;
                break;
            case 5:
                document.getElementById('beshinchi').style.background = rang;
                break;
            case 6:
                document.getElementById('oltiinchi').style.background = rang;
                break;
        }
    }