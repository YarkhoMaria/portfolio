//№1⊗jsPmObInr
//Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.
let obj1={1:'Понедельник' , 2: 'Вторник', 3: 'Среда',  4:'Четверг' , 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье' };
console.log(obj1[1]);
console.log(obj1[2]);
console.log(obj1[3]);
console.log(obj1[4]);
console.log(obj1[5]);
console.log(obj1[6]);
console.log(obj1[7]);















//№2⊗jsPmObEOD
//Создайте объект с ключами от 1 до 12, в качестве значений содержащий назваий месяцев  .  Выведите на экран все его элементы.
let obj2={1:'Январь' , 2: 'Февраль', 3: 'Март',  4:'Апрель' , 5: 'Май', 6: 'Июнь', 7: 'Июль' , 8:'Август' , 9: 'Сентябрь', 10: 'Октябрь',  11:'Ноябрь' , 12: 'Декабрь'};
console.log(obj2[1]);
console.log(obj2[2]);
console.log(obj2[3]);
console.log(obj2[4]);
console.log(obj2[5]);
console.log(obj2[6]);              
console.log(obj2[7]);
console.log(obj2[8]);
console.log(obj2[9]);
console.log(obj2[10]);
console.log(obj2[11]);
console.log(obj2[12]);
















//№3⊗jsPmObSK
//Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
let obj3={1:'name' , 2: 'surname', 3: 'patronymic' };
console.log(obj3[1]);
console.log(obj3[2]);
console.log(obj3[3]);














//№4⊗jsPmObEVM
//Исправьте ошибку, допущенную в следующем коде:
let obj4 = {x: 1, y: 2, z: 3};
console.log(obj4[x]);

let obj5 = {x: 1, y: 2, z: 3};
console.log(obj5[1]);









//№5⊗jsPmObEVM
//Исправьте ошибку, допущенную в следующем коде:
let obj6 = {x: 1, y: 2, z: 3};
let key1 = 'x';
console.log(obj6['1']);


let obj7 = {x: 1, y: 2, z: 3};
let key2= 'x';
console.log(obj7['1']);








//№6⊗jsPmObKA
//Получите массив ключей следующего объекта:
let obj8 = {x: 1, y: 2, z: 3};
let keys1=Objects.keys(obj8);
console.log(keys1);

















//№7⊗jsPmArEG
//Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
let arr1=[0,1,2,3];
let arr2=[0]
let arr3=[1];
let arr4=[2];
let arr5=[3];
console.log(arr5);











//№8⊗jsPmArEKA
//Пусть дан такой массив:
let arr6 = [0, 1, 2, 3, 4 ,5];
//Добавьте ему в конец элементы 4 и 5.
let arr7 = [0];
let arr8 = [1];
let arr9=  [2];
let arr10= [3];
let arr11= [4];
let arr12= [5];      



  






//№9⊗jsPmObLn
//Найдите количество элементов в следующем объекте:
let obj11 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj11).lenght);





//№10⊗jsPmObEVM
//Исправьте ошибку, допущенную в следующем коде:
let obj12= {x: 1, y: 2, z: 3};
console.log(obj12['x']);







let obj13= {x: 1, y: 2, z: 3};
console.log(obj13[1]);

















//№11⊗jsPmObEVM
//Исправьте ошибку, допущенную в следующем коде:
let obj14 = {x: 1, y: 2, z: 3};
let key3= 'x';
console.log(obj14[1]);















//№12⊗jsPmObAAO
//Не запуская код, определите, что выведется на экран в консоль:
console.log(typeof {x: 1, y: 2, z: 3});






//№13⊗jsPmObOI
//Скажите, что выведется в консоль в результате выполнения следующего кода:
let obj15 = {x: 1, y: 2, z: 3};
console.log('x' in obj15);
console.log('w' in obj15);









//№14⊗jsPmCdLME
//Проверьте, что переменная test больше 10.
let test1=10;

if(test1>10){
    console.log('+++');
} else {
    console.log('---');
}





//№15⊗jsPmCdLME
//Проверьте, что переменная test меньше 10.
let test2=10;
if(test2<10){
console.log('+++');
}else{
    console.log('---');
}










//№16⊗jsPmCdLME
//Проверьте, что переменная test больше или равна 10.
let test3=10;
if (test3<=10){


console.log('+++');
}else{
    console.log('---');
}


