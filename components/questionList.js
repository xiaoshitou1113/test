import React,{Component} from 'react';
import QuestionsItem from './questionsItem';
class QuestionList extends Component{
    render(){
        var onVote = this.props.onVote;
        var questions = this.props.questions;
        var qustionList = questions.map(function(list){
             return <QuestionsItem
                    key={list.id}
                    title={list.title}
                    derscription={list.derscription}
                    voteCount = {list.voteCount}
                    onVote={onVote}
                    questionKey={list.id}
                    />
                })
        return (
            <div id="questions" className="">
                {qustionList}
            </div>
        )
    }
}
export default QuestionList;