import React,{Component} from 'react';
class AddQuestion extends Component {
    submitHandle(e){
        e.preventDefault();
        return false;
    }
    conForm(){

    }
    render(){
        var styObj = {
            display:this.props.formDidplay?'block':'none'
        };
        return (
            <form name="addQuestion" className="clearfix" style={styObj} onSubmit={this.submitHandle}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
                </div>
                <textarea className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <button className="btn btn-default pull-right" onClick={this.props.showAddClick}>取消</button>
            </form>
        )
    }
}
export default AddQuestion;
