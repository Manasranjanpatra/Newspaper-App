import React, { Component } from 'react'

export class Newsitem extends Component {
    // constructor(){
    //     super();
    //     // console.log("hello iam a coder");
    // }
    render() {
        // console.log("manas ranjan patra")
        let {tittle,description,imageurl,Newsurl,author,date}= this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/EC1E/production/_130264406_whatsappimage2022-10-29at12.02.24.jpg":imageurl}className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{!description?"This is a news from the city newyork and it is very helpful news for those who need to ba afraid.":description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"TheMANAS":author} on {date} </small></p>
                        <a rel="noreferrer" href={Newsurl} target=" _blanck" className="btn  btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Newsitem