//№17⊗jsPmCdLME
//Проверьте, что переменная test больше 10.
let test4=10;


if(test4 > 10) {
console.log('+++');
}else{
    console.log('---');
}   








//№18⊗jsPmCdLOr
//Не запуская код определите, что выведется в консоль:

let num1=-10;
let num2=-10;



if(num1>=-10 || num2>=10){
    console.log('+++');
}else{
    console.log('---');
}





//№19⊗jsPmCdLOr
//Не запуская код определите, что выведется в консоль:
let num5= 0;
let num6=1;
let num7=2;
if (num5 == 0 || num6==1 || num7 == 2) {
	console.log('+++');
} else {
	console.log('---');
}







//№20⊗jsPmCdLA
//Проверьте, что переменная num больше  10  и меньше 20 .
let num12=10;
let num13=20;
if(num12>10 && num13<=20){
console.log('+++');

}else{
console.log('---')
}







///№21⊗jsPmCdLOr
//Не запуская код определите, что выведется в консоль:
let num17= 2;
let num18=1;
let num19=0
if(num17===0||num18>1 && num19<0){


console.log('+++');
}else{
    console.log('---');
}










//№22⊗jsPmCdLA
//Проверьте, что переменная num больше  10  и меньше 20 .
let num20=0;
let num21=1;
let num22=2;

if(num20>0, num21>=1,num22<2){

console.log('+++');
}else{
console.log('---');
}








//№23⊗jsPmCdShCh
//Не запуская код, определите, что выведется в консоль:

let test5=3;

if(test5) {
    console.log('+++');
}else{
    console.log('---')

}




//№24⊗jsPmCdBVC
//Проверьте, что переменная test равна true.
let test7=true;
if(test7===true){
console.log('+++');
} else {
    console.log('---')
}













//№25⊗jsPmCdShTCh
//Перепишите следующий код с использованием сокращенной формы:
let test8=true;


if(test8===true){
console.log('+++');
}else{
    console.log('---');
}









//№26⊗jsPmObTp
//Не запуская код, определите, что выведется в консоль:
console.log(typeof {x:1, y:2, z:3});
      



     




//№27⊗jsPmObTp
//Не запуская код, определите, что выведется в консоль:
console.log(typeof{x:1, y:2, z:3});

   
    
    




//№28⊗jsPmCdVC
//Даны переменные test10 и test11 Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.
 let test10=1;
 let test11=2;


 if(test10>test11){
    console.log('+++');
 } else {

    console.log('---');      
 }




        
let num8=1;



        switch(num9){
        case 1:(1);
        console.log(1);
        case 2:
        console.log(2);
        case 3:
        console.log(3);
         }




         //№29⊗jsPmCdShCS
         //Перепишите следующий код в сокращенной форме:
let test12=true;
let test13=true;
let test14=true;



//№30⊗jsPmCdShCS
//Перепишите следующий код в сокращенной форме:
if(test12===true || test13===false&&test14) {
    console.log('+++');
}else{
    console.log('---');
}

//№31⊗jsPmCdCfrm
//Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
let ok=confirm('Текст вопроса');



if(ok){
    console.log('вы ответили да');

}else{
console.log('вы ответили нет');              
}


    
//№32⊗jsPmCdNIF
//Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.
let num16=3;

if(num17 >=0){
    if(num18<=5){
console.log('меньше или равно 5');
    }else{
        console.log('больше 5');
    }
}else{
    console.log('меньше нуля');
}




//№33⊗jsPmCdExSCH
//Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
let str='12345';
let last=str[str.lenght1-1];               



if(last==5) {
    console.log('!');
}



//№34⊗jsPmCdVTE
//Пусть даны следующие переменные:
let a=2*(3-1);
let b=6-2;

4==4;



//№35⊗jsPmCdVTE
//Выведите в консоль все элементы следующего массива:
//let arr = ['a', 'b', 'c', 'd', 'e'];
for(let elem of arr5);{
    console.log(elem);
}








let num = 1;
let res;

if (num == 1 || num == 2) {
	res = 'a';
}

if (num == 3) {
res = 'b';
}

console.log(res);




let ok1=confirm('Текст вопроса');


if(ok2) {
console.log('вы ответили да');
}


else{
    console.log('вы ответили нет');
}







