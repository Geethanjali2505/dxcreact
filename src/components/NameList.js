import React from 'react'

function NameList() {
        const persons = [
            {
                id:1,
                name: 'selena',
                age: 30,
                skill: 'react'
            },
            {
                id:1,
                name: 'ariana',
                age: 30,
                skill: 'flutter'
            },
            {
                id:1,
                name:'camila',
                age: 30,
                skill: 'java'
            },
            {
                id:1,
                name:'geethanjali',
                age: 30,
                skill: 'spring'
            }
        ]
    


    /* const names = ['selena', 'ariana', 'camila', 'dxc','react']
    const namesList = names.map(name => <h2>{name}</h2>) */
    const personList = persons.map(person => <h2> i am {person.name},i am {person.age} years old and my skill is {person.skill}</h2>)

    return (
        <div>{personList}</div>
    )
 }

export default NameList