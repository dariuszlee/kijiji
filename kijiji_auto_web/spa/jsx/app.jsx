import React from 'react';
import ReactDOM from 'react-dom';

// import Main from './main'
import ProgressBar from './progressbar'
import ModularForm from './modularform'
import AppControls from './appcontrols'

class MainApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            Stage : 'login'
        }
    }

    changeStage(newStage) {
        this.state = {
            Stage : newStage
        }
    }

    render() {
        return  <div className="dzlyy-app mt-3 mb-5 d-flex flex-column">
                    <ProgressBar Stage={this.state.Stage} />
                    <div className="d-flex flex-fill">
                        <AppControls />
                        <ModularForm />
                    </div>
                </div>;
    }
}

ReactDOM.render(
    <MainApp />,
    document.getElementById('dzlyy-react-app')
)