//№36⊗jsPmCdLOp
//Пусть даны следующие переменные:
let a1=2**4;
let b1=4**2;
console.log(a==b);


//№37⊗jsPmLpWl
//Выведите в консоль числа от 1 до 100.
let i1=1;

while(i1<=100){
    console.log(i1);
    i1++;
}




let i2=11;
while(i2<=33){
    console.log(i2);
    i1++;
}

//№38⊗jsPmCdShTCh
//Перепишите следующий код с использованием сокращенной формы:
 let test15=true;


 if(test15===true){
    console.log('+++');
 } else{
    console.log('---');
 }









 //№39⊗jsPmCdCWB
 //Вспомните и напишите, какие значения при приведении к логическому типу дают false.
let test16=false;
if(test16===false){
    console.log('+++');
}else{
console.log('---')
}


 
//№40⊗jsPmCdShFCh
//Перепишите следующий код с использованием сокращенной формы:
let test17=true;



if(test17==false){
    console.log('+++');
}else{
console.log('---')
}


//№41⊗jsPmCdENM
let test18=10;


if(test18 ==10){
    console.log('+++');
}


//№42⊗jsPmCdLSI
//Дан следующий код:
if (( ! num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}




//№43⊗jsPmCdLOr
//Не запуская код определите, что выведется в консоль:
let num3=-10;
let num4=-10;

if(num5>=0 || num6>=0){
    console.log('+++');
}else{
console.log('---');
}





//№44⊗jsPmCdSwCs
//Перепишите следующий код через switch-case:


let lang1='ru';


if(lang1=='ru'){
    console.log('рус');
} else if (lang1 =='en') {
    console.log('англ');
} else if(lang1=='de') {
console.log('нем');
}else{
console.log('язык не поддерживается')
}










//№45⊗jsPmCdBV
let test20=true2;



let test21=true3;
if(test21===true3){
    console.log('+++');
}else{
    console.log('---');
}



//№46⊗jsPmCdLOp
//Пусть даны следующие переменные:
let o=2*(3-1);
let p=6-2;
4==4








//№47⊗jsPmCdMst
//Код должен проверить первую цифру числа:
let num9

if(String(num9[0]===1)){
console.log('+++');
}else{
    console.log('---')
}



//№48⊗jsPmCdShCS
//Перепишите следующий код в сокращенной форме:
let test28=true;
let test29=true;
let test30=true;




if(test28===true||test29===false && test30===false){
    console.log('+++')

}else{
    console.log('---')
    
}  







//№49⊗jsPmCdLOp
//Пусть даны следующие переменные:
let q = 2**4
let r =4**2
16!=16                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      


                                                                                   

//№50⊗jsPmCdExSCH
//Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
let str2='a'
if(str2[0]==1){
    console.log('!')
}






//№51⊗jsPmCdSE
//Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test31='abc';
let test32='def'





let test33='ghi';
if(test31==test32){
    console.log('+++');
}else{
console.log('---');
}




//№52⊗jsPmCdShTCh
//Перепишите следующий код с использованием сокращенной формы:
let test34=true;



if(test34===true){
    console.log('+++');
}else{
    console.log('---');
}









//№53⊗jsPmCdShFCh
//Перепишите следующий код с использованием сокращенной формы:
let test35=true;
if(test35==false){
    console.log('+++');
}else{
console.log('---');
}


//№54⊗jsPmCdShCh
//Не запуская код, определите, что выведется в консоль:
let test36='';
if(test36){
console.log('+++');
}else{
console.log('---');
}   


//№55⊗jsPmCdShCS
//Перепишите следующий код в сокращенной форме:
let test37=true;
let test38=true;





if(test37 !==  false && test38==true){
console.log('+++');

}else{
    console.log('---');
}






//№56⊗jsPmCdScp
//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:
let age=17;



if(age>=18){
    let=adult=true;
}else{
let adult=false;
}



console.log(adult);




//№57⊗jsPmCdLA
//Проверьте, что переменная num больше нуля и меньше 5.
let num34=0;
let num35=5;
if(num34>0 && num35<5 ){
    console.log('+++');
}else{
console.log('---')
}



//№58⊗jsPmCdLOp
//Пусть даны следующие переменные:
let t=5*(7-4);
let u=1+2+7;


15>10;




//№59⊗jsPmCdCfrm
//Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.

let ok2=confirm('Текст вопроса');




if(ok3) {
    console.log('вы ответили да');

}else{
    console.log('вы ответили нет');
}



let num25 =1;
let res2;








if(num25=1  );




let res3;







//№60⊗jsPmCdTO
//Перепишите следующий код через тернарный оператор:
let num26=1;
let res4;





if(num26 >=0){
    res4='1';
}else{
    res4='2'
}



console.log(res4);








//№61⊗jsPmCdExSAL
//В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

let test39='12345'







if(str.lenght1 >=3) {
    console.log('!');
}







//№62⊗jsPmCdShCh
//Не запуская код, определите, что выведется в консоль:
let test40='abc';

if(test14){
    console.log('+++');
}else{
console.log('---');
}   



//№63⊗jsPmCdShCS
//Перепишите следующий код в сокращенной форме:


let test41=true;
let test42=true;



if (test41===true &&  test42===true){
    console.log('+++');
}else{
    console.log('---');
}









                                                                                                                                                                                                                                                                                                                                                              



//№64⊗jsPmCdENM
//Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет.
test42=10 

{
if(test42==10);
 console .log('+++');
}









//№65⊗jsPmCdTO
//Перепишите следующий код через тернарный оператор:
let num23=1;
let res7;





if(num23>=0){
    res7='1'
}else{
    res='2'
}



console.log(res);











let num27=1
let res5;



if(num27==1 || num27==2){
    res='a';
}


if(num27==3){
    res= 'b'
}

console.log(res);





//№66⊗jsPmCdBVC
//Проверьте, что переменная test равна false.
let test43=false;
if(test43===false){
    console.log('+++')
}
{
console.log('---') ;  
}






//67⊗jsPmCdScp
//Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:
let age1=17;



if(age>=18){
    let adult=true;
}else{
let adult=false;
console.log(adult);
}



//№68⊗jsPmCdLOp
//Пусть даны следующие переменные:
let v =2*(3-1);
let w =6-2;





//№69⊗jsPmCdExHP
//Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.
let min=10;




if( min>=0 && min<=14) {
console.log('1 четверть');
}



if(min>=15 && min<=29){
console.log('2 четверть');
}




if(min>=30 && min<=44){
console.log('3 четветрть');
}





if(min>=45 && min<=59){ 
console.log('4 четверть');
}












//№70⊗jsPmArMst
//Код должен вывести длину массива:
let arr13=[0,1, 2, 3, 4, 5];
console.log(arr13.lenght [5]); 




//№71⊗jsPmArMst
//Код должен вывести длину массива:
let arr14=[0, 1, 2, 3 , 4, 5] ;
console.log( arr14[0] +arr14[1] + arr14[2] + arr14[3] + arr14[4] + arr14[5]);



//№72⊗jsPmArMst
//Код должен вывести длину массива:
let arr15 = [0, 1, 2, 3 , 4 , 5];
console.log(arr15.length);

//№73⊗jsPmArMst
//Код должен вывести длину массива:

let arr16 = [0, 1, 2, 3, 4, 5];
console.log(arr16.lenght);











//№74⊗jsPmObMst
//Код должен вывести элемент объекта:
let obj26 = {x: 1, y: 2, z: 3};
console.log(obj26[1]);




//№75⊗jsPmObMst
//Код должен вывести элемент объекта по ключу из переменной:
let obj27 = {x: 1, y: 2, z: 3};
let key4 = '1';

console.log(obj27.key);


//№76⊗jsPmObMst
//Код должен вывести сумму элементов объекта:
let obj28= {x: 1, y: 2, z: 3};
let sum = obj28[1] + obj28[2] + obj28[3];

console.log(obj28);


//№77⊗jsPmObMst
//Код должен вывести количество элементов объекта:
let obj29 = {x: 1, y: 2, z: 3};
console.log (obj29.lenght[3])






//№78⊗jsPmCdPrm
//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
if(1=12){
    console.log('1')
}

{
    console.log('2')
}

{
    console.log('3')
}
{
    console.log('4')
}
{
    console.log('5')
}
{
    console.log('6')
}
{
    console.log('7')
}
{
    console.log('8')
}
{
    console.log('9')
}
{
    console.log('10')
}
{
    console.log('11')
}
{
    console.log('12')
}







//№79⊗jsPmCdPrm
//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
str2='abcde'
if(str2=a){
    console.log('+++')
}else{
    console.log('---')
}



//№80⊗jsPmCdPrm
//Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
arr1='12345'
if(arr1=3){
    console.log('+++')
}else{
    console.log('---')
}


//№81⊗jsPmCdPrm
//Дано трехзначное число. Найдите сумму цифр этого числа.
arr2='345'
if(arr2=12){
    console.log('+++')
}else{
    console.log('---')
}



//№82⊗jsPmCdPrm
//Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
arr3='123125456'
if(arr2=6){
    console.log('+++')
}else{
    console.log('---')
}


//№83⊗jsPmCdShCh
//Не запуская код, определите, что выведется в консоль:
let  test44 =null;




if(test44){
    console.log('+++');
}else{
    console.log('---');
}





//№84⊗jsPmCdShCh
//Не запуская код, определите, что выведется в консоль:
let test45;





if(test45){
    console.log('+++');
}else{
    console.log('---');
}







//№85⊗jsPmCdShFCh
//Перепишите следующий код с использованием сокращенной формы:
let test46=true;



if( !test46==true){
console.log('---');
}else{
console.log('+++')
}





//№87⊗jsPmCdEI
//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
 num27=1, 31
if(num27==1, 31){
    console.log('value 1');

}else if (num27==2){
    console.log('value 2');
}else if(num27==3){
    console.log('value 3')
}





//№88⊗jsPmCdEI
//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

num27=1, 31;
if(num27==1){
console.log('value1');


}else if(num27==2){
    console.log('value2');
}else if(num27==3){
     console.log('value3');
}else{
    console.log('неверное значение переменной num');
}




//№89⊗jsPmCdCWB
//Вспомните и напишите, какие    значения при приведении к логическому типу дают false.
 

let test47=1;


if(Boolean(test47)==true){
    console.log('+++');
}else{

    console.log('---');
}




//№90⊗jsPmCdShCS
//Перепишите следующий код в сокращенной форме:
let test48=true;
let test49=true;








if(test48==alse&&test48===true){
console.log('+++');
}else{
    console.log('---');
}




          




//№91⊗jsPmCdExSCH
//Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
let str3='a';


if(str3[a==1]){
    console.log('!');
}






//№92⊗jsPmCdShCS
//Перепишите следующий код в сокращенной форме:
let  test50=true;
let  test51=true;
let  test52=true;




if(test51===true&&test51===true&&test52===true){
console.log('---');
}else{
console.log('+++');
}






let num28=1;
let res6;



if(num28==1||num28==2){
res=('a');
}



if(num28==3){
res('b')
}




//№93⊗jsPmCdVTIe
//Не запуская код, определите, что выведется в консоль:
test49=3;
test49=2;
if(!test49==3, test49==2){
console.log('+++');
}else{
console.log('---')
}






//№94⊗jsPmLpFr
//С помощью цикла for выведите в консоль числа от 1 до 100.
for (let i=1;  i<=100; i++) {
console.log(i);
}




//№95⊗jsPmLpFr
//С помощью цикла for выведите в консоль числа от 11 до 33.
for(i=11; i<=33; i++){
console.log(i);
}





//№96⊗jsPmLpFr
//С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
for(i=0; i=>100; i+=2){
console(i);
}




//№97⊗jsPmLpFr
//С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for(i=1; i<=99; i+=2){                         
console.log(i);
}






