import React, {useReducer, useRef} from 'react';
import css from './App.module.css';
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";

const reduser = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
    const [lastCat] = state.cats.slice(-1);
    const id = lastCat ? lastCat.id + 1 : 0;
            return {...state, cats:[...state.cats,{id, name:action.payload}]}
        case 'DELETE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index,1)
            return {...state}
        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.id + 1 : 0;
            return {...state, dogs:[...state.dogs,{id:idDog, name:action.payload}]}
        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog,1)
            return {...state}
        default:
            return {...state};

    }
}

export const App = () => {
    const catInp = useRef();
    const dogInp = useRef();
    const [state, dispatch] = useReducer(reduser,{cats:[], dogs:[]},(data)=>data)

    function createCat() {
        dispatch({type:'ADD_CAT', payload:catInp.current.value})
        catInp.current.value = '';
    }

    function createDog() {
        dispatch({type:'ADD_DOG', payload:dogInp.current.value})
        dogInp.current.value = '';
    }

    return (
        <div className={css.App}>
            <div>
                <input type="text" ref={catInp}/>
                <button onClick={createCat}>create_Cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <input type="text" ref={dogInp}/>
                <button onClick={createDog}>create_Dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}