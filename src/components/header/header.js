import React, { Component } from 'react';
import "./header.css";
import axios from "axios";

class Header extends Component {
    state={
        articles: [],
        myData:{}
    }
    handleClick=()=>{
        axios({
            method: 'get',
            url: 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-23&sortBy=publishedAt&apiKey=504922ecec8e4db09615b6307f99f5f1',
          })
            .then((response)=> {
             console.log(response.data.articles);
                this.setState({
                    articles: response.data.articles,
                    myData:{
                        author:response.data.articles.author,
                        newsHeading: response.data.articles.publishedAt
                    }
                })
            });
    }
    render() {
        return (
            <div onClick={this.handleClick} className="heading">
                Heamnt
                {this.state.articles && this.state.articles.map((item,index)=>{
                    return <div key={index}>
                        {item.author}
                    </div>
                })}
            </div>
        );
    }
}

export default Header;