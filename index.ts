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