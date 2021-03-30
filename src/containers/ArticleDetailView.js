import React, { Component } from 'react'
import axios from 'axios'
import {Card} from 'antd'
import PostForm from '../components/PostForm'
import {base_URL} from '../services/apiUrl'


export class ArticleDetailView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Artdetail:{}
        }
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`${base_URL}/api/${articleID}`)
        .then(res => {
            this.setState({Artdetail:res.data})
        })
    }
    // handleDelete = (event) => {
    //     const articleID = this.props.match.params.articleID;
    //     axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
    //     this.props.history.push('/')
    //     this.forceUpdate()

    // }
    
    render() {
        return (
            <div>
                <Card >
                {this.state.Artdetail.title}
                {
                    <div> {this.state.Artdetail.content} </div>
                    
                }

                </Card>
                <PostForm requestType="put"
                articleID={this.props.match.params.articleID} 
                btnText="Update"/>

                <form onSubmit = {this.handleDelete}>
                    <button type="submit" >Delete</button>
                </form>
                
            </div>
        )
    }
}

export default ArticleDetailView
