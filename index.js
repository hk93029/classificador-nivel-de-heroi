const prompt = require("prompt-sync")({ sigint: true });

const hero = {
    name: '',
    xp: 0,
    level: ''
}

function startHero() {
    hero['name'] = prompt("Name: ");
    hero['xp'] = prompt("XP: ");
}

function rateHero(xp) {
    let rank = '';
    if (xp <= 1000) { // corrigido para de < para <=
        rank = 'Ferro';
    }
    else if (xp >= 1001 && xp <= 2000) {
        rank = 'Bronze';
    }
    else if (xp >= 2001 && xp <= 5000) {
        rank = 'Prata';
    }
    else if (xp >= 5001 && xp <= 7000) {
        rank = 'Ouro';
    }
    else if (xp >= 7001 && xp <= 8000) {
        rank = 'Platina';
    }
    else if (xp >= 8001 && xp <= 9000) {
        rank = 'Ascendente';
    }
    else if (xp >= 9001 && xp <= 10000) {
        rank = 'Imortal';
    }
    else if (xp >= 10001) {
        rank = 'Radiante';
    }

    hero['level'] = rank;
}

function outputMessage(hero) {
    console.log(`O Herói de nome ${hero['name']} está no nível de ${hero['level']}`);
}

startHero();
rateHero(hero['xp']);
outputMessage(hero);
