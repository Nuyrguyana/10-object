const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const result = handleObjects(student, 'programmingLanguage');
console.log('result', result);

function handleObjects(obj, key, action) {
if (action === 'get'){
    return obj[key]  // ???
} else if (action === 'add') {
    obj.key = ''
    return student
} else if (action === 'delete') {
    delete obj.key
    return student
} else {
    return obj
}
}