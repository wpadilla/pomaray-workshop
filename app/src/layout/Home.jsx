import * as React from 'react';
import Main from "./Main/Main";

export default class Home extends React.Component{
    state = {
        sidenavIsOpen: false
    };
    
    render() {
        return (
            <>
                <Main />
            </>
        )
    }
}