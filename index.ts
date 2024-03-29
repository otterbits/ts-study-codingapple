let 이름: string = "otter";
let 나이: number = 29;
let 출생지역: string = "진주";

let favor: { song: string; singer: string } = {
  song: "그대 입술이",
  singer: "장범준",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 회원들 :(number | string)[] = [1, '2', 3]
let 오브젝트 :{ a : string | number } = { a : 123 }

let 성 :any = 'kim'
성 = 123;
성 = undefined;
성 = []

let user :string = 'kim';
let age :(undefined | number) = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[]= [user, age, married];

let 학교 :{ score : (number|boolean)[], teacher : string, friend : string|string[]} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function 내함수(x :number) :number { 
  return x * 2 
}

function hello(x? :string) :void {
  if (x){
  console.log('안녕하세요' + x)
  }else{
    console.log('이름이 없습니다.')
  }}

function countDigit(x : string | number) :number{
  return x.toString().length
}

function marriagePossible(income :number, own :boolean, attractive :string) {
  let sum :number = 0
  sum += income
  
  if (own === true){
    sum += 500
  }

  if (attractive === '상'){
    sum += 100
  }

  if (sum >= 600){
    return '결혼가능'
  }
}

console.log(marriagePossible(100, false, '상'))

function 나의함수(x :number|string){
  let array :number[] = [];
    if (typeof x === 'number'){
      array[0] = x;
    }
}

function clean(x: (number | string)[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'string') {
      result.push(Number(x[i]));
    } else {
      result.push(Number(x[i]));
    }
  }

  return result;
}


let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function getSubject(x :{ subject: (string | string[]) }) {
  const key = Object.keys(x);
  const values = Object.values(x);

  if (typeof values === 'string') {
    if (typeof x.subject === 'string') {
      return x.subject
    } else if (Array.isArray(x.subject) ){
      return x.subject[x.subject.length - 1]
    } else {
      return '없습니다.'
    }
  }
}

type PositionXY = { x :number, y :number };
type PositionYZ = { y :number, z :number };
type PositionXYZ = PositionXY & PositionYZ

let xyz :PositionXYZ = { x : 1, y : 2, z : 3 }

type homepage = { color :string, size :number, readonly position : number[]}

type userInfo = { name :string, phone :number, email :string }

type userInfo_ver2 = userInfo & { minor : boolean }

type RSP = '가위' | '바위' | '보'
function rspGame (x :RSP) :RSP[]{
  let result = [x]

  return result 

}

var 자료 = {
  name : 'kim'
} as const


function 나의함수야(a :'kim'){

}

나의함수야(자료.name)

type 함수타입 = (a :string) => number;
type addAge = (age : number) => number

type 회원정보 = {
  name : string,
  age : number,
  plusOne : (x : number) => number,
  changeName : () => void
}

let 회원정보 :회원정보= {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();


type cut = (words :string) => string;
type dash = (words :string) => number;
type phone = (phone :string, cutZero :Function, removeDash :Function) => number;

let cutZero :cut = function (words) {
  if (words.substring(0,1) == '0')
    return words.replace('0','')
  return words
}

let removeDash :dash = function (words) {
  return parseFloat(words.replace(/-/g ,''))
}

let userPhone :phone = function (phone, cutZero, removeDash) {
  const cutPhone = cutZero(phone)
  return removeDash(cutPhone)
}

console.log(userPhone('010-1111-2222', cutZero, removeDash))


class Person {
  name :string;
  age :number;

  constructor (name :string){
    this.name = name,
    this.age = 20;
  }

}

class Car {
  model :string;
  price :number;

  constructor (model :string, price :number){
  this.model = model;
  this.price = price;
  }
  tax() :number{
    return this.price * 0.1
  }}

let car1 = new Car('소나타', 3000)
console.log(car1)
console.log(car1.tax())


interface student {
  name :string
}

interface teacher {
  name :string,
  age :number
}
let students :student= { name : 'kim' }
let teachers :teacher= { name : 'kim', age : 20 }

interface good {
  brand :string,
  serialNumber :number,
  model :string[]
}
let goods :good = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface basket extends card {
  product :string,
  price :number
  }

interface card {
  card : boolean
}

let baskets :basket[] = [ { product : '청소기', price : 7000, card : true }, { product : '삼다수', price : 800, card : false } ] 

interface home {
  plus : (x:number, y:number) => number;
  minus : (x:number, y:number) => number;
}

let homework :home = {
  plus(x,y){
    return x+y
  },
  minus(x, y){
    return x-y
  }
}

let person = { student : true, age : 20 }

function 함수({student, age} :{student :boolean, age:number}){
  console.log(student, age)
}
함수({ student : true, age : 20 })

function max(...num :number[]) :number{
  let maxNum = num[0]
  for(let i = 0; i<num.length; i++)
    if (num[i] > maxNum){
      maxNum = num[i]
    }
    return maxNum
}

console.log(max(1,2,3,3,5))

function userInfo({user, comment, admin}: {user : string, comment :number[], admin : boolean}) :void{
  console.log(user, ...comment, admin)
}
userInfo( { user : 'kim', comment : [3,5,4], admin : false } )

function selectWine([content, alcohol, drink] : (number|string|boolean)[]) :void{
  console.log(content, alcohol, drink )
}
selectWine( [40, 'wine', false] )

type Fish = {swim :string}
type Bird = {fly :string}

function 함수1(parameter: string) {
  if ( typeof parameter == "string"){
    console.log(parameter)
  } else {
    console.log(parameter)
  }
}

function 함수2(parameter: string) {
  if ( typeof parameter == "string"){
    console.log(parameter)
  } else {
    console.log(parameter)
  }
}

function 함수3(parameter: string) {
  if ( typeof parameter == "string"){
    console.log(parameter)
  } else {
    console.log(parameter)
  }
}