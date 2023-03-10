import {useEffect, useState} from "react";
import ApiService from "../Services/apiService";
import UserComponents from "../Components/UserComponents";
import {Outlet} from "react-router-dom";

export default function Users() {
    let apiService = new ApiService('users');
    let [users, setUsers] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setUsers(value));
    },[]);
    return (
        <div>
            {
                users.map(value => <UserComponents key={value.id} item={value}/>)
            }

            <hr/>
            <div>
                <h3>details</h3>
                <Outlet/>

            </div>
        </div>
    );
}