//№98⊗jsPmLpFr
//С помощью цикла for выведите в консоль числа от 100 до 0.
for(i=100;i<0;i--){
console.log(i);       
}






//№98⊗jsPmLpFI
//Выведите в консоль все ключи следующего объекта:



let obj30={x:1, y:2,  z:3}
for(let key5 in obj30){
console.log('key');   
}






//№99⊗jsPmLpAFr
//Выведите в консоль все элементы следующего массива:
let arr89=['a', 'b', 'c', 'd', 'e']
for(let i=0; i<=arr.lenght-1;i++);


console.log(arr[i]);







//№100⊗jsPmLpBr
//Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
let arr90=[1, 2, 3, 4, 5]
for(let elem of arr90){
if(elem===3){
console.log('есть');
break;//выйдем из цикла
}
}








let arr92= [2, 5, 9, 15, 1, 4];
for(let elem of arr92){
console.log(elem);
}     







//№102⊗jsPmLpCd
//Дан следующий объект:
//let obj31 = {a: 1, b: 2, c: 3, d: 4, e: 5};
//Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj32= {a: 1, b: 2, c: 3, d: 4, e: 5};
for(let elem of arr){
if(elem % 2==0)
console.log(elem4)
}






//№103⊗jsPmLpSFm
//С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str1='';
for(let i=0;i<5;i++){
str1+='-'
}


