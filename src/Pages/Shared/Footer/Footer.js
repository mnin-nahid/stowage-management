import { MDBContainer, MDBFooter, MDBIcon } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <Link to='#' className='m-3 text-reset'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link to='#' className='m-3 text-reset'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link to='#' className='m-3 text-reset'>
                            <i className='fab fa-google'></i>
                        </Link>
                        <Link to='#' className='m-3 text-reset'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link to='#' className='m-3 text-reset'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link to='#' className='m-3 text-reset'>
                            <i className='fab fa-github'></i>
                        </Link>
                    </div>
                </section>

                <section className=''>
                    <div className='container text-center text-md-start mt-5'>
                        <div className='row mt-3'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <i className='fas fa-home me-3'></i>STOWAGE-HOME
                                </h6>
                                <p>
                                    Demand forecasting and inventory management can help you run a lean supply chain with a minimal amount of stock.
                                </p>
                            </div>

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Leptop
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Phone
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Power Adapter
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Tablet
                                    </Link>
                                </p>
                            </div>

                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Notice
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Privacy Policy
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Services
                                    </Link>
                                </p>
                                <p>
                                    <Link to='#' className='text-reset'>
                                        Help
                                    </Link>
                                </p>
                            </div>

                            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <i className='fas fa-home me-3'></i> Mirpur, 1216, Dhaka
                                </p>
                                <p>
                                    <i className='fas fa-envelope me-3'></i>
                                    info@example.com
                                </p>
                                <p>
                                    <i className='fas fa-phone me-3'></i> + 01 234 567 88
                                </p>
                                <p>
                                    <i className='fas fa-print me-3'></i> + 01 234 567 89
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © copyright © {year} :
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        All rights reserved by Nahid
                    </a>
                </div>
            </MDBFooter>

        </div>

    );
};

export default Footer;