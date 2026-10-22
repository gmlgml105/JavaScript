// 입력 받은 문자열을 뒤집어주는 함수
// "abde" -> "edba"

/* 알고리즘 해결법 
우선 합쳐져 있는 문자열을 다 쪼갠 다음, 그걸 다시 역으로 뒤집고 다시 연결하기
// */
// 
// // 일반 for문
// const reverse = (str) => {
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[str.length - 1 - i])
//     }
//     return result
// }
// let result1 = reverse("abde")
// console.log(result1)
// 
// // 2. 3개의 매개변수를 전달하여 숫자의 개수 찾아주기
// // ex) 10, "a", 7
// // -> 정수 2개
// 
// console.log(typeof("a") === "number")
// // 정수인지 판별
// // console.log(!isNaN(10) + 1)
// 
// const getNumberCount = (data1, data2, data3) => 
//     !isNaN(data1) +  !isNaN(data2) +  !isNaN(data3) 
// let result2 = getNumberCount(10, "a", 7)
// console.log(result2)

// *args === ...args(가변 매개변수) : rest parameter
const add = (...number) => {
    console.log(number)
}
add (10, 20, 30)
console.log(add)

// default parameter을 넣을 수 있음
// 변수에도, 함수에도 넣을 수 있음 add2, add3, add4 모두 같은 코드임
const add2 = (data1, data2 = 0) => data1 + data2
const add3 = (data1, data2 = init()) => data1 + data2
const add4 = (data1, data2 = (() => 0)()) => data1 + data2
console.log(add4((100)))


