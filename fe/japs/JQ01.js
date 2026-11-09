let year = 2026; // 출생년도
let num = 9; // 주민등록번호 뒷자리 첫 번째 숫자
let age = 2026 - year + 1;
 
if(year >= 2000 && year < 2027){ //2000년생 이후
    if(num == 3){//남성
        console.log(age+'살 남성입니다.')
    } else{//여성
        if(num == 4){
        console.log(age+'살 여성입니다.')
        } else if (num == 9) {
        console.log(age + '살 논바시군요?!?!'); // 있을리가 없잖아 !!!
        } else {
            console.log('잘못된 입력입니다.')
        }
    }
} else if (year < 2000 && year > 1899){ //00년생 보다 더 많음
    if(num == 1){//남성
        console.log(age+'살 남성입니다.')
    } else{//여성
        if(num == 2){
        console.log(age+'살 여성입니다.')
        }else if (num == 9) {
        console.log(age + '살 논바시군요?!?!'); // 슬퍼 ㅜㅠㅜㅜㅜㅜㅠㅠㅠㅠㅜ
        } else {
            console.log('잘못된 입력입니다.')
        }
    }
} else
    console.log('잘못된 입력입니다.')