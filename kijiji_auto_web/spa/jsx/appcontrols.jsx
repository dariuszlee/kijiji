import React from 'react'

export default class AppControls extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Stage : props.Stage }
    }

    next_stage() {
        var nextStage = ""
        switch(this.state.Stage){
            case "login":
                nextStage = "accounts"
                break;
            case "accounts":
                nextStage = "ads"
                break;
            case "ads":
                nextStage = "active"
                break;
            default:
                break;
        }
        return nextStage
    }

    back_stage() {
        var nextStage = ""
        switch(this.state.Stage){
            case "accounts":
                nextStage = "login"
                break;
            case "ads":
                nextStage = "accounts"
                break;
            case "active":
                nextStage = "ads"
                break;
            default:
                break;
        }
        return nextStage
    }

    render(){
        return  <div className="dzlyy-global-controls">
                    <div className="dzlyy-control"> 
                        <div className="dzlyy-icon-wrapper">
                            <i className="dzlyy-control-icon fas fa-arrow-right fa-2x" />
                        </div>
                    </div>
                    <div className="dzlyy-control"> 
                        <div className="dzlyy-icon-wrapper">
                            <i className="dzlyy-control-icon fas fa-arrow-left fa-2x" />
                        </div>
                    </div>
                </div>;
    }
}
