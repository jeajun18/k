//제출 이벤트를 받는다. (이벤트 핸들링)

// 제출된 입력 값들을 참조한다.

// 입력값에 문제가 있는 경우 이를 감지한다.

// 전부 완료 하면 가입 환영 인사 제공한다.

const form = document.getElementById("form")
form.addEventListener("submit", function(event){
    event.preventDefault() //기존 기능 차단 (새로 고침 같은)

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    if(userId.length <6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return
    }
    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }


    //가입이 잘 되었다는 환영의 말.
    document.body.innerHTML = ""
    document.write(`<p>${userId}님 가입을 축하합니다.</p>`)
    document.write("회원 가입 시 입력하신 내역은 다음과 같습니다.<br/>")
    document.write(`아이디 : ${userId}<br/>`)
    document.write(`이름 : ${userName}<br/>`)
    document.write(`전화번호 : ${userPhone}<br/>`)
    document.write(`원하는 직무 : ${userPosition}`)
})