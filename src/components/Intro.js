import React from "react";
import './styles/Intro.css';
import logo from "../assets/EduhubLogo.jpg";
import sort_img from '../assets/sort_img.png';
import path_img from '../assets/pf1.png';
import data_img from '../assets/ds2.png';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
class Intro extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="intro-container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">LEARNING THAT CREATES LIFELONG MEMORIES</h3>
                <p className="subtitle-a">
                THE CANVAS OF <u>IMAGINATION</u> | THE <u>PLAYGROUND</u> OF CONCEPTS
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={logo} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={data_img} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Data Structures</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Array,List,Set...
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={logo} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={logo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">COMING SOON !</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            TO BE ADDED...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={logo} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={logo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">COMING SOON !</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          TO BE ADDED...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={logo} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={logo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">COMING SOON !</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          TO BE ADDED...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={logo} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={logo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">COMING SOON !</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          TO BE ADDED...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={logo} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={logo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">COMING SOON !</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          TO BE ADDED...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={logo}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;