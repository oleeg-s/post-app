import React from 'react';


const MyContext = React.createContext();

const Example = () => {
    return (
        <MyContext.Provider value={'Oleg'}>
            <Wrapper/>
        </MyContext.Provider>
    )
}

const Wrapper = () => {
    return (
        <Name/>
    )
}

const Name = () => {
    return (
        <MyContext.Consumer>
            {
                (value) => {
                    return (
                        <div>
                            My name is {value}
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}

export default Example