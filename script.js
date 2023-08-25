// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (i = 5; i <= 100; i++ ) {
    console.log(i);
}


// 3. მოცემულია მასივი
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი


let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array3.length; i++) {
    sum += array3[i]
}
console.log(sum);


// 2. .მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
  for (let i = 0; i<= array1.length; i++){
   if (array1[i] > 0 && array1[i] < 10) {
        console.log(i);
   }
}

// 4. მოცემულია მასივი:
// გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];

let sumLength = 0;
for (let i = 0; i < array4.length; i++) {
    sumLength += array4[i] / array4.length
}
console.log(sumLength);



// 5. მოცემულია ობიექტი:
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
  console.log(user.studentstatus);


//   6. მოცემულია ობიექტი:
//   თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  
//   hello;
//   თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
//   თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
//   ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
  

  let userg = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}


if ( userg.age < 18 && userg.studentstatus =='active') {
    console.log( 'hello');
} else if (userg.name == 'Levani') {
    console.log('Hello Levani');
} else if (userg.studentstatus =='active' || userg.age < 25 ) {
  console.log('Hallo world');
} else {
    console.log('error');
}


let result = ( userg.age < 18 && userg.studentstatus =='active') ? 'hello' : 
(userg.name == 'Levani') ? 'Hello Levani' 
: (userg.studentstatus =='active' || userg.age < 25 ) ? 'Hallo world' : 'error' ;
console.log(result);

// 7. 
// მოცემული მასივიდან for ციკლი ს საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [
 [2, -3, 5, 10],
 [25, -24, -11, 100],
 [-6, -7, 10],
];

for ( let i = 0 ; i < array.length; i++) {
   for ( let x = 0; x < array[i].length; x++) {
    if(array[i][x] > 0) {
        console.log(array[i][x]);
    }
   }
}



// 8. 
// მოცემულია მასივი
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
 ]
  
 for ( let i = 0; i < users.length; i++) {
    if (users[i].status == true) {
        console.log(users[i]);
    }
 }


//  9. მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let mariam = 'მარიამ';
if ( mariam == 'მარიამ') {
    console.log(true);
}else{
    console.log(false);
}



// 10. მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let mariamM = 'მარიამ'

switch (mariamM ) {
    case 'მარიამ':
    console.log(true);    
        break;
    default:
    console.log(false);
        break;
}