console.log(str1);





//№104⊗jsPmLpSFm
//С помощью цикла сформируйте строку '123456789'.
let str5=''


for(let i=1;i<=9;i++){
    str5+=i;
}

console.log(str5);



//№104⊗jsPmLpSFm
//С помощью цикла сформируйте строку '987654321'
let str6=''



for(let i=9;i<=1;1++){
    str6+=i;
}


console.log(str6);        





//№105⊗jsPmLpNsd
//С помощью двух вложенных циклов выведите на экран следующую строку:
//111222333444555666777888999
for(let i1=1;i2<=9;i3++){
    for(let j1 =1; j2<=3;j3++){
    document.write(i);
}
}






//№106⊗jsPmLpNsd
//С помощью двух вложенных циклов выведите на экран следующую строку:
//11 12 13 21 22 23 31 32 33
for(let i1=11;i2<=33;i3++){
  for(let j4=3;j2<=1;j3++){

  }
  }




//№107⊗jsPmLpAF
//Используя цикл и метод push заполните массив числами от 1 до 10.
let arr34=[];



for(let i=1;i<=10;i++){
arr.push(i);
}

console.log(arr35);




//№108⊗jsPmLpOCh
//Дан объект:
for(let key6 in obj33){
obj33[key]=obj33[key];        
}



