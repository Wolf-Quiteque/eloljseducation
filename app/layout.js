import './globals.css'
import Script from 'next/script';
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <Head>
        <favicon rel="icon" href="/favicon.ico" />
      </Head>
      <body>
     <header>
      <div className="bd-header-transparent-two">
        <div className="bd-header-top style-three">
          <div className="bd-header-top-left">
            <ul>
              <li>
                <a href="tel:+8884467880">
                  <span><i className="fa-solid fa-phone-volume"></i></span>
                  <span><i className="fa-solid fa-phone-volume"></i></span>
                  +244 9XX XXX XXX
                </a>
              </li>
              <li>
                <a href="mailto:info@elocj.com">
                  <span><i className="fa-sharp fa-light fa-envelope"></i></span>
                  info@elocj.com
                </a>
              </li>
            </ul>
          </div>
          <div className="bd-header-top-right text-md-end">
            <a href="#">
              <span><i className="fa-sharp fa-regular fa-location-dot"></i></span>
              Luanda, Angola
            </a>
          </div>
        </div>

        <div className="bd-header-area header-style-one" id="header-sticky">
          <div className="bd-header-inner">
            <div className="bd-header-left">
              <div className="bd-header-logo">
                <a href="index-2.html">
                  <img src="/elojc.png" alt="Logo" />
                </a>
              </div>

              {/* Categories Dropdown */}
              <div className="bd-header-category d-none d-lg-block">
                <div className="bd-category-btn">
                  <i className="fa-solid fa-grid"></i> Categoria
                </div>
                <div className="bd-category-dropdown">
                  <nav>
                    <ul>
                      {['Desenvolvimento', 'Marketing', 'Fotografia', 'Estilo de Vida', 'Saúde e Fitness', 'Ciência de Dados', 'Marketing', 'Fotografia'].map((item, index) => (
                        <li key={index}><a href="courses.html">{item}</a></li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Menu Placeholder 
            <div className="bd-header-menu">
              <nav className="main-menu bd-mobile-menu-active d-none d-xl-block">
                <ul>
                  <li><a href="#">Menu Placeholder</a></li>
                </ul>
              </nav>
            </div> */}

            <div className="bd-header-right">
              <div className="bd-header-meta">
                <button className="bd-search-open-btn meta-icon" type="button">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </button>
                <button className="cartmini-open-btn meta-icon" type="button">
                  <i className="fa-regular fa-cart-shopping"></i>
                  <span className="item-number">3</span>
                </button>
              </div>
              <div className="bd-header-sign-btn">
                <a className="bd-btn btn-outline-primary h-40px" href="sign-in.html">Entrar</a>
                <a className="bd-btn btn-outline-border-primary h-40px" href="sign-up.html">Registar</a>
              </div>
              <div className="bd-header-hamburger">
                <div className="sidebar-toggle">
                  <a className="bar-icon" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
          {children}


          <footer>
  <div className="bd-footer-area style-two has-footer-space theme-black fix">
    <div className="container">
      <div className="row gy-30 justify-content-between">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="bd-footer-widget footer-2-col-1">
            <div className="bd-footer-widget-logo">
              <a href="index-2.html">
                <img src="/elojc.png" alt="Logo" />
              </a>
            </div>
            <div className="bd-footer-widget-content">
              <p className="bd-footer-widget-description">
                Um site ou modelo focado em educação é uma parte essencial que fornece aos visitantes
                informações sobre o programa ou serviço oferecido.
              </p>
              <div className="bd-footer-social">
                <div className="theme-social has-white">
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

        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4">
          <div className="bd-footer-widget footer-2-col-2">
            <h6 className="bd-footer-widget-title">Links</h6>
            <div className="bd-footer-widget-links">
              <ul>
                <li className="underline-two"><a href="about-online-course.html">Sobre Nós</a></li>
                <li className="underline-two"><a href="blog.html">Notícias</a></li>
                <li className="underline-two"><a href="event.html">Eventos</a></li>
                <li className="underline-two"><a href="shop.html">Loja</a></li>
                <li className="underline-two"><a href="pricing-table.html">Tabela de Preços</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4">
          <div className="bd-footer-widget footer-2-col-3">
            <h6 className="bd-footer-widget-title">Aulas</h6>
            <div className="bd-footer-widget-links">
              <ul>
                <li className="underline-two"><a href="courses.html">Cursos</a></li>
                <li className="underline-two"><a href="instructor.html">Instrutor</a></li>
                <li className="underline-two"><a href="instructor-details.html">Detalhes do Instrutor</a></li>
                <li className="underline-two"><a href="become-instructor.html">Tornar-se Instrutor</a></li>
                <li className="underline-two"><a href="student-dashboard.html">Painel do Aluno</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4">
          <div className="bd-footer-widget footer-2-col-4">
            <h6 className="bd-footer-widget-title">Suporte</h6>
            <div className="bd-footer-widget-links">
              <ul>
                <li className="underline-two"><a href="contact.html">Contacte-nos</a></li>
                <li className="underline-two"><a href="faq.html">FAQ</a></li>
                <li className="underline-two"><a href="purchase-guide.html">Guia de Compra</a></li>
                <li className="underline-two"><a href="terms-conditions.html">Termos e Condições</a></li>
                <li className="underline-two"><a href="privacy-policy.html">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-sm-12">
          <div className="bd-footer-widget footer-2-col-5">
            <h6 className="bd-footer-widget-title">Newsletter</h6>
            <div className="bd-footer-from-content">
              <div className="bd-footer-widget-subscribe">
                <p className="bd-footer-widget-description">
                  Assine a nossa newsletter para receber as últimas notícias e atualizações.
                </p>
                <form action="#">
                  <div className="bd-footer-subscribe-form style-two">
                    <input type="email" placeholder="Endereço de email" />
                    <button className="bd-btn btn-primary h-40px" type="submit">Subscrever</button>
                  </div>
                </form>
                <div className="checkout-agree">
                  <div className="checkout-option">
                    <input id="read_all" type="checkbox" />
                    <label htmlFor="read_all">Li e concordo com os termos do site.</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="bd-footer-copyright-area style-two theme-bg fix bd-noise-bg">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-12">
          <div className="bd-footer-copyright-text text-center">
            <p className="underline-two">© Copyright <span id="year">{new Date().getFullYear()}</span> | Desenvolvido por iStudy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<div className="backtotop-wrap cursor-pointer">
  <svg className="backtotop-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div>

        
    <script src="assets/js/plugins/waypoints.min.js"></script>
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="assets/js/plugins/swiper.min.js"></script>
    <script src="assets/js/plugins/wow.js"></script>
    <script src="assets/js/vendor/magnific-popup.min.js"></script>
    <script src="assets/js/vendor/isotope.pkgd.min.js"></script>
    <script src="assets/js/vendor/imagesloaded.pkgd.min.js"></script>
    <script src="assets/js/plugins/nice-select.min.js"></script>
    <script src="assets/js/vendor/ajax-form.js"></script>
    <script src="assets/js/plugins/easypie.js"></script>
    <script src="assets/js/vendor/purecounter.js"></script>
    <script src="assets/js/plugins/nouislider.min.js"></script>
    <script src="assets/js/plugins/apexcharts.min.js"></script>
    <script src="assets/js/plugins/typed.js"></script>
    <script src="assets/js/main.js"></script>
      </body>
    </html>
  );
}
