var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (words) {
    if (words.substring(0, 1) == '0')
        return words.replace('0', '');
    return words;
};
var removeDash = function (words) {
    return parseFloat(words.replace(/-/g, ''));
};
var userPhone = function (phone, cutZero, removeDash) {
    var cutPhone = cutZero(phone);
    return removeDash(cutPhone);
};
console.log(userPhone('010-1111-2222', cutZero, removeDash));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name,
            this.age = 20;
    }
    return Person;
}());
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
var students = { name: 'kim' };
var teachers = { name: 'kim', age: 20 };
var goods = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var baskets = [{ product: '청소기', price: 7000, card: true }, { product: '삼다수', price: 800, card: false }];
var homework = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    }
};
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
function max() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var maxNum = num[0];
    for (var i = 0; i < num.length; i++)
        if (num[i] > maxNum) {
            maxNum = num[i];
        }
    return maxNum;
}
console.log(max(1, 2, 3, 3, 5));
function userInfo(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log.apply(console, __spreadArray(__spreadArray([user], comment, false), [admin], false));
}
userInfo({ user: 'kim', comment: [3, 5, 4], admin: false });
function selectWine(_a) {
    var content = _a[0], alcohol = _a[1], drink = _a[2];
    console.log(content, alcohol, drink);
}
selectWine([40, 'wine', false]);
function 함수1(parameter) {
    if (typeof parameter == "string") {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
