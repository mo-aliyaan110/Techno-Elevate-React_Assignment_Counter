import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/counter';

const Index = () =>{
    return(
        <React.Fragment>
            <Counter/>
        </React.Fragment>        
    )
}
ReactDom.render(<Index/>, document.getElementById('root'));
