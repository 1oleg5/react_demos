import {useNavigate} from 'react-router-dom';

export default function PostComponent ({item}) {
    let {title, id} = item;
    let navigator = useNavigate();
    return (
        <div>
            {title}
            <button onClick={() => navigator(id.toString())}> Click me to get details</button>
        </div>
    );
}