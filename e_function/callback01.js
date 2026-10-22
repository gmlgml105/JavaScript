// 어떤 값에 10을 더하고 2를 곱하고 출력
const add10 = (num, callback) => {callback(num + 10)}
const mul2 = (num, callback) => {callback(num * 2)}

// 입력함수와 콜백함수 코드
add10(100, (result) => mul2(result, (total) => {
    console.log(total)
}))