//№109⊗jsPmLpAEN
//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
let arr93=[1, 2, 3, 4, 5];
for (let i=1; i<arr93;i++){
console.log(arr93 [i-1]+arr93[i]);
}





//№109⊗jsPmLpND
//Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for(i=10;i<=1000;i++){
if(i[0]==1 || i[0]==2){
 console.log(i);
}
}











let arr94=[1, 2 , 3,  4,  5,  6,  7, 8 , 9];
for(let elem of arr94){
    let result;
}




if(elem % 2===0){
result=elem*elem;
}else if(elem % 3===0){
result=elem*elem*elem;
}


console.log(result);








//№110⊗jsPmLpAF
//Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr95=[];
for(i=10;i<='x';i++){
arr95.push;
console.log(i);
}







//№111⊗jsPmLpWl
//Выведите в консоль числа от 1 до 100.
let i3=1;
while(i3<=100){
 console.log(i3);
 i3++
}


//№112⊗jsPmLpAF
//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let i4=1;
while(i4<=7){
console.log(i4);
i++;  
}
  


//№113⊗jsPmLpAEC
//Дан следующий массив:
 let arr96=  [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3   ];



 let arr97=  [1, 2, 3, 4, 5, 6, 3, 2, 3 , 2 , 3 ];
 let counter=0;



 for(let elem of arr){
if(elem=='a') {
counter++;

}
}

console.log(counter);




//№114⊗jsPmLpFl
//Дан массив:
//let arr98 = ['a', 'b', 'c', 'd', 'e'];
//Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr99=['a', 'b', 'c', 'd', 'e'];
let flag=false;

for(let elem of arr){
if(elem==3) {
flag=true;
break;
}
}


if(flag===true){
console.log('+++');
}else{
console.log('---');
}





//№115⊗jsPmLpAEC
//Дан следующий массив:
//let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
//Подсчитайте количество цифр 3 в этом массиве.
let arr100=[1, 2, 3, 2, 4, 3, 5, 6 , 3 , 2, 3];
let counter1=0;



for(let elem4 of arr100){
if(elem=='a'){
counter++;
}
}
console.log(counter);





for (let key in obj34) {
	obj34[key] = obj[key34] * 2;
}




//№116⊗jsPmLpOCh
//Дан объект:
//let obj = {x: 1, y: 2, z: 3};
//Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
for(let key in obj){
obj33[key]=obj33[key]*2
}






//№117⊗jsPmLpAEN
//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
let arr101=[1, 2 , 3 , 4 , 5  ];





for(let i=1; i<arr.lenght;i++){
console.log(arr102[i-1]+arr102[i]);
}









//№117⊗jsPmLpNA
//Найдите сумму четных чисел от 2 до 100.
let res12=0;

