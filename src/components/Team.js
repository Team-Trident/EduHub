import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/Team.css";
import man from '../assets/man.jpg';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <Slider {...settings}>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Avish Kaushik</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Akshat Nigam</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Ankur Bansal</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption" >Anurag Sharma</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Aryan Varshneya</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Ayush Pradhan</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Divyansh Bhatia</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Manav Shah</p>
          </div>
          <div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Nitish Mishra</p>
          </div><div>
            <img className="team-img" src={man} alt=""/>
            <p className="caption">Sanskar Jhamb</p>
          </div>
        </Slider>
      </div>
    );
  }
}