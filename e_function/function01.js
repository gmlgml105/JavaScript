// 두 수를 전달하면 두 수를 더해주는 함수
// 일반 함수
// function add(num1, num2) {
//     return num1 + num2
// }
// 
// let result = add(10, 20)
// console.log(result)

// 화살표 함수(ES6) -- 파이썬에서 람다 함수와 같은 기능
const getFullName = (lastName, firstName) => {
    return lastName + firstName
}
// 화살표 함수는 매개변수가 하나면, 소괄호를 없앨 수 있음! (절대 권장 x)
// const getFullName = lastName => {
//     return lastName +
// }
// 중괄호와 return 값을 없애면 한 줄 전체가 통째로 return 값이 된다!
// const getFullName = lastName => lastName + firstName 
// -- 이런 경우, enter을 치기 위해선 return 값 부분을 소괄호로 감싸야 한다!
let fullName = getFullName("홍", "길동")
console.log(fullName)