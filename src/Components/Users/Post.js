export default function Post({item, choseUser}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <p>{item.title}</p>
            <button onClick={()=> {
                choseUser(item.body)
            }}>PostDetails</button>
        </div>);
}