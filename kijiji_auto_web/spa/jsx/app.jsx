import React from 'react';
import ReactDOM from 'react-dom';

// import Main from './main'
import ProgressBar from './progressbar'
import ModularForm from './modularform'

class MainApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            Stage : 'login'
        }
    }
    render() {
        return  <div className="dzlyy-app my-5 container d-flex flex-column">
                    <ProgressBar Stage={this.state.Stage} />
                    <ModularForm />
                </div>;
    }
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('dzlyy-react-app')
)
