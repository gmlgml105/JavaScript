// 즉시 실행 함수 ()()
// (function(){})()
let num = 10; // 끝에 세미콜론으로 닫는 게 영역을 구분하기에 좋다!

(() => {
    console.log("Hello, World!")
})()
// 위의 코드에서 즉시 실행 함수 부분 (js에서 콜백함수)
// () => {
//    console.log("Hello, World!")
// }