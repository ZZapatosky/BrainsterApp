
import React, { Component } from "react";
import axios from "axios";
import Footer from './Footer.js';
import 'font-awesome/css/font-awesome.min.css';
import ImgPost from "./ImgPost.png"
import { useMediaQuery } from 'react-responsive';

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}




class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get("https://brainsterboxapi.herokuapp.com/games/" + id)
      .then(res => {
        this.setState({
          post: res.data
        })
      })
  }
  render() {
    const post = this.state.post ? (
      <div className="post container-fluid  col-md-9" >
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="collapse navbar-collapse justify-content-center" >
            <ul className="navbar-nav ">
              <li className="nav-item mr-3">
                <p ><i className="fa fa-clock-o"></i> <b>Time Frame </b>
                  {this.state.post.timeFrame}</p>      </li>
              <li className="nav-item mr-3">
                <p ><i className="fa fa-users"></i> <b>Group Size </b>
                  {this.state.post.groupSize}</p>
              </li>
              <li className="nav-item mr-3">
                <p ><i className="fa fa-paint-brush"></i> <b>Materials </b>
                  {this.state.post.materials}</p>
              </li>
              <li className="nav-item mr-3">
                <p ><i className="fa fa-university"></i> <b>Level </b>
                  {this.state.post.level}</p>
              </li>
            </ul>
          </div>
        </nav> <br /><br />
        <p className="list-item">{this.state.post.description}</p><hr />
        <p className="list-item"><b>Чекор 1</b><br />{this.state.post.steps[0].stepDescription}</p><hr />
        <p className="list-item"><b>Чекор 2</b><br />{this.state.post.steps[1].stepDescription}</p><hr />
     </div>
    
    ) : (
        <div className="center">loading...</div>
      )
    return (

      <div className="center  " >
<Mobile>
        <header className=" aboutImg  justify-content-center  " style={{ marginTop:"-16rem" }} >
          <img src={ImgPost} alt="" style={{ width: "100%", height: "150%" }}></img>
        </header>
        <br/><br/><br/>
        {post}
        <br/><br/>
        <Footer/>
</Mobile>
<Desktop>
    <header className=" aboutImg  justify-content-center  " style={{ marginTop:"-6rem" }} >
      <img src={ImgPost} alt="" style={{ width: "100%", height: "150%" }}></img>
    </header>
      {post}
      <br/><br/><br/><br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>  
    <Footer/>
</Desktop> 
      </div>
    )
  }
}
export default Post;
