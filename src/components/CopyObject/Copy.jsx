import React from 'react';


function greet(name) {
    console.log(`Привет, ${name}!`);
}

function runCallback(cb) {
    cb('Алиса');
}

greet(runCallback); // Выводит на печать: «Привет, Алиса!» [3](https://sky.pro/wiki/javascript/peredacha-funktsiy-kak-parametrov-v-java-script-bez-eval/)

