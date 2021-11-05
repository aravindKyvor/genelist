import React, { Component } from 'react'
import axios from 'axios'

export class searchposts extends Component {
    
      getQuery = () => {
        axios.get(`http://127.0.0.1:8000/api/SearchPost?q=${this.state.query}`)
        .then(res => {
            this.setState({
                data: res.data
            });
        })
      }
      handelChange = (e) => {
        this.setState({ query: this.search.value},
            () => {
                this.getQuery()
            })
    }
    render() {
        return (
            <div>
                <form>
            <input
                placeholder="Search..."
                name="q"
                ref={input => this.search = input}
                method="get" 
                onChange={this.handelChange}

               
               
            />
        
        </form>
                
            </div>
        )
    }
}

export default searchposts
