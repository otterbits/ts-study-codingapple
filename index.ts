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

console.log(clean([123,'345']))

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