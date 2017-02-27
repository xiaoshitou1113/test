import React,{Component} from 'react';
class ShowAddBtn extends Component {
    render(){
        return (
            <button id="add-question-btn" className="btn btn-success" onClick={this.props.showAddClick}>添加问题</button>
        )
    }
}
export default ShowAddBtn;