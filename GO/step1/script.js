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

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let currencies = [...baseCurrencies, ...additionalCurrencies];
let missingCurrencies = 'USD';

function availableCurr(arr, missingCurr) {
    if (arr.length < 1) {
        return 'Нет доступных валют';
    }
    if (missingCurr) {
        currencies.forEach(function (item, i , currencies) {
            if (item === missingCurrencies) {
                delete arr.item
            }
        })
    }

}

console.log(availableCurr(currencies, missingCurrencies));



