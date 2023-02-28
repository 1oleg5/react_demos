const getSpace = () => {
    return fetch('https://api.spacexdata.com/v3/launches')
        .then(value => value.json())

}
export default getSpace;