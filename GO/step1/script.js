'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "22",
    skills: {
        languages: ['ru', 'eng', 'gb'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(ob) {
        let str = '';
        let age = '';
        let sk = ob.skills.languages;
        let la = '';
        for (let key in personalPlanPeter) {
            if (key === 'age') {
                age = personalPlanPeter[key];
            }
           la = sk.join(' ').toUpperCase();
        }
        str += `Мне ${age} и я владею языками: ${la}'`;
       return str;

    }
};

function showExperience(plan) {
        for (let key in plan) {
        if (key === 'exp') {
            return plan[key];
        }
        if (typeof(plan[key]) === 'object') {
            for (let i in plan[key]) {
                if (i === 'exp') {
                    return plan[key][i];
                }
            }
        }
    }
}
function showProgrammingLangs(plan) {

    let str = '';
    let lang = [];
    let exp = [];
    let skills = {};

    for (let key in plan) {
        if (typeof(plan[key]) === 'object') {
            for (let i in plan[key]) {
                if (i === 'programmingLangs') {
                    for (let j in plan[key][i]) {
                        lang.push(j);
                        exp.push(plan[key][i][j]);
                    }
                }
            }
        }
    }
    for(let k = 0; k < lang.length; k++) {
        skills[lang[k]] = exp[k];
    }
    for (let l in skills) {
        str += `Язык ${l} изучен на ${skills[l]}%\n`;
    }
    return str;
}

