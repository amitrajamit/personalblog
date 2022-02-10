import React from 'react';
import work1 from "../images/work-1.jpg"
import work2 from "../images/work-2.jpg"
import work3 from "../images/work-3.jpg"
import work4 from "../images/work-4.jpg"
import work5 from "../images/work-5.jpg"
import work6 from "../images/work-6.jpg"

const Work = () => {
    return (
        <>
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Portfolio
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                    <div className="work-img">
                                        <img src={work1} alt="" className="img-fluid"/>
                                    </div>
                                </a>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Lorem impsum dolor</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                    <div className="work-img">
                                        <img src={work2} alt="" className="img-fluid"/>
                                    </div>
                                </a>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Loreda Cuno Nere</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                    <div className="work-img">
                                        <img src={work3} alt="" className="img-fluid"/>
                                    </div>
                                </a>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Mavrito Lana Dere</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="assets/img/work-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                    <div className="work-img">
                                        <img src={work4} alt="" className="img-fluid"/>
                                    </div>
                                </a>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Bindo Laro Cado</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                    <div className="work-img">
                                        <img src={work5} alt="" className="img-fluid"/>
                                    </div>
                                </a>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Studio Lena Mado</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="assets/img/work-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                    <div className="work-img">
                                        <img src={work6} alt="" className="img-fluid"/>
                                    </div>
                                </a>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h2 className="w-title">Studio Big Bang</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="w-like">
                                                <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Work;