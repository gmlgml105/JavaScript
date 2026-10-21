// let data1 = 10
// let data2 = 20
// // 첫번째 만남 값이 옳은 코드이니까! 좌->우로 true값이 나옴
// // 앞의 값이 false라면 || "초기값"을 넣는 용도로 사용
// // console.log(false || "홍길동")
// 
// console.log(data1 && true)

// 만약 파이썬이었다면?
// 출력 안됨
// 문법에 익숙해져야 함! (Next TSX문법에 if문이 없다! 그렇기에 이 코드가 익숙해져야 함!)
// 10 >= 11 ? (
//     console.log("a")
// ) : ( 
//     console.log("b")
// )

// false가 아닌데 false로 취급되는 값들
console.log(Boolean(10)) 
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // falses
console.log(Boolean(undefined)) // false
console.log(Boolean("")) // false
console.log(Boolean(" ")) // 공백문자도 값이다! 그래서 true가 나옴
console.log(Boolean(0)) // false
console.log(Boolean([]))
console.log(Boolean({}))





