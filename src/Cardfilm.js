import React, { Component } from 'react';

class Cardfilm extends Component {
    render() {
        return (
            <div style={{ display: 'flex', width: '1230px', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {this.props.movies.filter(el=> el.name.toUpperCase().includes(this.props.inputvalue.toUpperCase()) && el.rate<=this.props.rating).map(el => {
                    return (
                        <div style={{ border: 'solid', width: '315px', height: '260px', textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>
                            <div>
                                <p>{"".padEnd(el.rate,"★")}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={el.img} style={{ width: '250px', marginTop: '10px', height: '155px' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <p> {el.name}-{el.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
        
    }
}

export default Cardfilm;