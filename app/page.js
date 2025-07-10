import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div>
      <div className="fix">
        <div className="bd-offcanvas-area">
          <div className="bd-offcanvas-wrapper">
            <div className="bd-offcanvas-content">
              <div className="bd-offcanvas-top d-flex justify-content-between align-items-center mb-30">
                <div className="bd-offcanvas-logo">
                  <a href="index-2.html">
                    <img src="assets/images/logo/logo.svg" alt="logo not found" />
                  </a>
                </div>
                <div className="bd-offcanvas-close">
                  <button className="bd-offcanvas-close-icon animation--flip">
                    <span className="bd-offcanvas-m-lines">
                      <span className="bd-offcanvas-m-line line--1"></span>
                      <span className="bd-offcanvas-m-line line--2"></span>
                      <span className="bd-offcanvas-m-line line--3"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="bd-offcanvas-search mb-30">
                <form action="#">
                  <input type="text" name="bd-offcanvasSearch" placeholder="Pesquisar aqui" />
                  <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
              </div>
              <div className="bd-mobile-menu-smaller">
                <div className="bd-offcanvas-menu mb-30">
                  <nav></nav>
                </div>
              </div>
              <div className="bd-offcanvas-about d-none d-lg-block mb-30">
                <h4 className="bd-offcanvas-title-meta">Sobre o iStudy</h4>
                <p>Capacitando alunos e educadores com uma plataforma abrangente que preenche a lacuna entre a educação tradicional e moderna. O iStudy inspira excelência na educação e promove o crescimento para um futuro mais brilhante.</p>
              </div>
              <div className="bd-offcanvas-contact mb-30">
                <h4 className="bd-offcanvas-title-meta">Informações de Contacto</h4>
                <ul>
                  <li className="d-flex align-items-center gap-10">
                    <div className="bd-offcanvas-contact-icon">
                      <a target="_blank" href="#">
                        <i className="fal fa-map-marker-alt"></i>
                      </a>
                    </div>
                    <div className="bd-offcanvas-contact-text">
                      <a target="_blank" href="#">123 Knowledge Lane, Learnville, 54321, EUA</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-10">
                    <div className="bd-offcanvas-contact-icon">
                      <a href="tel:+1234567890"><i className="far fa-phone"></i></a>
                    </div>
                    <div className="bd-offcanvas-contact-text">
                      <a href="tel:+1234567890">+1-234-567-890</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-10">
                    <div className="bd-offcanvas-contact-icon">
                      <a href="https://html.topylo.com/cdn-cgi/l/email-protection#4b22252d240b22383f3e2f3265282426"><i className="fal fa-envelope"></i></a>
                    </div>
                    <div className="bd-offcanvas-contact-text">
                      <a href="https://html.topylo.com/cdn-cgi/l/email-protection#4c25222a230c253f38392835622f2321"><span className="__cf_email__" data-cfemail="274e494148674e545352435e0944484a">info@istudy.com</span></a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bd-offcanvas-btn-wrap mb-30">
                <h4 className="bd-offcanvas-title-meta">Conta</h4>
                <div className="bd-offcanvas-btn d-flex align-items-center gap-30">
                  <a className="bd-btn btn-primary" href="sign-in.html">Entrar</a>
                  <a className="bd-btn btn-outline-border-secondary" href="sign-up.html">Começar</a>
                </div>
              </div>
              <div className="bd-offcanvas-social">
                <h4 className="bd-offcanvas-title-meta">Siga-nos</h4>
                <div className="theme-social">
                  <ul className="social-icon-list">
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-offcanvas-overlay"></div>
      <div className="bd-offcanvas-overlay-white"></div>
      <div className="bd-search-popup-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bd-search-popup">
                <div className="bd-search-form">
                  <form action="#">
                    <div className="bd-search-input">
                      <input type="search" name="search" placeholder="Digite aqui para pesquisar ..." />
                      <div className="bd-search-submit">
                        <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                      </div>
                    </div>
                  </form>
                  <div className="bd-search-close">
                    <div className="bd-search-close-btn">
                      <button><i className="fa-thin fa-close"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-search-overlay"></div>
      <div className="bd-sidebar-cart-area">
        <div className="bd-sidebar-cart-wrapper d-flex justify-content-between flex-column">
          <div className="bd-sidebar-cart-top-wrapper">
            <div className="bd-sidebar-cart-top p-relative">
              <div className="bd-sidebar-cart-top-title">
                <h5>Carrinho de compras</h5>
              </div>
              <div className="bd-sidebar-cart-close">
                <button type="button" className="bd-sidebar-cart-close-btn cartmini-close-btn"><i className="fa-solid fa-xmark"></i></button>
              </div>
            </div>
            <div className="bd-sidebar-cart-widget">
              <div className="bd-sidebar-cart-widget-item">
                <div className="bd-sidebar-cart-thumb">
                  <a href="shop-details.html">
                    <img src="assets/images/book/book-cover-2.webp" alt="image" />
                  </a>
                </div>
                <div className="bd-sidebar-cart-content">
                  <h5 className="bd-sidebar-cart-title"><a href="shop-details.html">Nós Resolvemos Assassinatos</a></h5>
                  <div className="bd-sidebar-cart-price-wrapper">
                    <span className="bd-sidebar-cart-price">$30.00</span>
                    <span className="bd-sidebar-cart-quantity">x1</span>
                  </div>
                </div>
                <a href="#" className="bd-sidebar-cart-del"><i className="fa-regular fa-xmark"></i></a>
              </div>
              <div className="bd-sidebar-cart-widget-item">
                <div className="bd-sidebar-cart-thumb">
                  <a href="shop-details.html">
                    <img src="assets/images/book/book-cover-3.webp" alt="image" />
                  </a>
                </div>
                <div className="bd-sidebar-cart-content">
                  <h5 className="bd-sidebar-cart-title"><a href="shop-details.html">As Mulheres</a></h5>
                  <div className="bd-sidebar-cart-price-wrapper">
                    <span className="bd-sidebar-cart-price">$30.00</span>
                    <span className="bd-sidebar-cart-quantity">x1</span>
                  </div>
                </div>
                <a href="#" className="bd-sidebar-cart-del"><i className="fa-regular fa-xmark"></i></a>
              </div>
              <div className="bd-sidebar-cart-widget-item">
                <div className="bd-sidebar-cart-thumb">
                  <a href="shop-details.html">
                    <img src="assets/images/book/book-cover-4.webp" alt="image" />
                  </a>
                </div>
                <div className="bd-sidebar-cart-content">
                  <h5 className="bd-sidebar-cart-title"><a href="shop-details.html">Quarta Asa</a></h5>
                  <div className="bd-sidebar-cart-price-wrapper">
                    <span className="bd-sidebar-cart-price">$50.00</span>
                    <span className="bd-sidebar-cart-quantity">x1</span>
                  </div>
                </div>
                <a href="#" className="bd-sidebar-cart-del"><i className="fa-regular fa-xmark"></i></a>
              </div>
            </div>

            {/* empty cart for wordpress */}
            <div className="bd-sidebar-cart-empty text-center d-none">
              <img src="assets/images/shop/empty-cart.webp" alt="image" />
              <p>Seu carrinho está vazio</p>
              <a href="shop.html" className="bd-btn btn-primary">Ir para a Loja</a>
            </div>
            {/* empty cart for wordpress */}

          </div>
          <div className="bd-sidebar-cart-checkout">
            <div className="bd-sidebar-cart-checkout-title mb-30">
              <h5>Subtotal:</h5>
              <span>$160.00</span>
            </div>
            <div className="bd-sidebar-cart-checkout-btn">
              <a className="bd-btn btn-primary mb-15 w-100" href="cart.html">Ver Carrinho</a>
              <a className="bd-btn btn-secondary w-100" href="checkout.html">Finalizar Compra</a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
      <main className="main-area">

        {/* banner area start */}
        <section className="bd-banner-area bd-banner-one p-relative fix image-bg" data-background="assets/images/bg/home-one-bg.webp">
          <div className="container">
            <div className="bd-banner-shape">
              <div className="shape-1">
                <img src="assets/images/banner/banner-1/shape-1.webp" alt="shape" />
              </div>
              <div className="shape-2">
                <img src="assets/images/banner/banner-1/shape-2.webp" alt="shape" />
              </div>
              <div className="shape-3">
                <img src="assets/images/banner/banner-1/shape-3.webp" alt="shape" />
              </div>
              <div className="shape-4">
                <img src="assets/images/banner/banner-1/shape-4.webp" alt="shape" />
              </div>
              <div className="shape-5">
                <img src="assets/images/banner/banner-1/shape-5.webp" alt="shape" />
              </div>
            </div>
            <div className="bd-banner-one-row-wrap">
              <div className="row gy-30 align-items-center justify-content-end">
                <div className="col-xxl-5 col-xl-6 col-lg-12">
                  <span className="bd-banner-subtitle">Bem-vindo ao iStudy</span>
                  <h1 className="bd-banner-title small mb-20">Descubra <span className="bd-title-underline text-secondary">
                    2700+
                    <svg width="138" height="8" viewBox="0 0 138 8" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7C28.2975 2.83975 94.8839 -1.83253 137 3.15976" stroke="#FFAF00"
                        strokeWidth="2" />
                    </svg>
                  </span> cursos online disponíveis no Mundo</h1>
                  <p className="bd-banner-description">Eles não são responsáveis por qualquer ofensa causada por aqueles que não
                    cumprem
                    os seus deveres, a menos que seja por negligência.</p>
                  <div className="bd-banner-btn d-flex-items flex-wrap gap-30">
                    <a className="bd-btn btn-outline-border-primary" href="courses.html">Encontrar Cursos</a>
                    <a className="bd-video-btn secondary popup-video" href="https://www.youtube.com/watch?v=HKk4oLIzhhM">
                      <span className="icon"><i className="fa-solid fa-play"></i></span>
                      Assistir Vídeo
                    </a>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-6 col-lg-12">
                  <div className="bd-banner-thumb-wrapper position-relative">
                    <div className="bd-banner-thumb">
                      <img src="assets/images/banner/banner-1/banner-img-1.webp" alt="image" />
                    </div>
                    <div className="bd-banner-tag-wrapper">
                      <div className="bd-banner-tag-one">
                        <div className="shape"><img src="assets/images/shape/dot-shape.webp" alt="shape" /></div>
                        <div className="inner">
                          <div className="icon">
                            <img src="assets/images/shape/badge.webp" alt="shape" />
                          </div>
                          <div className="content">
                            <div className="title">100%</div>
                            <div className="subtitle">
                              Alunos Satisfeitos
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bd-banner-tag-two">
                        <div className="inner">
                          <div className="icon">
                            <img src="assets/images/shape/badge-img.webp" alt="shape" />
                            <img src="assets/images/shape/star-group.webp" alt="shape" />
                          </div>
                          <div className="content">
                            <div className="title">30K+</div>
                            <div className="subtitle">
                              Alunos Felizes <br /> em Todo o Mundo
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner area end */}

        {/* feature area start */}
        <div className="bd-feature-area theme-bg pt-40 pb-40 bd-noise-bg">
          <div className="container">
            <div className="row gy-30 justify-content-between align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-feature-wrapper style-one wow bdFadeInUp">
                  <div className="bd-feature-item">
                    <span className="icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 30.5H26.5" stroke="#07A169" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M24.5 36.5V44.5" stroke="#07A169" strokeWidth="3" />
                      <path d="M16.5 44.5H32.5" stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path
                        d="M18.5 4.5C13.2491 4.5167 10.413 4.67256 8.33782 6.12562C7.47782 6.7278 6.7298 7.4758 6.12764 8.3358C4.5 10.6604 4.5 13.9396 4.5 20.498C4.5 27.0565 4.5 30.3357 6.12764 32.6603C6.7298 33.5203 7.47782 34.2682 8.33782 34.8704C10.6623 36.498 13.9415 36.4981 20.5 36.4981H28.5C35.0584 36.4981 38.3376 36.498 40.6622 34.8704C41.5222 34.2682 42.2702 33.5203 42.8724 32.6603C44.3254 30.5851 44.4812 27.7489 44.498 22.4981"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path
                        d="M39.5 8.79262L39.626 8.70172C41.7416 7.1742 42.7996 6.41044 43.6498 6.77922C44.5 7.148 44.5 8.3706 44.5 10.8158V12.1842C44.5 14.6294 44.5 15.852 43.6498 16.2208C42.7996 16.5896 41.7416 15.8258 39.626 14.2983L39.5 14.2074M31.5 18.5H32.5C35.7998 18.5 37.4498 18.5 38.4748 17.603C39.5 16.706 39.5 15.2624 39.5 12.375V10.625C39.5 7.73764 39.5 6.29398 38.4748 5.39698C37.4498 4.5 35.7998 4.5 32.5 4.5H31.5C28.2002 4.5 26.5502 4.5 25.5252 5.39698C24.5 6.29398 24.5 7.73764 24.5 10.625V12.375C24.5 15.2624 24.5 16.706 25.5252 17.603C26.5502 18.5 28.2002 18.5 31.5 18.5Z"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    </span>
                    <p className="description">Adquira experiência com acesso a mais de 24.000 cursos em vídeo.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-feature-wrapper style-one wow bdFadeInUp">
                  <div className="bd-feature-item">
                    <span className="icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.5 44.5L20.5 32.5H4.5L8.5 44.5H24.5ZM24.5 44.5H32.5" stroke="#07A169"
                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M24.5 26.5V25.5C24.5 21.7288 24.5 19.8431 23.3284 18.6716C22.1568 17.5 20.2712 17.5 16.5 17.5C12.7288 17.5 10.8431 17.5 9.67158 18.6716C8.5 19.8431 8.5 21.7288 8.5 25.5V26.5"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M38.5 26.5C38.5 28.7092 36.7092 30.5 34.5 30.5C32.2908 30.5 30.5 28.7092 30.5 26.5C30.5 24.2908 32.2908 22.5 34.5 22.5C36.7092 22.5 38.5 24.2908 38.5 26.5Z"
                        stroke="#FFB800" strokeWidth="3" />
                      <path
                        d="M20.5 8.5C20.5 10.7091 18.7091 12.5 16.5 12.5C14.2909 12.5 12.5 10.7091 12.5 8.5C12.5 6.29086 14.2909 4.5 16.5 4.5C18.7091 4.5 20.5 6.29086 20.5 8.5Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path
                        d="M28.5 35.5H40.5C42.7092 35.5 44.5 37.2908 44.5 39.5V40.5C44.5 42.7092 42.7092 44.5 40.5 44.5H38.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    </span>
                    <p className="description">Aprenda com cursos ministrados por especialistas da indústria.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-feature-wrapper style-one wow bdFadeInUp">
                  <div className="bd-feature-item">
                    <span className="icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M34 31.5V28C34 26.067 35.567 24.5 37.5 24.5C38.6562 24.5 39.6814 25.0606 40.3188 25.9248M44.5 37C44.5 34.6544 44.5 33.4816 43.88 32.6738C43.7204 32.4658 43.5342 32.2796 43.3262 32.12C42.5184 31.5 41.3456 31.5 39 31.5H36C33.6544 31.5 32.4816 31.5 31.6738 32.12C31.4658 32.2796 31.2796 32.4658 31.12 32.6738C30.5 33.4816 30.5 34.6544 30.5 37C30.5 39.3456 30.5 40.5184 31.12 41.3262C31.2796 41.5342 31.4658 41.7204 31.6738 41.88C32.4816 42.5 33.6544 42.5 36 42.5H39C41.3456 42.5 42.5184 42.5 43.3262 41.88C43.5342 41.7204 43.7204 41.5342 43.88 41.3262C44.5 40.5184 44.5 39.3456 44.5 37Z"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M24.5054 42.5C15.0748 42.5 10.3595 42.5 7.42974 39.571C4.5 36.6422 4.5 31.928 4.5 22.5V16.3885C4.5 12.7556 4.5 10.9391 5.26084 9.57612C5.8032 8.60454 6.6051 7.80284 7.57696 7.26064C8.94034 6.5 10.7573 6.5 14.3912 6.5C16.7194 6.5 17.8834 6.5 18.9024 6.88202C21.229 7.75424 22.1884 9.86716 23.2382 11.9663L24.5054 14.5M16.5033 14.5H34.008C38.2226 14.5 40.3298 14.5 41.8436 15.5112C42.499 15.9489 43.0616 16.5114 43.4994 17.1666C44.2874 18.3456 44.4616 19.8849 44.5 22.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    </span>
                    <p className="description">Aprenda a qualquer hora, em qualquer lugar com acesso ilimitado em qualquer dispositivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature area end */}

        {/* category area start */}
        <section className="bd-category-area section-space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="bd-section-wrapper section-title-space text-center">
                  <h2 className="bd-section-title">Principais <span className="down-mark-line">Categorias</span></h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M44.5 24.5C44.5 13.4543 35.5456 4.5 24.5 4.5C13.4543 4.5 4.5 13.4543 4.5 24.5C4.5 35.5456 13.4543 44.5 24.5 44.5C26.1834 44.5 28.5 44.7326 28.5 42.5C28.5 41.282 27.8664 40.3424 27.2372 39.4088C26.3164 38.043 25.4046 36.6906 26.5 34.5C27.8334 31.8334 30.0556 31.8334 33.463 31.8334C35.1668 31.8334 37.1668 31.8334 39.5 31.5C43.702 30.8998 44.5 28.3168 44.5 24.5Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path d="M14.5 30.5048L14.5174 30.5" stroke="#07A169" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M19.5 20.5C21.1569 20.5 22.5 19.1569 22.5 17.5C22.5 15.8431 21.1569 14.5 19.5 14.5C17.8431 14.5 16.5 15.8431 16.5 17.5C16.5 19.1569 17.8431 20.5 19.5 20.5Z"
                        stroke="#FFB800" strokeWidth="3" />
                      <path
                        d="M33.5 22.5C35.1569 22.5 36.5 21.1569 36.5 19.5C36.5 17.8431 35.1569 16.5 33.5 16.5C31.8431 16.5 30.5 17.8431 30.5 19.5C30.5 21.1569 31.8431 22.5 33.5 22.5Z"
                        stroke="#FFB800" strokeWidth="3" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Design Gráfico</h6>
                      <span className="bd-category-total">30 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M28.5 4.5H20.5C13.9415 4.5 10.6623 4.5 8.33782 6.12764C7.47782 6.7298 6.7298 7.47782 6.12764 8.33782C4.5 10.6623 4.5 13.9415 4.5 20.5C4.5 27.0584 4.5 30.3376 6.12764 32.6622C6.7298 33.5222 7.47782 34.2702 8.33782 34.8724C10.6623 36.5 13.9415 36.5 20.5 36.5H28.5C35.0584 36.5 38.3376 36.5 40.6622 34.8724C41.5222 34.2702 42.2702 33.5222 42.8724 32.6622C44.5 30.3376 44.5 27.0584 44.5 20.5C44.5 13.9415 44.5 10.6623 42.8724 8.33782C42.2702 7.47782 41.5222 6.7298 40.6622 6.12764C38.3376 4.5 35.0584 4.5 28.5 4.5Z"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path
                        d="M32.5 16.5L34.953 18.6144C35.9844 19.5033 36.5 19.9477 36.5 20.5C36.5 21.0522 35.9844 21.4968 34.953 22.3856L32.5 24.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M16.5 16.5L14.0469 18.6144C13.0156 19.5033 12.5 19.9477 12.5 20.5C12.5 21.0522 13.0156 21.4968 14.0469 22.3856L16.5 24.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.5 14.5L22.5 26.5" stroke="#FFB800" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M29.8115 44.5L28.9739 43.6622C27.0853 41.7738 26.6171 38.8888 27.8115 36.5"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path d="M18.5 44.5L19.3377 43.6622C21.2262 41.7738 21.6944 38.8888 20.5 36.5"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path d="M14.5 44.5H34.5" stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Desenvolvimento Web</h6>
                      <span className="bd-category-total">20 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M34.5 20.9994L34.7518 20.8484C38.9834 18.3091 41.0992 17.0394 42.7996 17.6525C44.5 18.2655 44.5 20.2979 44.5 24.3628V26.6374C44.5 30.7022 44.5 32.7346 42.7996 33.3476C41.0992 33.9606 38.9834 32.691 34.7518 30.1518L34.5 30.0006"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
                      <path d="M9.5 43.5L17.5 35.5M21.5 35.5L29.5 43.5M19.5 35.5V45.5" stroke="#FFB800"
                        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M4.5 24.25C4.5 20.1252 4.5 18.0628 6.55026 16.7814C8.6005 15.5 11.9003 15.5 18.5 15.5H20.5C27.0996 15.5 30.3994 15.5 32.4498 16.7814C34.5 18.0628 34.5 20.1252 34.5 24.25V26.75C34.5 30.8748 34.5 32.9372 32.4498 34.2186C30.3994 35.5 27.0996 35.5 20.5 35.5H18.5C11.9003 35.5 8.6005 35.5 6.55026 34.2186C4.5 32.9372 4.5 30.8748 4.5 26.75V24.25Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path
                        d="M25.5 15.5C28.2614 15.5 30.5 13.2614 30.5 10.5C30.5 7.73858 28.2614 5.5 25.5 5.5C22.7386 5.5 20.5 7.73858 20.5 10.5C20.5 13.2614 22.7386 15.5 25.5 15.5Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path
                        d="M14.5 15.5C17.8137 15.5 20.5 12.8137 20.5 9.5C20.5 6.18629 17.8137 3.5 14.5 3.5C11.1863 3.5 8.5 6.18629 8.5 9.5C8.5 12.8137 11.1863 15.5 14.5 15.5Z"
                        stroke="#07A169" strokeWidth="3" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Fotografia</h6>
                      <span className="bd-category-total">25 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42.5 42.5H20.5C13.9003 42.5 10.6005 42.5 8.55026 40.4498C6.5 38.3994 6.5 35.0996 6.5 28.5V6.5"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path d="M14.5 8.5H16.5" stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path d="M14.5 14.5H22.5" stroke="#07A169" strokeWidth="3" strokeLinecap="round" />
                      <path
                        d="M10.5 40.5C12.6419 36.606 15.5456 26.5378 21.1126 26.5378C24.9602 26.5378 25.9566 31.4434 29.7272 31.4434C36.2144 31.4434 35.274 20.5 42.5 20.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Análise de Negócios</h6>
                      <span className="bd-category-total">35 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.4162 42.0418L20.4335 44.5C13.7103 39.1678 14.5317 36.625 14.5317 26.5H16.7993C17.7196 32.2218 19.8902 34.932 22.8854 36.894C24.7304 38.1024 25.1108 40.645 23.4162 42.0418Z"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M30.3526 6.32206L17.047 12.709C16.023 13.2006 14.9289 13.3237 13.8135 13.0739C13.0835 12.9103 12.7185 12.8286 12.4246 12.795C8.77486 12.3782 6.5 15.2668 6.5 18.5885V20.4115C6.5 23.7332 8.77486 26.6218 12.4246 26.205C12.7185 26.1714 13.0836 26.0896 13.8135 25.9262C14.9289 25.6762 16.023 25.7994 17.047 26.291L30.3526 32.678C33.4068 34.1442 34.934 34.8772 36.6368 34.3058C38.3394 33.7344 38.9238 32.5082 40.0928 30.056C43.3024 23.3224 43.3024 15.6777 40.0928 8.94392C38.9238 6.49172 38.3394 5.26562 36.6368 4.6942C34.934 4.1228 33.4068 4.85588 30.3526 6.32206Z"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.5 25.5V13.5" stroke="#07A169" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Marketing Digital</h6>
                      <span className="bd-category-total">40 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 30.5V34.5" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
                      <path d="M16.5 16.5V20.5" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
                      <path
                        d="M24.5 16.5C33.3366 16.5 40.5 13.8137 40.5 10.5C40.5 7.18629 33.3366 4.5 24.5 4.5C15.6634 4.5 8.5 7.18629 8.5 10.5C8.5 13.8137 15.6634 16.5 24.5 16.5Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path d="M40.5 24.5C40.5 27.8138 33.3366 30.5 24.5 30.5C15.6634 30.5 8.5 27.8138 8.5 24.5"
                        stroke="#07A169" strokeWidth="3" />
                      <path
                        d="M40.5 10.5V38.5C40.5 41.8138 33.3366 44.5 24.5 44.5C15.6634 44.5 8.5 41.8138 8.5 38.5V10.5"
                        stroke="#07A169" strokeWidth="3" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Ciência de Dados</h6>
                      <span className="bd-category-total">15 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M32.5 16.5C32.0124 17.9627 31.0092 19.0855 29.5892 19.7151C25.0284 21.737 21.737 25.0284 19.7151 29.5892C19.0855 31.0092 17.9627 32.0124 16.5 32.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M6.9 42.1L4.5 44.5M42.1 6.9L44.5 4.5" stroke="#FFB800" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M9.65728 43.7384L7.3746 41.4822L5.20668 39.1978C3.92024 37.9114 4.66242 36.625 5.29772 35.9864L8.26186 33.0186L15.975 40.765L12.9391 43.7472C11.8774 44.6138 11.1494 44.8792 9.72142 43.7474M33.0848 8.16047L36.1092 5.25417C36.76 4.63131 37.8888 3.93963 39.3218 5.22515L41.564 7.43675L43.7756 9.76257C44.8798 11.2121 44.608 11.9991 43.7212 13.0439L40.766 15.9134L33.0848 8.16047ZM33.0794 8.17897C32.2982 7.24859 30.777 5.57775 28.5558 7.92537C28.198 8.30347 27.8224 8.67425 27.5014 9.08403C26.3104 10.8596 27.7204 12.1879 28.5366 12.921L36.2882 20.6724C37.0428 21.602 38.4668 22.614 39.9504 21.3934C40.3524 21.0628 40.715 20.6792 41.0848 20.3129C43.3766 18.0427 41.6426 16.5848 40.6948 15.8249L33.0794 8.17897ZM12.9291 28.3466C12.1479 27.4162 10.6266 25.7454 8.4054 28.093C8.04766 28.4712 7.67204 28.842 7.35106 29.2518C6.16008 31.0272 7.57014 32.3556 8.3863 33.0888L16.1379 40.8402C16.8924 41.7698 18.3164 42.7816 19.8001 41.5612C20.2021 41.2304 20.5646 40.8468 20.9344 40.4806C23.2262 38.2104 21.4922 36.7524 20.5444 35.9926L12.9291 28.3466Z"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Saúde e Fitness</h6>
                      <span className="bd-category-total">10 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <a href="courses.html" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                  <div className="bd-category-item">
                    <span className="bd-category-icon"><svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.5 19.5C14.5 22.2614 12.2614 24.5 9.5 24.5C6.73858 24.5 4.5 22.2614 4.5 19.5C4.5 16.7386 6.73858 14.5 9.5 14.5C12.2614 14.5 14.5 16.7386 14.5 19.5ZM14.5 19.5V4.5C15.1667 5.5 15.7 9.7 20.5 10.5"
                        stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M21.5 44.5C24.2614 44.5 26.5 42.2614 26.5 39.5C26.5 36.7386 24.2614 34.5 21.5 34.5C18.7386 34.5 16.5 36.7386 16.5 39.5C16.5 42.2614 18.7386 44.5 21.5 44.5Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path
                        d="M40.5 40.5C42.7091 40.5 44.5 38.7091 44.5 36.5C44.5 34.2909 42.7091 32.5 40.5 32.5C38.2909 32.5 36.5 34.2909 36.5 36.5C36.5 38.7091 38.2909 40.5 40.5 40.5Z"
                        stroke="#07A169" strokeWidth="3" />
                      <path
                        d="M26.5 39.5007V22.5007C26.5 20.6807 26.5 19.7707 26.9932 19.2056C27.4864 18.6405 28.4876 18.5039 30.4898 18.2308C36.517 17.4084 40.9026 14.8966 43.2392 13.3594C43.7996 12.9909 44.0796 12.8066 44.2898 12.9199C44.5 13.0332 44.5 13.3643 44.5 14.0263V36.3525"
                        stroke="#07A169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.5 26.5C36.1 26.5 42.5 21.8334 44.5 20.5" stroke="#07A169" strokeWidth="3"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                    <div className="bd-category-content">
                      <h6 className="bd-category-title">Dança e Música</h6>
                      <span className="bd-category-total">25 cursos</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* category area end */}

        {/* about area start */}
        <section className="bd-about-area section-space theme-bg p-relative bd-noise-bg">
          <div className="container">
            <div className="bd-about-shape-wrap">
              <div className="shape-1"><img src="assets/images/shape/about-solid-circle.webp" alt="shape" /></div>
              <div className="shape-2"><img src="assets/images/shape/about-book-shape.webp" alt="shape" /></div>
              <div className="shape-3"><img src="assets/images/shape/about-wave-shape.webp" alt="shape" /></div>
              <div className="shape-4"><img src="assets/images/shape/about-circle.webp" alt="shape" /></div>
            </div>
            <div className="row g-5">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="bd-about-wrapper style-one">
                  <div className="bd-about-thumb-inner">
                    <div className="bd-about-thumb-wrapper">
                      <div className="bd-about-thumb">
                        <img src="assets/images/about/about-thumb-01.webp" alt="image" />
                      </div>
                      <div className="bd-about-thumb-small">
                        <img src="assets/images/about/about-thumb-small-01.webp" alt="image" />
                      </div>
                    </div>
                    <div className="bd-about-thumb-shape">
                      <img src="assets/images/shape/dot-shape-01.webp" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="bd-about-wrapper style-one">
                  <div className="bd-about-content-wrapper">
                    <div className="bd-section-title-wrapper">
                      <span className="bd-section-subtitle text-secondary">Sobre Nós</span>
                      <h2 className="bd-section-title white-text mb-20">Uma Nova Forma Diferente de Melhorar as Suas <span
                        className="down-mark-line">Habilidades</span></h2>
                      <p className="bd-section-paragraph has-border-sec">A educação é um dos bens mais essenciais e
                        valiosos que um indivíduo pode possuir. Desempenha um papel fundamental na formação</p>
                    </div>
                    <div className="bd-about-feature-list">
                      <div className="bd-about-feature-item">
                        <div className="bd-about-feature-icon">
                          <span><i className="icon-online-class"></i></span>
                        </div>
                        <div className="bd-about-feature-content">
                          <h6 className="bd-about-feature-title">Aulas Flexíveis</h6>
                          <p className="bd-about-feature-desc">O recurso Aulas Flexíveis permite que os
                            alunos personalizem o seu horário de aprendizagem</p>
                        </div>
                      </div>
                      <div className="bd-about-feature-item">
                        <div className="bd-about-feature-icon">
                          <span><i className="icon-expert-trainers"></i></span>
                        </div>
                        <div className="bd-about-feature-content">
                          <h6 className="bd-about-feature-title">Formadores Especialistas</h6>
                          <p className="bd-about-feature-desc">Todos os formadores possuem certificações
                            relevantes e graus avançados, garantindo que está a aprender
                            com especialistas qualificados</p>
                        </div>
                      </div>
                      <div className="bd-about-feature-item">
                        <div className="bd-about-feature-icon">
                          <span><i className="icon-career-growth"></i></span>
                        </div>
                        <div className="bd-about-feature-content">
                          <h6 className="bd-about-feature-title">Construa a Sua Carreira</h6>
                          <p className="bd-about-feature-desc">Prepare-se para entrevistas de emprego com sessões
                            de simulação de entrevistas, feedback e dicas sobre como se apresentar
                            com confiança</p>
                        </div>
                      </div>
                    </div>
                    <div className="bd-about-btn">
                      <a className="bd-btn btn-secondary-white" href="about-online-course.html">Saber Mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about area end */}

        {/* course area start */}
        <section className="bd-course-area section-space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="bd-section-wrapper section-title-space text-center">
                  <span className="bd-section-subtitle">Cursos em Destaque</span>
                  <h2 className="bd-section-title">Encontre o Seu <span className="down-mark-line">Curso</span></h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-course-wrapper style-seven">
                  <a href="courses-details.html" className="bd-course-thumb-wrapper bd-course-thumb-style p-relative">
                    <div className="bd-course-badge">
                      <span className="bd-badge badge-warning">20% Desconto</span>
                    </div>
                    <div className="bd-course-thumb-bg bg-1"><img src="assets/images/course/course-bg-1.webp" alt="images" /></div>
                    <div className="bd-course-thumb-instructor center"><img src="assets/images/course/course-instructor-1.webp" alt="instructor" /></div>
                    <div className="small-text bg-text-color">Começando</div>
                    <div className="bd-course-overly-title fs-200 text-white">UI/UX</div>
                  </a>
                  <div className="bd-course-content">
                    <div className="bd-course-content-bottom d-flex align-items-center gap-30 mb-10">
                      <div className="bd-course-lesson has-separator">
                        <span><i className="fa-light fa-clock"></i> 45 Aulas</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> 520 Alunos</span>
                      </div>
                    </div>
                    <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Domine a Ciência de Dados
                        do Zero</a></h5>
                    <p className="bd-course-description mb-10">Impulsione a sua carreira com habilidades em ciência de dados que estão em
                      alta demanda em todas as indústrias.</p>
                    <div className="bd-course-rating d-inline-flex align-items-center gap-10 mb-30">
                      <div className="bd-course-rating-icon d-flex rating-color">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                      </div>
                      <div className="bd-course-rating-text">
                        <span>( 4.8/5 Avaliações )</span>
                      </div>
                    </div>
                    <div className="bd-course-btn">
                      <a className="bd-btn btn-outline-primary" href="courses-details.html">Inscreva-se Agora</a>
                    </div>
                  </div>
                  <div className="bd-course-info">
                    <div className="bd-course-info-wrapper">
                      <a className="bd-badge badge-primary mb-15" href="#">Certificado</a>
                      <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Técnicas Avançadas de Ciência de Dados</a></h5>
                      <div className="bd-course-info-label mb-15">Nível : <span>Intermediário</span></div>
                      <p>Aprofunde-se em algoritmos de aprendizado de máquina, visualização de dados e análise estatística.
                      </p>
                      <div className="bd-course-info-list">
                        <ul>
                          <li><i className="far fa-check"></i>Python para Ciência de Dados</li>
                          <li><i className="far fa-check"></i>Algoritmos de Aprendizado de Máquina</li>
                          <li><i className="far fa-check"></i>Visualização de Dados</li>
                          <li><i className="far fa-check"></i>Análise Estatística</li>
                        </ul>
                      </div>
                      <div className="bd-course-price mb-20">
                        <span className="current-price has-big">$250.00</span>
                        <span className="old-price has-big">$300.00</span>
                      </div>
                      <div className="bd-course-action-btn d-flex align-items-center gap-15">
                        <a href="courses-details.html" className="bd-btn btn-outline-border-primary">Ver Detalhes</a>
                        <button className="bd-btn-icon btn-warning outline-warning"><i
                          className="icon-heart"></i></button>
                        <a href="courses-details.html" className="bd-btn-icon btn-info outline-info"><i
                          className="fa-light fa-share"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-course-wrapper style-seven">
                  <a href="courses-details.html" className="bd-course-thumb-wrapper bd-course-thumb-style p-relative">
                    <div className="bd-course-badge">
                      <span className="bd-badge badge-primary">GRÁTIS</span>
                    </div>
                    <div className="bd-course-thumb-bg bg-2"><img src="assets/images/course/course-bg-2.webp" alt="images" /></div>
                    <div className="bd-course-thumb-instructor right"><img src="assets/images/course/course-instructor-2.webp" alt="instructor" /></div>
                    <div className="bd-course-text-content">
                      <div className="text-1 fs-50 mb-5 text-white">JavaScript</div>
                      <div className="text-2 fs-50 mb-5 text-white">Para Iniciantes</div>
                      <div className="text-3 fs-28 white-bg text-primary pl-10 pr-10 pt-5 pb-5 d-inline-block latter-sp-2 uppercase">
                        Iniciante</div>
                    </div>
                  </a>
                  <div className="bd-course-content">
                    <div className="bd-course-content-bottom d-flex align-items-center gap-30 mb-10">
                      <div className="bd-course-lesson has-separator">
                        <span><i className="fa-light fa-clock"></i> 30 Aulas</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> 750 Alunos</span>
                      </div>
                    </div>
                    <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Guia Completo de Desenvolvimento Web</a></h5>
                    <p className="bd-course-description mb-10">Aprenda a construir sites responsivos do zero usando
                      HTML, CSS e JavaScript.</p>
                    <div className="bd-course-rating d-inline-flex align-items-center gap-10 mb-30">
                      <div className="bd-course-rating-icon d-flex rating-color">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                      </div>
                      <div className="bd-course-rating-text">
                        <span>( 4.7/5 Avaliações )</span>
                      </div>
                    </div>
                    <div className="bd-course-btn">
                      <a className="bd-btn btn-outline-primary" href="courses-details.html">Inscreva-se Agora</a>
                    </div>
                  </div>
                  <div className="bd-course-info">
                    <div className="bd-course-info-wrapper">
                      <a className="bd-badge badge-primary mb-15" href="#">Desenvolvedor</a>
                      <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Desenvolvimento Web Full Stack</a></h5>
                      <div className="bd-course-info-label mb-15">Nível : <span>Iniciante ao Avançado</span></div>
                      <p>Domine o desenvolvimento front-end e back-end, bancos de dados e sistemas de controle de versão.</p>
                      <div className="bd-course-info-list">
                        <ul>
                          <li><i className="far fa-check"></i>HTML, CSS e JavaScript</li>
                          <li><i className="far fa-check"></i>React e Node.js</li>
                          <li><i className="far fa-check"></i>Gestão de Banco de Dados</li>
                          <li><i className="far fa-check"></i>Git e GitHub</li>
                        </ul>
                      </div>
                      <div className="bd-course-price mb-20">
                        <span className="current-price has-big">$120.00</span>
                        <span className="old-price has-big">$200.00</span>
                      </div>
                      <div className="bd-course-action-btn d-flex align-items-center gap-15">
                        <a href="courses-details.html" className="bd-btn btn-outline-border-primary">Ver Detalhes</a>
                        <button className="bd-btn-icon btn-warning outline-warning"><i
                          className="icon-heart"></i></button>
                        <a href="courses-details.html" className="bd-btn-icon btn-info outline-info"><i
                          className="fa-light fa-share"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-course-wrapper style-seven">
                  <a href="courses-details.html" className="bd-course-thumb-wrapper bd-course-thumb-style p-relative">
                    <div className="bd-course-badge">
                      <span className="bd-badge badge-secondary">10% Desconto</span>
                    </div>
                    <div className="bd-course-thumb-bg bg-3"><img src="assets/images/course/course-bg-3.webp" alt="images" /></div>
                    <div className="bd-course-thumb-instructor right"><img src="assets/images/course/course-instructor-3.webp" alt="instructor" /></div>
                    <div className="bd-course-text-content">
                      <div className="text-1 fs-50 mb-5 text-white">React.js</div>
                      <div className="text-2 fs-50 mb-25 text-white">Conceitos</div>
                      <div className="text-3 fs-28 white-bg text-primary pl-10 pr-10 pt-5 pb-5 d-inline-block latter-sp-2 uppercase">
                        Avançado
                      </div>
                    </div>
                  </a>
                  <div className="bd-course-content">
                    <div className="bd-course-content-bottom d-flex align-items-center gap-30 mb-10">
                      <div className="bd-course-lesson has-separator">
                        <span><i className="fa-light fa-clock"></i> 40 Aulas</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> 620 Alunos</span>
                      </div>
                    </div>
                    <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Masterclass de Marketing Digital</a></h5>
                    <p className="bd-course-description mb-10">Torne-se um especialista em SEO, marketing de mídia social e
                      criação de conteúdo, marketing de mídia social.</p>
                    <div className="bd-course-rating d-inline-flex align-items-center gap-10 mb-30">
                      <div className="bd-course-rating-icon d-flex rating-color">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="bd-course-rating-text">
                        <span>( 5.0/5 Avaliações )</span>
                      </div>
                    </div>
                    <div className="bd-course-btn">
                      <a className="bd-btn btn-outline-primary" href="courses-details.html">Inscreva-se Agora</a>
                    </div>
                  </div>
                  <div className="bd-course-info">
                    <div className="bd-course-info-wrapper">
                      <a className="bd-badge badge-primary mb-15" href="#">Marketing</a>
                      <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Marketing Digital Avançado</a></h5>
                      <div className="bd-course-info-label mb-15">Nível : <span>Intermediário</span></div>
                      <p>Aprimore suas habilidades de marketing com estratégias e ferramentas avançadas para o crescimento online.</p>
                      <div className="bd-course-info-list">
                        <ul>
                          <li><i className="far fa-check"></i>Estratégias de SEO</li>
                          <li><i className="far fa-check"></i>Gestão de Mídias Sociais</li>
                          <li><i className="far fa-check"></i>Marketing de Conteúdo</li>
                          <li><i className="far fa-check"></i>Email Marketing</li>
                        </ul>
                      </div>
                      <div className="bd-course-price mb-20">
                        <span className="current-price has-big">$150.00</span>
                        <span className="old-price has-big">$180.00</span>
                      </div>
                      <div className="bd-course-action-btn d-flex align-items-center gap-15">
                        <a href="courses-details.html" className="bd-btn btn-outline-border-primary">Ver Detalhes</a>
                        <button className="bd-btn-icon btn-warning outline-warning"><i
                          className="icon-heart"></i></button>
                        <a href="courses-details.html" className="bd-btn-icon btn-info outline-info"><i
                          className="fa-light fa-share"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-course-wrapper style-seven">
                  <a href="courses-details.html" className="bd-course-thumb-wrapper bd-course-thumb-style p-relative">
                    <div className="bd-course-badge">
                      <span className="bd-badge badge-secondary">20% Desconto</span>
                    </div>
                    <div className="bd-course-thumb-bg bg-4"><img src="assets/images/course/course-bg-4.webp" alt="images" /></div>
                    <div className="bd-course-thumb-instructor center"><img src="assets/images/course/course-instructor-4.webp" alt="instructor" /></div>
                    <div className="bd-course-overly-title fs-140 text-warning">PYTHON</div>
                  </a>
                  <div className="bd-course-content">
                    <div className="bd-course-content-bottom d-flex align-items-center gap-30 mb-10">
                      <div className="bd-course-lesson has-separator">
                        <span><i className="fa-light fa-clock"></i> 50 Aulas</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> 840 Alunos</span>
                      </div>
                    </div>
                    <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Domínio da Programação Python</a></h5>
                    <p className="bd-course-description mb-10">Desbloqueie o poder do Python para desenvolvimento web, análise de dados e automação.</p>
                    <div className="bd-course-rating d-inline-flex align-items-center gap-10 mb-30">
                      <div className="bd-course-rating-icon d-flex rating-color">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="bd-course-rating-text">
                        <span>( 5.0/5 Avaliações )</span>
                      </div>
                    </div>
                    <div className="bd-course-btn">
                      <a className="bd-btn btn-outline-primary" href="courses-details.html">Inscreva-se Agora</a>
                    </div>
                  </div>
                  <div className="bd-course-info">
                    <div className="bd-course-info-wrapper">
                      <a className="bd-badge badge-primary mb-15" href="#">Programação</a>
                      <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Desenvolvimento Avançado de Python</a></h5>
                      <div className="bd-course-info-label mb-15">Nível : <span>Avançado</span></div>
                      <p>Domine Python para aplicações web complexas, ciência de dados e projetos de IA.</p>
                      <div className="bd-course-info-list">
                        <ul>
                          <li><i className="far fa-check"></i>Desenvolvimento Web com Django</li>
                          <li><i className="far fa-check"></i>Ciência de Dados com Python</li>
                          <li><i className="far fa-check"></i>IA e Aprendizado de Máquina</li>
                          <li><i className="far fa-check"></i>Automação com Python</li>
                        </ul>
                      </div>
                      <div className="bd-course-price mb-20">
                        <span className="current-price has-big">$180.00</span>
                        <span className="old-price has-big">$220.00</span>
                      </div>
                      <div className="bd-course-action-btn d-flex align-items-center gap-15">
                        <a href="courses-details.html" className="bd-btn btn-outline-border-primary">Ver Detalhes</a>
                        <button className="bd-btn-icon btn-warning outline-warning"><i
                          className="icon-heart"></i></button>
                        <a href="courses-details.html" className="bd-btn-icon btn-info outline-info"><i
                          className="fa-light fa-share"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-course-wrapper style-seven">
                  <div className="bd-course-thumb-wrapper bd-course-thumb-style p-relative">
                    <div className="bd-course-badge">
                      <a className="bd-badge badge-secondary" href="#">20% Desconto</a>
                    </div>
                    <div className="bd-course-thumb-bg bg-5">
                      <img src="assets/images/course/course-bg-5.webp" alt="course background" />
                    </div>
                    <div className="bd-course-thumb-instructor right">
                      <img src="assets/images/course/course-instructor-5.webp" alt="instructor" />
                    </div>
                    <div className="bd-course-text-content">
                      <div className="text-1 fs-50 text-white mb-25">Iniciante</div>
                      <div className="text-3 fs-30 white-bg text-primary pl-10 pr-10 pt-5 pb-5 d-inline-block latter-sp-2 uppercase">
                        Curso
                        Intensivo</div>
                    </div>
                  </div>
                  <div className="bd-course-content">
                    <div className="bd-course-content-bottom d-flex align-items-center gap-30 mb-10">
                      <div className="bd-course-lesson has-separator">
                        <span><i className="fa-light fa-clock"></i> 55 Aulas</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> 910 Alunos</span>
                      </div>
                    </div>
                    <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Fundamentos da Inteligência Artificial</a></h5>
                    <p className="bd-course-description mb-10">Mergulhe no mundo da IA e aprenda a construir
                      sistemas inteligentes do zero.</p>
                    <div className="bd-course-rating d-inline-flex align-items-center gap-10 mb-30">
                      <div className="bd-course-rating-icon d-flex rating-color">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                      </div>
                      <div className="bd-course-rating-text">
                        <span>( 4.9/5 Avaliações )</span>
                      </div>
                    </div>
                    <div className="bd-course-btn">
                      <a className="bd-btn btn-outline-primary" href="courses-details.html">Inscreva-se Agora</a>
                    </div>
                  </div>
                  <div className="bd-course-info">
                    <div className="bd-course-info-wrapper">
                      <a className="bd-badge badge-primary mb-15" href="#">IA</a>
                      <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Introdução à IA
                          e Aprendizado de Máquina</a></h5>
                      <div className="bd-course-info-label mb-15">Nível : <span>Iniciante</span></div>
                      <p>Compreenda os fundamentos da IA, incluindo redes neurais, aprendizado profundo e processamento de linguagem natural.</p>
                      <div className="bd-course-info-list">
                        <ul>
                          <li><i className="far fa-check"></i>Fundamentos da IA</li>
                          <li><i className="far fa-check"></i>Redes Neurais</li>
                          <li><i className="far fa-check"></i>Aprendizado Profundo</li>
                          <li><i className="far fa-check"></i>Noções Básicas de PNL</li>
                        </ul>
                      </div>
                      <div className="bd-course-price mb-20">
                        <span className="current-price has-big">$200.00</span>
                        <span className="old-price has-big">$250.00</span>
                      </div>
                      <div className="bd-course-action-btn d-flex align-items-center gap-15">
                        <a href="courses-details.html" className="bd-btn btn-outline-border-primary">Ver Detalhes</a>
                        <button className="bd-btn-icon btn-warning outline-warning"><i
                          className="icon-heart"></i></button>
                        <a href="courses-details.html" className="bd-btn-icon btn-info outline-info"><i
                          className="fa-light fa-share"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-course-wrapper style-seven">
                  <a href="courses-details.html" className="bd-course-thumb-wrapper bd-course-thumb-style p-relative">
                    <div className="bd-course-badge">
                      <span className="bd-badge badge-secondary">15% Desconto</span>
                    </div>
                    <div className="bd-course-thumb-bg bg-6"><img src="assets/images/course/course-bg-6.webp" alt="images" /></div>
                    <div className="bd-course-thumb-instructor right"><img src="assets/images/course/course-instructor-6.webp" alt="instructor" /></div>
                    <div className="bd-course-text-content">
                      <div className="text-1 fs-50 mb-5 text-white">Introdução</div>
                      <div className="text-2 fs-50 mb-5 text-white">Ao Illustrator</div>
                      <div className="text-3 fs-28 white-bg text-primary pl-10 pr-10 pt-5 pb-5 d-inline-block latter-sp-2 uppercase">
                        Avançado
                      </div>
                    </div>
                  </a>
                  <div className="bd-course-content">
                    <div className="bd-course-content-bottom d-flex align-items-center gap-30 mb-10">
                      <div className="bd-course-lesson has-separator">
                        <span><i className="fa-light fa-clock"></i> 60 Aulas</span>
                      </div>
                      <div className="bd-course-lesson">
                        <span><i className="fa-sharp fa-solid fa-list"></i> 1020 Alunos</span>
                      </div>
                    </div>
                    <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Fundamentos de Cibersegurança</a></h5>
                    <p className="bd-course-description mb-10">Aprenda os princípios da cibersegurança e proteja sistemas
                      contra ameaças cibernéticas.</p>
                    <div className="bd-course-rating d-inline-flex align-items-center gap-10 mb-30">
                      <div className="bd-course-rating-icon d-flex rating-color">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                      </div>
                      <div className="bd-course-rating-text">
                        <span>( 4.9/5 Avaliações )</span>
                      </div>
                    </div>
                    <div className="bd-course-btn">
                      <a className="bd-btn btn-outline-primary" href="courses-details.html">Inscreva-se Agora</a>
                    </div>
                  </div>
                  <div className="bd-course-info">
                    <div className="bd-course-info-wrapper">
                      <a className="bd-badge badge-primary mb-15" href="#">Segurança</a>
                      <h5 className="bd-course-title underline mb-10"><a href="courses-details.html">Introdução à
                          Cibersegurança</a></h5>
                      <div className="bd-course-info-label mb-15">Nível : <span>Iniciante ao Intermediário</span></div>
                      <p>Obtenha insights sobre ameaças de cibersegurança, vulnerabilidades e mecanismos de defesa.</p>
                      <div className="bd-course-info-list">
                        <ul>
                          <li><i className="far fa-check"></i>Segurança de Rede</li>
                          <li><i className="far fa-check"></i>Noções Básicas de Criptografia</li>
                          <li><i className="far fa-check"></i>Análise de Ameaças</li>
                          <li><i className="far fa-check"></i>Melhores Práticas de Segurança</li>
                        </ul>
                      </div>
                      <div className="bd-course-price mb-20">
                        <span className="current-price has-big">$220.00</span>
                        <span className="old-price has-big">$270.00</span>
                      </div>
                      <div className="bd-course-action-btn d-flex align-items-center gap-15">
                        <a href="courses-details.html" className="bd-btn btn-outline-border-primary">Ver Detalhes</a>
                        <button className="bd-btn-icon btn-warning outline-warning"><i
                          className="icon-heart"></i></button>
                        <a href="courses-details.html" className="bd-btn-icon btn-info outline-info"><i
                          className="fa-light fa-share"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bd-course-btn d-flex-center mt-50">
              <a className="bd-btn btn-outline-border-primary" href="courses-grid.html">Ver Mais Cursos</a>
            </div>
          </div>
        </section>
        {/* course area end */}

        {/* pricing plan area start */}
        <section className="bd-pricing-area section-space-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-8">
                <div className="bd-section-title-wrapper section-title-space text-center">
                  <span className="bd-section-subtitle">Escolha o Seu Plano Perfeito</span>
                  <h2 className="bd-section-title">Opções de <span className="down-mark-line">Aprendizagem</span> Flexíveis</h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-lg-4 col-md-6">
                <div className="bd-pricing-plan-wrap style-four">
                  <div className="bd-pricing-item">
                    <div className="bd-pricing-thumb">
                      <img src="assets/images/price/pricing_thumb01.webp" alt="pricing" />
                      <div className="">
                        <h3 className="title"><a href="pricing.html">Plano Básico</a></h3>
                        <div className="pricing-course">
                          <h4 className="subtitle">10 <span>Cursos</span></h4>
                        </div>
                      </div>
                    </div>
                    <div className="bd-pricing-content">
                      <p>Perfeito para iniciantes, oferecendo cursos essenciais e suporte da comunidade.</p>
                      <ul className="bd-pricing-plan-list-3">
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Acesso a Cursos Gratuitos</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Suporte da Comunidade</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> 1 Certificado</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Recursos Limitados</li>
                      </ul>
                      <div className="price-wrap">
                        <span>A Partir de</span>
                        <h3 className="price">$15.00<sub>/Mês</sub></h3>
                      </div>
                      <div className="pricing-btn">
                        <a className="bd-text-btn" href="pricing.html">Ver Planos
                          <div className="box-icon">
                            <span className="first-icon"><i className="fa-regular fa-angle-right"></i></span>
                            <span className="second-icon"><i className="fa-regular fa-angle-right"></i></span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bd-pricing-plan-wrap style-four has-bg">
                  <div className="bd-pricing-item">
                    <div className="bd-pricing-thumb">
                      <img src="assets/images/price/pricing_thumb02.webp" alt="pricing" />
                      <h3 className="title"><a href="pricing.html">Plano Padrão</a></h3>
                      <div className="pricing-course">
                        <h4 className="subtitle">20 <span>Cursos</span></h4>
                      </div>
                    </div>
                    <div className="bd-pricing-content">
                      <p>Ótimo para aprimorar habilidades com cursos diversos e recursos adicionais.</p>
                      <ul className="bd-pricing-plan-list-3">
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Acesso a Todos os Cursos</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Suporte Prioritário</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> 3 Certificados</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Recursos para Download</li>
                      </ul>
                      <div className="price-wrap">
                        <span>A Partir de</span>
                        <h3 className="price">$30.00<sub>/Mês</sub></h3>
                      </div>
                      <div className="pricing-btn">
                        <a className="bd-text-btn" href="pricing.html">Ver Planos
                          <div className="box-icon">
                            <span className="first-icon"><i className="fa-regular fa-angle-right"></i></span>
                            <span className="second-icon"><i className="fa-regular fa-angle-right"></i></span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="bd-pricing-plan-wrap style-four">
                  <div className="bd-pricing-item">
                    <div className="bd-pricing-thumb">
                      <img src="assets/images/price/pricing_thumb03.webp" alt="pricing" />
                      <h3 className="title"><a href="pricing.html">Plano Premium</a></h3>
                      <div className="pricing-course">
                        <h4 className="subtitle">Cursos <span>Ilimitados</span></h4>
                      </div>
                    </div>
                    <div className="bd-pricing-content">
                      <p>Acesso ilimitado com mentoria especializada e benefícios exclusivos.</p>
                      <ul className="bd-pricing-plan-list-3">
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Acesso Total</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Mentoria Individual</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Certificados Ilimitados</li>
                        <li><img src="assets/images/icon/check.svg" alt="icon" /> Webinars Exclusivos</li>
                      </ul>
                      <div className="price-wrap">
                        <span>A Partir de</span>
                        <h3 className="price">$50.00<sub>/Mês</sub></h3>
                      </div>
                      <div className="pricing-btn">
                        <a className="bd-text-btn" href="pricing.html">Ver Planos
                          <div className="box-icon">
                            <span className="first-icon"><i className="fa-regular fa-angle-right"></i></span>
                            <span className="second-icon"><i className="fa-regular fa-angle-right"></i></span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* pricing plan area end */}

        {/* testimonial area start */}
        <section className="bd-testimonial-area p-relative theme-bg">
          <div className="bd-testimonial-video" data-background="assets/images/bg/testimonial-bg-online-2.webp">
            <div className="bd-testimonial-video-btn animation-two">
              <a href="https://www.youtube.com/watch?v=INY3ETimTjg" className="bd-play-btn popup-video"><i
                className="fa-regular fa-play"></i></a>
            </div>
          </div>
          <div className="bd-testimonial-bg-two d-none d-lg-block bd-noise-bg"></div>
          <div className="container">
            <div className="row justify-content-end align-items-center">
              <div className="col-xxl-7 col-xl-6 col-lg-6">
                <div className="bd-testimonial-wrap section-space">
                  <div className="bd-testimonial-shape-quote">
                    <img src="assets/images/shape/testimonial-quote-icon.webp" alt="shape" />
                  </div>
                  <div className="bd-section-title-wrapper section-title-space">
                    <span className="bd-section-subtitle">DEPOIMENTOS</span>
                    <h2 className="bd-section-title white-text mb-20">O Que os Nossos <span
                      className="down-mark-line">Alunos</span> Dizem</h2>
                  </div>
                  <div className="swiper testimonialActiveFour">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="bd-testimonial-wrapper style-six">
                          <div className="bd-testimonial-item">
                            <div className="bd-testimonial-rating mb-30">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="bd-testimonial-content mb-55">
                              <p>Os cursos no iStudy transformaram a minha carreira. Os projetos práticos e
                                instrutores especializados tornaram a aprendizagem fácil e agradável. Recomendo vivamente!
                              </p>
                            </div>
                            <div className="bd-testimonial-meta d-flex-between">
                              <div className="author">
                                <div className="thumb">
                                  <img src="assets/images/avatar/avatar.webp" alt="images" />
                                </div>
                                <div className="details">
                                  <h6 className="name">Sarah Johnson</h6>
                                </div>
                              </div>
                              <div className="bd-testimonial-quote">
                                <i className="fa-regular fa-quote-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial-wrapper style-six">
                          <div className="bd-testimonial-item">
                            <div className="bd-testimonial-rating mb-30">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="bd-testimonial-content mb-55">
                              <p>O iStudy é um divisor de águas! Os horários flexíveis e o conteúdo de alta qualidade
                                permitiram-me aprimorar as minhas habilidades enquanto gerenciava a minha rotina agitada. Obrigado, iStudy!</p>
                            </div>
                            <div className="bd-testimonial-meta d-flex-between">
                              <div className="author">
                                <div className="thumb">
                                  <img src="assets/images/avatar/avatar2.webp" alt="images" />
                                </div>
                                <div className="details">
                                  <h6 className="name">James Parker</h6>
                                </div>
                              </div>
                              <div className="bd-testimonial-quote">
                                <i className="fa-regular fa-quote-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-testimonial-wrapper style-six">
                          <div className="bd-testimonial-item">
                            <div className="bd-testimonial-rating mb-30">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="bd-testimonial-content mb-55">
                              <p>Juntar-me ao iStudy foi a melhor decisão que tomei este ano. A variedade de cursos
                                e os percursos de aprendizagem personalizados ajudaram-me a alcançar os meus objetivos profissionais com
                                facilidade.</p>
                            </div>
                            <div className="bd-testimonial-meta d-flex-between">
                              <div className="author">
                                <div className="thumb">
                                  <img src="assets/images/avatar/avatar3.webp" alt="images" />
                                </div>
                                <div className="details">
                                  <h6 className="name">Emily Davis</h6>
                                </div>
                              </div>
                              <div className="bd-testimonial-quote">
                                <i className="fa-regular fa-quote-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* slider dots pagination */}
                  <div className="bd-testimonial-pagination bd-dots-pagination justify-content-start"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial area end */}

        {/* instructor area start */}
        <section className="bd-instructor-area section-space-top pb-200 primary-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="bd-section-title-wrapper section-title-space text-center">
                  <span className="bd-section-subtitle">Instrutor</span>
                  <h2 className="bd-section-title">O Nosso <span className="down-mark-line">Instrutor</span> de Cursos</h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="bd-instructor-wrapper style-two">
                  <div className="bd-instructor-item">
                    <div className="bd-instructor-thumb-wrap">
                      <div className="bd-instructor-thumb">
                        <a href="instructor-details.html"><img src="assets/images/instructor/instructor-thumb-01.webp" alt="image" /></a>
                      </div>
                      <div className="bd-instructor-social theme-social has-white circle text-center">
                        <ul className="social-icon-list">
                          <li className="bd-icon-1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li className="bd-icon-2"><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                          <li className="bd-icon-3"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li className="bd-icon-4"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-instructor-info">
                      <h6 className="name underline"><a href="instructor-details.html">Brendan
                          Fraser</a>
                      </h6>
                      <span>Designer Gráfico</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="bd-instructor-wrapper style-two">
                  <div className="bd-instructor-item">
                    <div className="bd-instructor-thumb-wrap">
                      <div className="bd-instructor-thumb">
                        <a href="instructor-details.html"><img src="assets/images/instructor/instructor-thumb-02.webp" alt="image" /></a>
                      </div>
                      <div className="bd-instructor-social theme-social has-white circle text-center">
                        <ul className="social-icon-list">
                          <li className="bd-icon-1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li className="bd-icon-2"><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                          <li className="bd-icon-3"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li className="bd-icon-4"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-instructor-info">
                      <h6 className="name underline"><a href="instructor-details.html">Michaels Leonel</a>
                      </h6>
                      <span>Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="bd-instructor-wrapper style-two">
                  <div className="bd-instructor-item">
                    <div className="bd-instructor-thumb-wrap">
                      <div className="bd-instructor-thumb">
                        <a href="instructor-details.html"><img src="assets/images/instructor/instructor-thumb-03.webp" alt="image" /></a>
                      </div>
                      <div className="bd-instructor-social theme-social has-white circle text-center">
                        <ul className="social-icon-list">
                          <li className="bd-icon-1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li className="bd-icon-2"><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                          <li className="bd-icon-3"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li className="bd-icon-4"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-instructor-info">
                      <h6 className="name underline"><a href="instructor-details.html">Jenny Wilson</a>
                      </h6>
                      <span>Especialista em Marketing Digital</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="bd-instructor-wrapper style-two">
                  <div className="bd-instructor-item">
                    <div className="bd-instructor-thumb-wrap">
                      <div className="bd-instructor-thumb">
                        <a href="instructor-details.html"><img src="assets/images/instructor/instructor-thumb-04.webp" alt="image" /></a>
                      </div>
                      <div className="bd-instructor-social theme-social has-white circle text-center">
                        <ul className="social-icon-list">
                          <li className="bd-icon-1"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li className="bd-icon-2"><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                          <li className="bd-icon-3"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                          <li className="bd-icon-4"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bd-instructor-info">
                      <h6 className="name underline"><a href="instructor-details.html">John Wick</a>
                      </h6>
                      <span>Especialista em WordPress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bd-instructor-btn d-flex-center mt-50">
              <a className="bd-btn btn-outline-border-primary" href="instructor.html">Ver Mais</a>
            </div>
          </div>
        </section>
        {/* instructor area end */}

        {/* counter area start */}
        <div className="bd-counter-area bd-counter-over-top p-relative section-space-bottom">
          <div className="container">
            <div className="bd-counter-wrapper bd-counter-border">
              <div className="p-relative fix">
                <div className="bd-counter-style-one">
                  <div className="bd-counter-item">
                    <div className="bd-counter-content">
                      <h2 className="bd-counter-title"><span data-purecounter-duration="1" data-purecounter-end="1009"
                        className="purecounter">0</span>+
                      </h2>
                      <p>Cursos Disponíveis</p>
                    </div>
                  </div>
                  <div className="bd-counter-item">
                    <div className="bd-counter-content">
                      <h2 className="bd-counter-title"><span data-purecounter-duration="1" data-purecounter-end="9313"
                        className="purecounter">0</span>+
                      </h2>
                      <p>Alunos Ativos</p>
                    </div>
                  </div>
                  <div className="bd-counter-item">
                    <div className="bd-counter-content">
                      <h2 className="bd-counter-title"><span data-purecounter-duration="1" data-purecounter-end="2015"
                        className="purecounter">0</span>+
                      </h2>
                      <p>Instrutores Especialistas</p>
                    </div>
                  </div>
                  <div className="bd-counter-item">
                    <div className="bd-counter-content">
                      <h2 className="bd-counter-title"><span data-purecounter-duration="1" data-purecounter-end="1105"
                        className="purecounter">0</span>+
                      </h2>
                      <p>Prémios Recebidos</p>
                    </div>
                  </div>
                </div>
                <div className="bd-counter-shape-wrap">
                  <div className="shape-1"><img src="assets/images/shape/counter-shape-1.webp" alt="shape" /></div>
                  <div className="shape-2"><img src="assets/images/shape/counter-shape-2.webp" alt="shape" /></div>
                  <div className="shape-3"><img src="assets/images/shape/counter-shape-6.webp" alt="shape" /></div>
                  <div className="shape-4"><img src="assets/images/shape/counter-shape-4.webp" alt="shape" /></div>
                  <div className="shape-5"><img src="assets/images/shape/counter-shape-5.webp" alt="shape" /></div>
                  <div className="shape-6"><img src="assets/images/shape/counter-shape-3.webp" alt="shape" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter area end */}

        {/* partner area start */}
        <section className="bd-partner-area section-space theme-bg-05 bd-partner-bg fix">
          <div className="container">
            <div className="row gy-30">
              <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="bd-section-title-wrapper">
                  <h2 className="bd-section-title mb-20">Os Nossos <span className="down-mark-line">Parceiros</span> Honrosos Globais</h2>
                  <p className="bd-section-paragraph">Os parceiros globais publicaram o curso que você deseja, da maneira
                    que você quer, sempre tendo
                    o controle.</p>
                  <p className="bd-section-paragraph"><span className="text-primary fs-18 fw-6">9,500</span>+ empresas
                    e alunos em todo o mundo</p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-12">
                <div className="bd-brand-wrapper style-five">
                  <div className="bd-brand-box">
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-01.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-02.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-03.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-04.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-05.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-06.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-07.webp" alt="image" />
                    </div>
                    <div className="bd-brand-item">
                      <img src="assets/images/partner/partner-08.webp" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* partner area end */}

        {/* blog area start */}
        <section className="bd-blog-area section-space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="bd-section-title-wrapper section-title-space text-center">
                  <span className="bd-section-subtitle">Notícias e Atualizações</span>
                  <h2 className="bd-section-title">Últimas <span className="down-mark-line">Notícias</span></h2>
                </div>
              </div>
            </div>
            <div className="row gy-30">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <article className="bd-blog-wrapper style-four">
                  <div className="bd-blog-thumb">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-thumb-01.webp" alt="image" /></a>
                  </div>
                  <div className="bd-blog-content">
                    <div className="bd-blog-meta-list">
                      <div className="bd-blog-meta-item has-separator-black">
                        <span className="meta-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="meta-text"><a className="meta-author" href="blog-details.html"> Alice
                          Johnson</a></span>
                      </div>
                      <div className="bd-blog-meta-item">
                        <span className="meta-icon">
                          <i className="fa-sharp fa-light fa-calendar-days"></i>
                        </span>
                        <span className="meta-text"><a href="blog-details.html">10 de Novembro
                          2024</a></span>
                      </div>
                    </div>
                    <h5 className="title underline"><a href="blog-details.html">Como Manter-se Motivado e Ter Sucesso em
                        Cursos Online</a></h5>
                    <p>Descubra os livros imperdíveis da estação, de mistérios emocionantes a biografias inspiradoras.</p>
                    <div className="bd-blog-btn">
                      <div className="icon-text-btn p-relative">
                        <a href="blog-details.html">
                          <span>Ler Mais</span>
                          <i>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.2871 1L17 6.71285L11.2871 12.4257" stroke="currentColor"
                                strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                              <path d="M1 6.71313H16.8397" stroke="currentColor" strokeWidth="1.5"
                                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <article className="bd-blog-wrapper style-four">
                  <div className="bd-blog-thumb">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-thumb-02.webp" alt="image" /></a>
                  </div>
                  <div className="bd-blog-content">
                    <div className="bd-blog-meta-list">
                      <div className="bd-blog-meta-item has-separator-black">
                        <span className="meta-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="meta-text"><a className="meta-author" href="blog-details.html"> Michael
                          Smith</a></span>
                      </div>
                      <div className="bd-blog-meta-item">
                        <span className="meta-icon">
                          <i className="fa-sharp fa-light fa-calendar-days"></i>
                        </span>
                        <span className="meta-text"><a href="blog-details.html">10 de Novembro
                          2024</a></span>
                      </div>
                    </div>
                    <h5 className="title underline"><a href="blog-details.html">Escolhendo o Curso Online Certo para
                        os Seus Objetivos</a></h5>
                    <p>Descubra os livros imperdíveis da estação, biografias inspiradoras.</p>
                    <div className="bd-blog-btn">
                      <div className="icon-text-btn p-relative">
                        <a href="blog-details.html">
                          <span>Ler Mais</span>
                          <i>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.2871 1L17 6.71285L11.2871 12.4257" stroke="currentColor"
                                strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                              <path d="M1 6.71313H16.8397" stroke="currentColor" strokeWidth="1.5"
                                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <article className="bd-blog-wrapper style-four">
                  <div className="bd-blog-thumb">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-thumb-03.webp" alt="image" /></a>
                  </div>
                  <div className="bd-blog-content">
                    <div className="bd-blog-meta-list">
                      <div className="bd-blog-meta-item has-separator-black">
                        <span className="meta-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="meta-text"><a className="meta-author" href="blog-details.html"> Emma
                          Brown</a></span>
                      </div>
                      <div className="bd-blog-meta-item">
                        <span className="meta-icon">
                          <i className="fa-sharp fa-light fa-calendar-days"></i>
                        </span>
                        <span className="meta-text"><a href="blog-details.html">10 de Novembro
                          2024</a></span>
                      </div>
                    </div>
                    <h5 className="title underline"><a href="blog-details.html">Ferramentas Essenciais de Tecnologia para o Sucesso em Cursos Online</a></h5>
                    <p>Livros da estação, de mistérios emocionantes a biografias inspiradoras.</p>
                    <div className="bd-blog-btn">
                      <div className="icon-text-btn p-relative">
                        <a href="blog-details.html">
                          <span>Ler Mais</span>
                          <i>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.2871 1L17 6.71285L11.2871 12.4257" stroke="currentColor"
                                strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                              <path d="M1 6.71313H16.8397" stroke="currentColor" strokeWidth="1.5"
                                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* blog area end */}

        {/* career area start */}
        <section className="bd-career-area bd-career-overlay">
          <div className="container">
            <div className="row gy-30 justify-content-center">
              <div className="col-xxl-12 col-xl-12 col-lg-12">
                <div className="bd-career-grid">
                  <div className="bd-career-wrapper style-one">
                    <div className="bd-career-item">
                      <div className="bd-career-bg">
                        <img src="assets/images/cta/career-cta-bg-01.webp" alt="image" />
                      </div>
                      <div className="bd-career-thumb">
                        <img src="assets/images/cta/career-cta-thumb-01.webp" alt="thumb" />
                      </div>
                      <div className="bd-career-content">
                        <span className="bd-career-subtitle">Comece a Sua Jornada Hoje</span>
                        <h4 className="bd-career-title underline"><a href="#">Torne-se um Instrutor e Partilhe a Sua
                          Experiência</a></h4>
                        <div className="bd-career-btn">
                          <a className="bd-btn btn-secondary btn-small" href="become-instructor.html">Saber Mais</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-career-wrapper style-one">
                    <div className="bd-career-item">
                      <div className="bd-career-bg">
                        <img src="assets/images/cta/career-cta-bg-02.webp" alt="image" />
                      </div>
                      <div className="bd-career-thumb">
                        <img src="assets/images/cta/career-cta-thumb-02.webp" alt="thumb" />
                      </div>
                      <div className="bd-career-content">
                        <span className="bd-career-subtitle">Desbloqueie o Seu Potencial</span>
                        <h4 className="bd-career-title underline"><a href="#">Aprimore as Suas Habilidades e Mantenha-se à Frente</a>
                        </h4>
                        <div className="bd-career-btn">
                          <a className="bd-btn btn-primary btn-small" href="courses.html">Explorar
                            Cursos</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  
    </>
  );
}
