const classmates = ["철수", "영희", "훈이", "민수" , "민지" ]
for(let i=0; i<=4; i=i+1) {
    console.log(classmates[i] + "어린이")
}

// 결과
// 철수어린이
// 영희어린이
// 훈이어린이
// 민수어린이
// 민지어린이


const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]

// for문 예제
for(let i=0; i<=fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
