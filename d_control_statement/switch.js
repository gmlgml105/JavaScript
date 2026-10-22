// switch : 값을 이미 알고 있을 때 사용하는 분기문
// switch(값){}

// 출력값이 같게 나와도 영역을 나눈 후 break를 쓰는 게 관례!!
const choice = "한식"
switch(choice){
    case "중식": {
        let menu = "짜장면"
        console.log(menu)
        break
    }
    case "한식": {
        let menu = "텀블러비어"
        console.log(menu)
    }
    case "일식": {
        let menu = "돈까스"
        console.log(menu)
    }
    default:
        console.log("굶기")
        break // 관례상 case문마다 넣는 편이 좋음!
}