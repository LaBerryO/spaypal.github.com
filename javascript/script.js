function mainContentShow() {
    $("#mainContent").show()
    $("#footer").show()
    $(".login-wrapper").hide()
}

function mainContentHide() {
    $("#mainContent").hide()
    $("#footer").hide()
    $(".login-wrapper").show()
}

function sucessedLogin() {
    $("#successLogin").show()
    $("#LI, #LO").hide()
}


$(document).ready(() => {
    mainContentShow()
    $("#successLogin").hide()
    
    $("#LI").click(() => {
        mainContentHide()
    })

    $("#LO").click(() => {
        alert("로그인 해줘")
    })
    
    $("#home, #back, #dprtm").click(() => {
        mainContentShow()
    })
    
    $("#Loggedin").click(() => {
        var userId = $("#user_id").val()
        var userPw = $("#user_pw").val()
        if (userId === "Admin" && userPw === "Admin1234") {
            mainContentShow()
            sucessedLogin()
            alert("Admin 으로 로그인 되었습니다.")
            console.log("logined")
        } else {
            event.preventDefault()
            alert("아이디 또는 비밀번호가 잘못 입력되었습니다.")
            console.log("loginFail")
        }
    })    

    $("#shopdeal").click(() => {
        $(".login-wrapper").hide()
        $("#shopDeals").show()
    })
})