import React from 'react';

export class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = { message: "Pick a note!" };
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-sm-offset-3
            col-md-offset-3" align="center">
              <div className="gap">
                <h1> { this.state.message } </h1>
              </div>
            </div>
        )
    }
}