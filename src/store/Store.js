import React, {createContext, useReducer} from 'react';
import Reducer from "./Reducer";

const initialState = {
    activeSection: null,
    currentId: 10,
    sections: [
        {
            id: 4,
            title: 'default section',
            currentId: 15,
            messages: [
                {
                    id: 1,
                    title: 'Default question message 1',
                    time: 'time1',
                },
                {
                    id: 2,
                    title: 'Default question message 2',
                    time: 'time2',
                }
            ]
        },
        {
            id: 5,
            title: 'default  2',
            currentId: 18,
            messages: [
                {
                    id: 1,
                    title: 'Default question message 11',
                    time: 'time',
                },
                {
                    id: 2,
                    title: 'Default question message 22',
                    time: 'time',
                }
            ]
        }

    ]
}

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )

}

export const Context = createContext(initialState);

export default Store;