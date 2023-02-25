const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())

}
const getUser = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
}
export {getUsers, getUser}