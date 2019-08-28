import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center'}}>
                <img src="https://hover.hillsclerk.com/images/loading.gif" />
            </div>
        );
    }
}

export default Spinner;