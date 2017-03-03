import React,{Component} from  'react';
class QuestionsItem extends Component {
    handlClickUp(){
        var newVote = Number.parseInt(this.props.voteCount + 1)
        this.props.onVote(this.props.questionKey,newVote)
    }
    handlClickDown(){
       var  newVote = Number.parseInt(this.props.voteCount - 1)
        this.props.onVote(this.props.questionKey,newVote);
    }
    render(){
        return <div className="media">
            <div className="media-left">
                <button className="btn btn-default"  onClick={this.handlClickUp.bind(this)}>
                    <span className="glyphicon glyphicon-chevron-up"></span>
                    <span className="vote-count">{this.props.voteCount}</span>
                </button>
                <button className="btn btn-default"  onClick={this.handlClickDown.bind(this)}>
                    <span className="glyphicon glyphicon-chevron-down"></span>
                </button>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        </div>
    }
}
export default  QuestionsItem