for(let i =2; i<=100;i++){
res12=res12+i;
}

console.log(res12);







//№118⊗jsPmLpNA
//Найдите сумму нечетных чисел от 1 до 99.


for(let i=1; i<=99;i++){
res13=res13+i
}


console.log(res13);




for(let i=1; i<=9;i++){
let num=3;
}


console.log(num);









//№119⊗jsPmLpNA
//Найдите произведение целых чисел от 1 до 20.
let res21=0;
for(let i=1;i<=20;i++){
res21+=i
}

console.log(res21);






//№120⊗jsPmLpAF
//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr102=[];


for (let i=1;i<=7;i++){
arr102.push(i);
}
console.log(arr102);

 



//№121⊗jsPmLpAEA
//Дан массив:
let arr103=[2,5,9,3,1,4];
let res22=0;

for(let elem of arr104){
res22+=elem;
}



console.log(res22);







//№122⊗jsPmLpBr
//Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.


let arr104=[1, 2, 3, 4, 5];


for(let elem of arr105){
if(elem==3){
console.log('есть');
break;//выйдем из цикла
}
}





//let arr = ['a', 'b', 'c', 'd', 'e'];
//Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr105 = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem == 3) {
		console.log('+++');
	}
}





//№123⊗jsPmLpFl
//Дан массив:
let arr106 = ['a', 'b', 'c', 'd', 'e'];
//Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr107=[1, 2, 3, 4, 5];



for(let elem of arr108){
if(elem==3){
console.log('+++');
}
}






//№124⊗jsPmLpOCh
//Дан объект:
//let obj = {x: 1, y: 2, z: 3};
//Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
for(let key in obj35){
obj35[key]=obj35[key]*2;
}


console.log(obj34);






//№124⊗jsPmLpWl
//Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
num=300;
while(num<1000);
num=num*3;


console.log=num;                                                                                 





//№125⊗jsPmLpOCh
//Дан объект:
//let obj = {x: 1, y: 2, z: 3};
//Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let obj35={x:1,y:2,z:3};
for(let key4 in obj35[key5]){
obj36[key5]=obj36[key5]*1
}
console.log(obj37);










for(let i=0;i<=9;i++){
let num=3;






for(let j=0;j<=9;j++){
console.log(num);
   }
}









//№126⊗jsPmLpAF
//Используя цикл и метод push заполните массив числами от 1 до 10.
let arr108=[];


for(let i=1; i<=10; i++){
arr109.push(i);
}


console.log(arr109);//выведет  [1, 2, 3, 4 , 5]




//№127⊗jsPmLpAEC
//Дан следующий массив:
//let arr110 = [1, 2, 3, 
	//2, 4, 3, 5, 6, 3, 2, 3]; 
//Подсчитайте количество цифр 3 в этом массиве.
let arr111=[0,  1,  2  ,  3 ,  2  ,  4  ,  3 ,  5  ,  6  ,  3  ,  2  , 3];


let  counter2=0;





for(let elem of arr112)  {
  if(elem=='a'){
     counter++;
    }
}




console.log(counter);




//№128⊗jsPmLpMst
//Код должен вывести числа от 0 до 10:
for (let i = 0; i > 10; i++) {
	console.log(i);
}


for (let i = 0; i => 10; i++) {
	console.log(i);
}









//№129⊗jsPmLpMst
//Код должен вывести числа от 10 до 0:
for (let i = 10; i > 0; i++) {
	console.log(i);
}

for (let i = 10; i => 0; i++) {
	console.log(i);
}







//№130⊗jsPmMuAr

//Дан следующий массив:

let arr112 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
//Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
console.log(arr113[0][0][0]);//выведет 'a'
console.log(arr114[2][1][0]);//выведет 'k'















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































                                            

















































































































































































































































































































































































































































































































































































































              



























































































































































































































































































                         





































                                                                                              




















 
     








    













































































































































































































































































































     



































































































































     

































































































































































































































































                                                                                  


























































































































                                                       























































































































                                                                                                                                                                    



































































































































































































































































                 










































































































































































































































































                                    









































































































































































         















































































       













































































































































































































































































   





























          
























































































































                    




































































































































































































































































































































































































































































































































































































































































































        


































































































































































































         





















































































































































    













































































































































































































































































































































































































































































































































































































































               









                                                    




















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































