// let num = 0

// for문
// 횟수를 알 때 사용하는 문장
// for (let i = 0; i < 10; i ++){
//     console.log(i)
// }
// 배열.length : 배열의 데이터 수
// 파이썬 문법 : enumerate(arr1) -> (1, 10)
const arr1 = [10, 20, 30, 40]
// for (let i = 0; i < arr1.length; i++) { -> i++ : 변수를 앞에 붙이는 후일연산자가 관례!
//     console.log(i, arr1[i])
// }

// [ 빠른 포문 ] * 그래서 파이썬이 빠른 포문에 해당함! *
// for ~ in 객체 : index를 접근하는 반복문
for(let i in arr1) {
    console.log(i)
}
// for ~ of 객체 : 값을 접근하는 반복문
for(let i of arr1) {
    console.log(i)
}

