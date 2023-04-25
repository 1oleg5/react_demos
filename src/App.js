import React from 'react';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useSelector} from "react-redux";

const App = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Form/>
            <hr/>
            {loading&&<h1>Loading................</h1>}
            <Cars/>
        </div>
    );
};

export default App;