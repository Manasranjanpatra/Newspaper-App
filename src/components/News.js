import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import  Spinner from   './Spinner'


export class News extends Component {
   static defaultProps={
    pagesize:8,
    category: "science",


   }
   static PropTypes={
    pagesize:PropTypes.number,
    category:PropTypes.string
   }
  constructor() {
    super();
    console.log("hello iam a coder from news component");
    this.state = {
      articles:[],
      loading: false,
      page:1
    }
  }
  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=75d3c131517948b9805c6c925b07423f&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading:false})
    this.setState({ articles: parsedData.articles,totalArticles:parsedData.totalResults});
  }

  handelPrevClick = async ()=>{

    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=75d3c131517948b9805c6c925b07423f
    &page= ${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false})

    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
      
      

    })
  }
  handelNextClick = async ()=>{
    console.log("Next");
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)){
    }
    else{

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=75d3c131517948b9805c6c925b07423f&page= ${this.state.page+1}&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
          let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({loading:false})
       this.setState({
            page:this.state.page+1,
         articles: parsedData.articles
          
     })
    }
  }
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'4rem 0rem'}}> News monkey-Top headlines</h1>
        {this.state.loading &&<Spinner/> }
        <div className="row">
          { !this.state.loading && this.state.articles.map ((element) => {
            return <div className="col md-4" key={element.url}>
              <Newsitem tittle={element.tittle} description={element.description} imageurl={element.urlToImage} Newsurl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}

        </div>
        <div className= "container d-flex justify-content-between" >

            <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handelPrevClick}> &larr; Previous</button>

              <button disabled={this.state.page >=7} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next     &rarr;  </button>

        </div> 
      </div>  
    )
  }
}
export default News
