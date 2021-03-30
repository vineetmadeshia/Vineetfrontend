import React, { Component } from 'react'
import axios from 'axios'
import {base_URL} from '../services/apiUrl'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             content:''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e, requestType,articleID) => {
        e.preventDefault()
        console.log(this.state)
        switch(requestType){

        case 'post':
        axios.post(`${base_URL}/api/`,this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        case 'put':
            axios.put(`${base_URL}/api//${articleID}/`,this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

    }

    }
    
    render() {
        const {title,content} = this.state
        return (
            <div>
                <form onSubmit={(event)=>this.submitHandler(event,this.props.requestType,this.props.articleID )}>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="content" value={content} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">{this.props.btnText}</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
