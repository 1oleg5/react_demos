import React from 'react';
import {useSelector} from "react-redux";
import Form from "../../components/Form/Form";
import Cars from "../../components/Cars/Cars";

const CarsPage = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Form/>
            <hr/>
            {loading && <h1>Loading................</h1>}
            <Cars/>
        </div>
    );
};

export default CarsPage;