import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>ESPN-Headlines</h2>
        <div className="row my-5">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />         
          </div>
          <div className="col-md-4">
            <NewsItem />         
          </div>
        </div>
      </div>
    )
  }
}
