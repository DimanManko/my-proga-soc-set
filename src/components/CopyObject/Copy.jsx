import React from 'react';


export const ObjectCopy = () =>{
    return (
        <h3>Работа с копией объекта</h3>
    )
}

const A = {
    name: "Dima",
    protocol: "https",
    isOnline: true,
    students: ["Ivan", "andrey", "sveta"],
    classroom:{
        teatcher:{
            name:"wew",
            age: 18
        }
    }
}
A.students.push("Dima")
const B = {...A}


console.log(B)