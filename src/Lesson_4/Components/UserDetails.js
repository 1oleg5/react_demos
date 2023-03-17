import {useLocation} from 'react-router-dom';

export default function UserDetails() {
    let location = useLocation();
    let {state: user} = location;
    return (
        <div>
            {user.id} - {user.name} - {user.username} - {user.email} --
             {JSON.stringify(user.address)}
        </div>
    );
}