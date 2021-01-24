import React, {createContext, useReducer} from 'react';
import Reducer from "./Reducer";

const initialState = {
    activeSection: null,
    currentId: 2,
    sections: [
        {
            id: 0,
            title: 'initial section 1',
            currentId: 3,
            messages: [
                {
                    id: 0,
                    title: 'Default question message 1',
                    time: new Date(2021, 0, 22),
                    isSuccess: true,
                },
                {
                    id: 1,
                    title: 'Default question message 2',
                    time: new Date(2021, 0, 21),
                },
                {
                    id: 2,
                    title: 'Default question message 2',
                    time: new Date(2021, 0, 21),
                }
            ]
        },
        {
            id: 1,
            title: 'initial section 2',
            currentId: 2,
            messages: [
                {
                    id: 0,
                    title: 'Default question message 11',
                    time: new Date(2021, 0, 20),
                    isSuccess: false,
                },
                {
                    id: 1,
                    title: 'Default question message 22',
                    time: new Date(2021, 0, 19),
                    isSuccess: true,
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