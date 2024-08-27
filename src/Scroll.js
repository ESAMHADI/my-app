import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '4px solid black', height: '800px'}}>
            {props.children}  
            {/* children indicate to <CardList> conmponent */}
        </div>
    );
}
export default Scroll;