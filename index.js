var 이름 = "otter";
var 나이 = 29;
var 출생지역 = "진주";
var favor = {
    song: "그대 입술이",
    singer: "장범준",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: 123 };
var 성 = 'kim';
성 = 123;
성 = undefined;
성 = [];
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 내함수(x) {
    return x * 2;
}
function hello(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function countDigit(x) {
    return x.toString().length;
}
function marriagePossible(income, own, attractive) {
    var sum = 0;
    var monthlyIncome = Math.floor(income / 100);
    sum += monthlyIncome;
    if (own == true) {
        sum += 500;
    }
    if (attractive == '상') {
        sum += 100;
    }
    if (sum >= 600) {
        return '결혼가능';
    }
}
marriagePossible(700, false, '중');
console.log('hello typescript');
