import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="4">
                   <img src={require('../../assets/img/hp.png')} alt="..."/>

                 
                </Col>
                <Col md="8">
                 
                  <h3 style={{fontWeight: 'bold', fontSize: 40}}>
                    Gubuk-In
                  </h3>
                  <p>
                    Aplikasi GubukIn, adalah sebuah aplikasi penyedia buku buku pengetahuan....
                  </p>
                   <Button color="info" style={{fontSize: 15, backgroundColor: '#2469EF'}}>Download</Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>



         <div className="section section-team text-center">
          <Container>
            <h2 className="title">Layanan Unggulan yang Kami Berikan</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                   
                      <div className="rounded-circle" style={{fontSize: 70, color: '#2469EF'}}>
                          <i className="fas fa-mobile-alt"></i>
                      </div>
                    <h4>Pengembangan Aplikasi</h4>
                  
                    <p className="description" style={{color: '#323232'}}>
                     Jika Anda harus mengembangkan aplikasi seluler, ini adalah waktu yang paling tepat.
                    </p>
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                      <div className="rounded-circle" style={{fontSize: 70, color: '#2469EF'}}>
                          <i className="fas fa-trophy"></i>
                      </div>
                    <h4>Desain UI / UX</h4>
              
                    <p className="description" style={{color: '#323232'}}>
                      Kami menyediakan Desain UI / UX terbaik dengan mengikuti tren pasar terkini.
                    </p>
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <div className="rounded-circle" style={{fontSize: 70, color: '#2469EF'}}>
                          <i className="far fa-comment-dots"></i>
                      </div>
                    <h4>Tugas Wireframing</h4>
        
                    <p className="description" style={{color: '#323232'}}>
                      Kami menghormati pendapat pelanggan kami dan mengatasinya.
                    </p>
                  
                  </div>
                </Col>
              </Row>


             
            </div>
          </Container>
        </div>


        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Ini Tim Kami</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/rega2.jpg")}
                    ></img>
                    <h4 className="title">Rega</h4>
                    <p className="category" style={{color: '#2469EF'}}>Frontend</p>
                    <p className="description">
                        {('Seorang Full Stack Developer yang memilki motivasi diri dan keinginan belajar yang tinggi dalam mengembangkan aplikasi  web. Berpengalaman menggunakan Nodejs, Expressjs dan Reactjs dalam membuat aplikasi web. Sebelumnya pernah membuat aplikasi Sistem Pengelolaan Laundry dengan Codeigniter.').substring(0,150)}...
                    </p>
                    <Button
                      className="btn-icon btn-round"
                     style={{backgroundColor: '#2469EF'}}
                      
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.linkedin.com/in/rega-aji-prayogo-4144a4169/';
                            }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                       style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/regaaji';
                            }}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/redi.png")}
                    ></img>
                    <h4 className="title">Redi</h4>
                    <p className="category" style={{color: '#2469EF'}}>FullStack Developer</p>
                    <p className="description">
                       {('Full stack developer yang berfokus pada pengembangan aplikasi web dan mobile. Berpengalaman dalam penggunaan ExpressJS, ReactJS, React Native dan framework PHP Laravel.').substring(0,150)}...
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                      href="https://www.instagram.com/redi_rmdn/"
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.instagram.com/redi_rmdn/';
                            }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                      onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.linkedin.com/in/redi-ramdan-08b077199/';
                            }}
                     
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                      
                     <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                      onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/rediramdan';
                            }}
                  
                      >
                      <i className="fab fa-github"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/fian3.png")}
                    ></img>
                    <h4 className="title">Zulfian</h4>
                    <p className="category" style={{color: '#2469EF'}}>Frontend</p>
                    <p className="description">
                       {('Seorang Full-stack Developer yang memiliki minat serta pengalaman dalam pengembangan aplikasi berbasis web dan mobile menggunakan teknologi terbaru seperti NodeJS, ExpressJS, ReactJS, React Native, PHP, MongoDB dan MySQL. Aplikasi yang sudah dibuat yaitu E-commerce Produk Kesehatan, Peminjaman Buku, Portal Data Mahasiswa. Mengutamakan disiplin, tanggung jawab, dan berorientasi pada target.').substring(0,150)}...
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                       style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href=' https://github.com/iiizulfiannn';
                            }}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                  </div>
                </Col>
              </Row>


              <Row style={{marginTop: 100}}>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/vikra.jpg")}
                    ></img>
                    <h4 className="title">Vikra</h4>
                    <p className="category" style={{color: '#2469EF'}}>Backend</p>
                    <p className="description">
                       {('Saya seorang Full Stack Developer yang memiliki keinginan belajar tinggi dalam pengembangan aplikasi mobile maupun web. Saya memiliki kemampuan menggunakan library/framework Express, React, Redux, dan React Native. Saat ini saya sedang mengembangkan aplikasi perpustakaan dalam bentuk web maupun mobile.').substring(0,150)}...
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                       style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/Vikraardiansyah/';
                            }}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                       <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                     onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.instagram.com/vikraardiansyah/';
                            }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/dwiky2.jpg")}
                    ></img>
                    <h4 className="title">Dwiky</h4>
                    <p className="category" style={{color: '#2469EF'}}>Backend</p>
                    <p className="description">
                    {('Saya adalah orang yang suka akan sesuatu yang baru, terutama di dunia programming, saya tidak mudah putus asa dan pekerja keras. Bagi saya mengenal hal baru adalah sebuah tantangan. saya juga sangat menyukai hal - hal detail dalam dunia programming. Dan juga saya merupakan orang yang pemikir keras').substring(0,150)}...
                    </p>
                      <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.instagram.com/dwikysh/';
                            }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                     <Button
                      className="btn-icon btn-round"
                      color="info"
                       style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/dwikysahut';
                            }}
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Ichlas</h4>
                    <p className="category" style={{color: '#2469EF'}}>Backend</p>
                    <p className="description">
                      {('Seorang remaja muda yang menekuni bidang pemrograman dan sangat antusias terhadap perkembangan teknologi, memiliki skill junior fullstack programmer dengan pengalaman dengan bahasa pemrograman PHP, JavaScript, dan lainnya').substring(0,150)}...
                    </p>
                     <Button
                      className="btn-icon btn-round"
                      color="info"
                       style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.facebook.com/jr.woles';
                            }}
                    >
                      <i className="fab fa-facebook"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.instagram.com/ichlaswardy';
                            }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      style={{backgroundColor: '#2469EF'}}
                       onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/chlasswg26';
                            }}
                      
                    >
                      <i className="fab fa-github"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
