const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const onlineUsers = users.filter((json) => {
    return json.status === 'online'
})
console.log(onlineUsers)

const  usersOnlineNames = onlineUsers.map((json) => {
    return json.username
})

alert (`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)