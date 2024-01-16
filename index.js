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
    sum += income;
    if (own === true) {
        sum += 500;
    }
    if (attractive === '상') {
        sum += 100;
    }
    if (sum >= 600) {
        return '결혼가능';
    }
}
console.log(marriagePossible(100, false, '상'));
function 나의함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
function clean(x) {
    var result = [];
    for (var i = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            result.push(Number(x[i]));
        }
        else {
            result.push(Number(x[i]));
        }
    }
    return result;
}
console.log(clean([123, '345']));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function getSubject(x) {
    var key = Object.keys(x);
    var values = Object.values(x);
    if (typeof values === 'string') {
        if (typeof x.subject === 'string') {
            return x.subject;
        }
        else if (Array.isArray(x.subject)) {
            return x.subject[x.subject.length - 1];
        }
        else {
            return '없습니다.';
        }
    }
}
var xyz = { x: 1, y: 2, z: 3 };
function rspGame(x) {
    var result = [x];
    return result;
}
var 자료 = {
    name: 'kim'
};
function 나의함수야(a) {
}
나의함수야(자료.name);
