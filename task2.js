
const ordersArr = [4, 2, 1, 3]
const people = [
    {
        id: 1,
        name: 'Максим'
    },
    {
        id: 2,
        name: 'Николай'
    },
    {
        id: 3,
        name: 'Ангелина'
    },
    {
        id: 4,
        name: 'Виталий'
    },
]

const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)

function giveTalonsInOrder(people, ordersArr) {
    return ordersArr.map((order) => {
        return people.find((person) => {
            return person.id === order
        })
    })
}