// 1.k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing
// let k=prompt("k=");
// let n=prompt("n=");
// for(i=1; i<=n; i++){
//     console.log(k);
// }
// 2.a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin
//  let a=prompt("a=",);
//   let b=prompt("b=",);
// for(i=b; i<=a; i++){
//     console.log(i);
// }
// 3.a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin
// let a=prompt();
// let b=prompt();
// for(i=a; i<a; i--){
//    console.log(i);
   
// }

// 4.1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing
let konfet=10000;
// for(i=1; i<=10; i++){
//     console.log(i,"-kg konfet",i*konfet,"som");
// }
// 5.1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping
// for(i=1; i<=10; i++){
//     console.log(i,"-kg konfet",i*konfet/10,"som");
// }
// 6.1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping
// for(i=12; i<=20; i+=2){
//     console.log(i/10,"-kg konfet",i*konfet/10,"sum");
// }
// 7.a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing
// let result=0
// for(i=a; i<b; i++){
//    result(i)
// }
// 8.a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing
// let kopaytma=0
//  for(i=a; i<b; i++){
//     if(i>a && i<b){
//     kopaytma*=i}
//     console.log(i);
//  }
//  console.log(kopaytma);
// 9.a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping
// kvadrat_yigindi=0;
// for(i=a; i<b; i++){
//     kvadrat_yigindi+=i*i;
//         console.log("kvadrat_yigindi",kvadrat_yigindi);
//      }
// 10.n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n
// let n=prompt("n=",)
// let yigindi=0
// for(i=1; i<=n; i++){
//     yigindi+=1/i;
//     console.log(1/i);
// }
// console.log("yigindi=",yigindi);
// 11.n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing
// let x=0
// for(i=1; i<n; i++){
//     let k=i%2
//     if(k==1){
//         x+=i;
//         console.log(i)
//     }
    
// }
// console.log(x);
// 12.n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing

// for(i=1; i<n; i++){
//    let k=i%2
//    if(k==0){
//       console.log(i);
//    }
// }
// 13.n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing
// let b=prompt();
// let son=prompt("son kirit");
// for(let i=1; i<=son;i++){
//     if(son%i==0){
//         b++;
//     }

// }
// if(b>=3){
//     console.log("Murakkab son");

// }
// else{
//     console.log("Murakkab son emas");
// }
// 14.n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring
// let juft_son_kvadrati=[];
// let toq_son_kvadrati=[];
// let n=prompt("n=",)
// for(i=1; i<n; i++){
//    let qoldiq=i%2;
//    if(qoldiq==0){
//       juft_son_kvadrati.push(i*i);
//       console.log(juft_son_kvadrati,"juft son kvadrati");
//    }
//    else if(qoldiq==1){
//       toq_son_kvadrati.push(i*i);
//       console.log(toq_son_kvadrati,"toq son kvadrati");
//    }
// }
// 15.n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin
// let n=prompt();
// for(i=n; i>0; i--){
//    console.log(i);
// }

// 16.n son berilgan 0 va ngacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing
// for(i=0; i<n; i++){
//    let qoldiq_5=i%5;
//    if(qoldiq_5==0){
//       console.log();
//    }
//    else{
//       console.log(i);
//    }
// }
// 17.n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing
// let kopaytma=1
// for(i=1; i<n; i++){
//    kopaytma*=i;
//    console.log("kopaytma",kopaytma);
// }
// 18.n butun son berilgan 1 sikldan foydalanib quydagi yigindini hisoblovchi dastur tuzing. 1!+2!+..+n!
// let kopaytma=1
// let yigindi=0
// let n=prompt("n=",)
// for(i=1; i<=n; i++){
//    kopaytma*=i;
//    yigindi+=kopaytma
//    console.log("yigindi",yigindi);
// }
// 19.n butun son va x haqiqiy sonlar berilgan (n>0) Quydagi yig'indi hisoblang.1+x+x2/2!+x3/3!+..+xn/n!
// let yigindi=0
// let n=prompt();
// for(let i=0; i<n; i++){
//    yigindi+=1+i
// }

// console.log(yigindi);

// 20.n va x sonlar berilgan 0 dan n gacha sonlar orasida x ga bo'linadigan sonlarni topuvchi dastur tuzing let;
// let n=prompt("n=",);
// let x=prompt("x=",);

// for( let i=1; i<n; i++){
//    let qoldiq=i%x;

//    if(qoldiq==0){
      
//       console.log(i);
//    }
// }
// 21.n va x sonlar berilgan quydagi yigindini topuvchi dastur tuzing. 1(1,2,3…x) + 2(1,2,3..x) + .. + n(1,2,3,..x)
// let n=prompt("n=",);
// let x=prompt("x=",);
// let yigindi_x=0;
// let yigindi_n=0;
// for(i=0; i<x; i++){
// yigindi_x+=(i);
// console.log(yigindi_x);
// }
//    for(i=1; i<n; i++){
//       yigindi_n+=(i);
//       console.log(yigindi_y);
//    }

// console.log(yigindi_x*yigindi_y);








