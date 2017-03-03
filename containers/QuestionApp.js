import React from 'react';
import ShowAddBtn from '../components/showAddBtn';
import AddQuestion from '../components/addQuestion';
import QuestionList from '../components/questionList';
import _ from 'lodash';
class App extends React.Component{
    constructor(props){
        super(props);
        var questionsArr = [
            {id:1,title:"三季度弗兰克手机就",description:"就是打开了房间考六级考试了的房间刻录机离开",voteCount:2},
            {id:2,title:"三季度弗兰克手机就",description:"就是打开了房间考六级考试了的房间刻录机离开",voteCount:1},
            {id:3,title:"三季度弗兰克手机就",description:"就是打开了房间考六级考试了的房间刻录机离开",voteCount:5}];
        this.state={
            questions:this.sortQuestion(questionsArr),
            formDidplay:false
        }
    }
    showAddClick(){
        this.setState({
            formDidplay:!this.state.formDidplay
        })
    }
    onNewQuestion(que){
        que.id = this.state.questions.length +1 ;
        var question = this.state.questions.concat(que);
        this.setState({
            questions:question
        })
    }
    sortQuestion(questions){
        questions.sort(function (a,b) {
            return b.voteCount - a.voteCount
        })
        return questions;
    }
    onVote(questionKey,newVote){
        var questions = _.uniq(this.state.questions);
        var index = _.findIndex(questions,function (list) {
            return list.id == questionKey;
        })
        questions[index].voteCount = newVote;
        questions = this.sortQuestion(questions)
        this.setState({
            questions:questions
        })
    }

    render(){
        return <div>
            <div className="jumbotron tex t-center">
                <div className="container">
                    <h1>React问答</h1>
                    <ShowAddBtn
                        showAddClick={this.showAddClick.bind(this)}
                    />
                </div>
            </div>
            <div className="main container">
                <AddQuestion
                    formDidplay ={this.state.formDidplay}
                    showAddClick   =  {this.showAddClick.bind(this)}
                    onNewQuestion = {this.onNewQuestion.bind(this)}
                />

                <QuestionList
                    questions = {this.state.questions}
                    onVote={this.onVote.bind(this)}
                />
            </div>
        </div>
    }
}
export default App;