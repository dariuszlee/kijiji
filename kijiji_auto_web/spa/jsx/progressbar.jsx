import React from 'react'

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Stage : props.Stage }
    }

    render(){
        return <div className="dzlyy-progress-bar-container dzlyy-line-container mx-auto">
                    <div className="dzlyy-line-img"/>
                    <div className={ "dzlyy-line-bubble dzlyy-bubble-1 " + (this.state.Stage === "login" ? "dzlyy-bubble-active" : "dzlyy-bubble-inactive")} />
                    <div className={"dzlyy-line-bubble dzlyy-bubble-2 " + (this.state.Stage === "accounts" ? "dzlyy-bubble-active" : "dzlyy-bubble-inactive")} />
                    <div className={"dzlyy-line-bubble dzlyy-bubble-3 " + (this.state.Stage === "ads" ? "dzlyy-bubble-active" : "dzlyy-bubble-inactive")} />
                    <div className={"dzlyy-line-bubble dzlyy-bubble-4 " + (this.state.Stage === "active" ? "dzlyy-bubble-active" : "dzlyy-bubble-inactive")} />
                    <div className={"dzlyy-bubble-text-1 " + (this.state.Stage === "login" ? "dzlyy-text-active" : "dzlyy-text-inactive")}>Login</div>
                    <div className="dzlyy-bubble-text-2">Connect</div>
                    <div className="dzlyy-bubble-text-3">Choose Ads</div>
                    <div className="dzlyy-bubble-text-4 pt-auto">Running Ads</div>
                </div>;
    }
}
