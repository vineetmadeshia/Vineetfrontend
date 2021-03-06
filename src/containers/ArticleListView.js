import React, { Component } from 'react'
import Article from '../components/Article'
import axios from 'axios'
import PostForm from '../components/PostForm'


class ArticleListView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             articles :[]
        }
    }

    componentDidMount(){
        
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({articles: res.data})
                
            
        })
    }
    
    render() {
        const {articles} = this.state
        return (
            <div>
                List of articles
                {
                    articles.length ?
                    articles.map(art => <div key={art.title}> {art.title} </div>):
                    null
                }
                <PostForm requestType="post"
                articleID={null}
                btnText="Create" />
            </div>
        )
    }
}

export default ArticleListView
