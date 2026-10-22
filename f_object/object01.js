// 객체 생성
// 프로토타입
// 참조 레퍼런스 타입
// 객체의 생성자 문법
// const는 값이 아닌, 그 값을 담고 있는 주소를 변경하지 못하게 하는 상수!
const user = new Object()
// 객체 리터럴 문법
const user2 = {}

// 객체 접근법
const user3 = {
    name : "노퓨어진성",
    age : 25,
    address : "잠실"
}
// dot 접근법 (.)
// console.log(user3.name)
// 대괄호 접근법 ([]) : 변수를 쓰고 싶을 때 사용하는 접근법
for(let i in user3){
    console.log(user3[i])
}



