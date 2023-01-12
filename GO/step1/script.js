'use strict';

// const personalPlanPeter = {
//     name: "Peter",
//     age: "22",
//     skills: {
//         languages: ['ru', 'eng', 'gb'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(ob) {
//         let str = '';
//         let age = '';
//         let sk = ob.skills.languages;
//         let la = '';
//         for (let key in personalPlanPeter) {
//             if (key === 'age') {
//                 age = personalPlanPeter[key];
//             }
//            la = sk.join(' ').toUpperCase();
//         }
//         str += `Мне ${age} и я владею языками: ${la}'`;
//        return str;
//
//     }
// };
// function showExperience(plan) {
//         for (let key in plan) {
//         if (key === 'exp') {
//             return plan[key];
//         }
//         if (typeof(plan[key]) === 'object') {
//             for (let i in plan[key]) {
//                 if (i === 'exp') {
//                     return plan[key][i];
//                 }
//             }
//         }
//     }
// }
// function showProgrammingLangs(plan) {
//
//     let str = '';
//     let lang = [];
//     let exp = [];
//     let skills = {};
//
//     for (let key in plan) {
//         if (typeof(plan[key]) === 'object') {
//             for (let i in plan[key]) {
//                 if (i === 'programmingLangs') {
//                     for (let j in plan[key][i]) {
//                         lang.push(j);
//                         exp.push(plan[key][i][j]);
//                     }
//                 }
//             }
//         }
//     }
//     for(let k = 0; k < lang.length; k++) {
//         skills[lang[k]] = exp[k];
//     }
//     for (let l in skills) {
//         str += `Язык ${l} изучен на ${skills[l]}%\n`;
//     }
//     return str;
// }

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) {
//     return 'Семья состоит из: ' + arr.join(' ');
// }
// console.log(showFamily(family));
//
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
//     return favoriteCities.join('\n').toLocaleLowerCase();
// }
// console.log(standardizeStrings(favoriteCities));

// const someString = 'This is some strange string';
// let reverse = function (str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// let currencies = [...baseCurrencies, ...additionalCurrencies];
// let missingCurrencies = 'USD';
//
// function availableCurr(arr, missingCurr) {
//     if (arr.length < 1) {
//         return 'Нет доступных валют';
//     }
//     if (missingCurr) {
//         currencies.forEach(function (item, i , currencies) {
//             if (item === missingCurrencies) {
//                 delete arr.item
//             }
//         })
//     }
//
// }
//
// console.log(availableCurr(currencies, missingCurrencies));



const shoppingMallData = {
    shops: [
        {width: 10, length: 5},
        {width: 15, length: 7},
        {width: 20, length: 5},
        {width: 8, length: 10}
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};





function isBudgetEnough(data) {
    const {shops} = shoppingMallData;
    let arrS = [];
    let arrV = [];
    shops.forEach(function (shop, i) {
        let s = shop.width * shop.length;
        arrS.push(s);
        let v = shop.width * shop.length * shoppingMallData.height;
        arrV.push(v);
    });
    let arrSumS = 0;
    arrS.forEach(function (item, i) {
        arrSumS += item;
    });
    let arrVSumV = 0;
    arrV.forEach(function (item, i) {
        arrVSumV += item;
    });
    let money = arrVSumV * shoppingMallData.moneyPer1m3;
    console.log(money);
    if (shoppingMallData.budget > money) {
        return 'Бюджета недостаточно';
    } else {
        return 'Бюджета достаточно';
    }
}
console.log(isBudgetEnough(shoppingMallData));

