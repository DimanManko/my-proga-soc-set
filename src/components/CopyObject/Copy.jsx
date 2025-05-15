import React from 'react';
import axios from "axios";


function greet(name) {
    console.log(`Привет, ${name}!`);
}

function runCallback(cb) {
    cb('Алиса');
}

greet(runCallback); // Выводит на печать: «Привет, Алиса!» [3](https://sky.pro/wiki/javascript/peredacha-funktsiy-kak-parametrov-v-java-script-bez-eval/)

let Users = [
        {
            id: 1,
            photoUrl: "Dima.png",
            followed: false,
            fullName: "Dima",
            status: "Я крутой программист",
            location: {city: "Khabarovsk", country: "Russia"}
        },
        {
            id: 2,
            photoUrl: "Oleg.png",
            followed: true,
            fullName: "Oleg",
            status: "Люблю кушать сосисечки",
            location: {city: "Penza", country: "Russia"}
        },
        {
            id: 3,
            photoUrl: "AntonReva.png",
            followed: false,
            fullName: "Anton Reva",
            status: "Крутой брокер, хочешь правильно вложиться - это ко мне!",
            location: {city: "Piter", country: "Russia"}
        },
        {
            id: 4,
            photoUrl: "Nikita.png",
            followed: true,
            fullName: "Nikita",
            status: "Рулька с утра, это всё о чём можно мечтать",
            location: {city: "Vladivostok", country: "Russia"}
        },
        {
            id: 5,
            photoUrl: "Kot.png",
            followed: false,
            fullName: "Kot",
            status: "Могу свалить с работы, сказав, что меня затапило",
            location: {city: "Sochi", country: "Russia"}
        },
        {
            id: 6,
            photoUrl: "logo.png",
            followed: true,
            fullName: "Anton",
            status: "Как же меня все достали",
            location: {city: "Penza", country: "Russia"}
        },
        {
            id: 7,
            photoUrl: "logo.png",
            followed: true,
            fullName: "Artur",
            status: "Играю в PUBG",
            location: {city: "Khabarovsk", country: "Russia"}
        }
    ]

