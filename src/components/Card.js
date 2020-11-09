import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';
import {
  Card, CardImg, CardText, CardBody,
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive'




class CardNew extends Component {


  state = {
    id: [],
  }
  componentDidMount() {
    axios.get(`https://brainsterboxapi.herokuapp.com/games`)
      .then(res => {
        this.setState({ id: res.data });
      })
  }


  render() {

    const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 })
      return isMobile ? children : null
    }
    const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 992 })
      return isDesktop ? children : null
    }
    return (
      <div>
        <Mobile>
          <div className=" row   justify-content-center container-fluid " id="mobile" style={{ marginTop: '-1rem' }} >
            {this.state.id.map((post) =>

              <Card className=" col-md-3 " key={post.id} style={{ margin: '0.7rem', }}  >
                <CardBody className="text-dark ">
                  <Link to={`/singlePage/${post.id}`}>
                    <CardImg src={post.image} className=" rounded-circle  pull-right bg-dark "
                      style={{ width: '13%', float: 'right' }} />
                    <CardText className="text-dark  " tag="b">
                      {post.title}
                    </CardText>
                    <br />  <br />
                    <CardText className="text-dark mr-5 ">
                      Категорија: <b style={{ color: 'cyan', }}>{post.category}</b>
                      <br />
                      <b>Времетраење <i className="fa fa-clock-o "></i> </b>
                      <i className="text-muted ">{post.timeFrame}</i>
                    </CardText>
                  </Link>
                </CardBody >
              </Card>
            )}
          </div>
        </Mobile>
        <Desktop>
          <div className=" row   justify-content-center container-fluid " id="Desktop" style={{ marginTop: '-30rem' }} >
            {this.state.id.map((post) =>

              <Card className=" col-md-3 " key={post.id} style={{ margin: '0.7rem', }}  >
                < Link to={`/singlePage/${post.id}`} className="img-card bg-dark  " >
                  <CardImg src={post.image} />
                </Link >
                <CardBody className="text-dark ">
                  <Link to={`/singlePage/${post.id}`}>
                    <CardImg src={post.image} className=" rounded-circle  pull-right bg-dark "
                      style={{ width: '13%', float: 'right' }} />
                    <CardText className="text-dark  " tag="b">
                      {post.title}
                    </CardText>
                    <br />  <br />
                    <CardText className="text-dark mr-5 ">
                      Категорија: <b style={{ color: 'cyan', }}>{post.category}</b>
                      <br />
                      <b>Времетраење <i className="fa fa-clock-o "></i> </b>
                      <i className="text-muted ">{post.timeFrame}</i>
                    </CardText>
                  </Link>

                </CardBody >
              </Card>
            )}
          </div>
        </Desktop>
      </div>
    );
  }
}
export default CardNew;