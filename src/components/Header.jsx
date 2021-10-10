import React, { Component } from 'react'
import   "./header/header.css"



export default function Header() {
    return (
        
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Ham</title>
        {/* font awesome cdn link */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* custom css file link */}
        <link rel="stylesheet" href="./style.css" />
        {/* Header Section Start */}
        <header id="header">
          <a href className="logo"><img src="./image/—Pngtree—letter h logo template design_3580314.jpg" alt="" /><span style={{marginLeft: '5px'}}>the</span><span style={{color: 'rgb(24,207, 171)'}}>Ham</span></a>
          <nav className="navbar">
            <a href>Home</a>
            <a href>About</a>
            <a href>Skills</a>
            <a href>Service</a>
            <a href>Work</a>
            <a href>Testimonial</a>
            <a href>Blog</a>
            <a href>Team</a>
            <a href>Contact</a>
            <a href><i className="fas fa-search" /></a>
          </nav>
        </header>
        {/* Header Section End */}
        {/* Section1 Start */}
        <section id="section1">
          <div className="section1">
            <div className="title1">
              <h2>THE HAM IS <span>WORDPRESS THEME</span></h2>
              <h1>WE ARE CREATIVE</h1>
              <h3>Just Buy And Enjoy These Awesome Features</h3>
            </div>
            <div className="sliders">
              <div className="sld">
                <button type="button" style={{backgroundColor: 'rgb(24,207, 171)', marginRight: '15px'}}>EXPLOPE NOW</button>
                <button style={{backgroundColor: 'rgb(0, 203, 246)'}}>PURCHASE NOW</button>
              </div>
              <div className="slider">
                <div><img src="./image/h1.jpg" alt="" />
                  <div className="btnsl"> <button>&lt;</button><button>&gt;</button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Boxs">
            <div className="box">
              <div className="icon"><i className="fas fa-hand-point-up" /></div>
              <div className="title-box">DIFFERENT THEME OPTION</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-gem" /></div>
              <div className="title-box">FULLY CUSTOMIZABLE</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-lightbulb" /></div>
              <div className="title-box">UNLIMITED SUPPORT</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-tablet-alt" /></div>
              <div className="title-box">RESPONSIVE ALL DEVICE</div>
            </div>
          </div>
        </section>
        {/* Section1 End */}
        {/* Section2 Start */}
        <section id="section2" className="section2">
          <div className="title2">Creative Amazing Features</div>
          <div className="Boxs2">
            <div className="boxs2">
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-leaf" /><span>Retina ready</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-edit" /><span>Creatve Blog Style</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-search" /><span>Icon Fonts</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
            </div>
            <div className="boxs2">
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-hourglass" /><span>Parallax Effects</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-desktop" /><span>Amazing Interface</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-tools" /><span>SEO Optimlzed</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
            </div>
            <div className="boxs2">
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-lightbulb" /><span>Creative Solutions </span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-paper-plane" /><span>Retina ready</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
              <div className="box">
                <div className="title-box">
                  <div className="icon2"><i className="fas fa-list" /><span>Retina ready</span></div>
                </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quibusdam corrupti doloribus odit minima, consequuntur </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section2 Start */}
        {/* Section3 Start */}
        <section className="section3" id="section3">
          <div className="section">
            <div className="title">About Our Company</div>
            <div className="navbar">
              <a href>OUR HISTORY</a>
              <a href>OUR BIOGRAPHY</a>
              <a href>OUR SKILLS</a>
            </div>
            <div className="content">
              <div className="content-box">USER INTERFACE</div>
              <div className="content-box" style={{width: '80%', backgroundColor: 'rgb(17, 176, 222)'}}>WEB DESIGN</div>
              <div className="content-box" style={{width: '50%', backgroundColor: 'rgb(187, 138, 54)'}}>WORDPRESS</div>
              <div className="content-box" style={{width: '70%', backgroundColor: 'rgb(214, 127, 127)'}}>HTML &amp; CSS </div>
              <div className="content-box" style={{width: '65%', backgroundColor: 'rgb(32, 188, 157)'}}>APP DESIGN</div>        
            </div>
          </div>
        </section>
        {/* Section3 End */}
        {/* Section4 Start */}
        <section className="section4" id="section4">
          <h1 className="title">Our Amazing Work</h1>
          <nav>
            <a href>ALL</a>  
            <a href>Graphic Design</a>
            <a href>Web Design</a>
            <a href>Landing Pages</a>
            <a href>Wordpress</a>
          </nav>
          <div className="Boxs">
            <div className="boxs">
              <div className="boxs-content">
                <div className="icons">
                  <div className="icon"><i style={{backgroundColor: 'white', color: 'rgb(24,207, 171)', border: '1px solid rgb(24,207, 171)'}} className="fas fa-thumbtack" /></div>
                  <div className="icon" style={{paddingLeft: '3px'}}><i className="fas fa-search" /></div>
                </div>
                <h4>CREATIVE DESIGN</h4>
                <h5>Web Design</h5>
              </div>
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h10.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h3.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h4.jpg" alt="" />
            </div>
          </div>
          <div className="Boxs">
            <div className="boxs">
              <img className="imgss4" src="./image/h5.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h6.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h7.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h8.jpg" alt="" />
            </div>
          </div>
          <div className="Boxs">
            <div className="boxs">
              <img className="imgss4" src="./" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h10.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h11.jpg" alt="" />
            </div>
            <div className="boxs">
              <img className="imgss4" src="./image/h3.jpg" alt="" />
            </div>
          </div>
          <div><button style={{color: 'white', backgroundColor: 'rgb(24,207, 171)', padding: '15px 15px', margin: '50px 0 70px 0'}}>+LOAD MORE</button></div>
        </section>
        {/* Secton 4 End */}
        {/* Section 5 Start */}
        <section id="section5" className="section5">
          <h1>Our Services</h1>
          <div className="contentss5">
            <nav className="menu5">
              <a href>Web Design </a><div className="arrow-down" />
              <a href>Graphic Design</a>
              <a href>Online Support</a>
              <a href>App Design</a>
              <a href>Online Marketing</a>
              <a href>Seo Service</a>
            </nav>
            <div className="content">
              <img src="./image/h3.jpg" alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam reprehenderit fugiat laudantium dolorum harum velit ipsa quas? Est provident inventore eos sit illum excepturi quasi impedit facilis fugit. Dolorem quia dicta natus necessitatibus ab laboriosam voluptate, repudiandae aperiam quidem? Laborum maxime sed minima pariatur similique ex ipsa, cupiditate dolorum dignissimos numquam praesentium ad consectetur repellendus, rerum quisquam cum ab voluptate itaque recusandae consequuntur doloribus. Adipisci quasi nam voluptatibus saepe aut ipsum voluptate! Aspernatur, deserunt! Rem, placeat. Dolores quas, asperiores tempore id, ea ducimus voluptas dolore numquam eaque vitae sint illum fuga autem qui dicta, ratione quidem alias quisquam. Non, aliquam?</p>
            </div>
          </div>
        </section>
        {/* Section 5 End */}
        {/* Section 6 Start */}
        <section id="section6" className="section6">
          <h1>EVERYTHING IS READY . JUST BUY AND INSTALL NOW</h1>
          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eum eveniet aliquid.</h5>
          <button>PURVHASE NOW</button>
        </section>
        {/* Section 6 End */}
        {/* Section 7 Start */}
        <section id="section7" className="section7">
          <h1>Breaking News</h1>
          <div className="Boxs7">
            <div className="boxs7">
              <div className="box7">
                <div className="img"><img src="./image/h3.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
              <div className="box7">
                <div className="img"><img src="./image/h4.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
              <div className="box7">
                <div className="img"><img src="./image/h5.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
              <div className="box7">
                <div className="img"><img src="./image/h6.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
            </div>
            <div className="boxs7">
              <div className="box7">
                <div className="img"><img src="./image/h7.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
              <div className="box7">
                <div className="img"><img src="./image/h8.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
              <div className="box7">
                <div className="img"><img src="./image/h9.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
              <div className="box7">
                <div className="img"><img src="./image/h11.jpg" alt="" />
                  <div className="nhan"><span>12</span><br /><span>Feb</span></div>
                </div>
                <h2>Amazing Image Post</h2>
                <h4><span>By admin</span>|<span>2 comment</span></h4>
              </div>
            </div>
          </div>
          <div className="Boxs7-2">
            <div className="box7-2">
              <div style={{border: '2px solid rgb(24,207, 171)', borderRadius: '100%', marginTop: '0px'}}><div className="item"><i className="fas fa-briefcase" /></div></div>
              <h1>4609</h1>
              <h4>Works</h4>
            </div>
            <div className="box7-2">
              <div style={{border: '2px solid rgb(37, 51, 60)', borderRadius: '100%'}}><div className="item" style={{backgroundColor: 'rgb(37, 51, 60)', border: '17px solid rgb(24,207, 171)'}}><i className="fas fa-user" /></div></div>
              <h1>3470</h1>
              <h4 style={{color: 'black'}}>Customers</h4>
            </div>
            <div className="box7-2">
              <div style={{border: '2px solid rgb(24,207, 171)', borderRadius: '100%'}}><div className="item"><i className="fas fa-shopping-cart" /></div></div>
              <h1>2908</h1>
              <h4>Purchase</h4>
            </div>
            <div className="box7-2">
              <div style={{border: '2px solid rgb(37, 51, 60)', borderRadius: '100%'}}><div className="item" style={{backgroundColor: 'rgb(37, 51, 60)', border: '17px solid rgb(24,207, 171)'}}><i className="fas fa-map" /></div></div>
              <h1>3470</h1>
              <h4 style={{color: 'black'}}>Customers</h4>
            </div>
          </div>
        </section>
        {/* Section 7 End */}
        {/* Section 8 Start */}
        <div id="section8" className="section8">
          <h1>Our Pricing Table</h1>
          <div className="Boxs-8">
            <div className="box-8">
              <p>PERSONAL</p>
              <div className="price">
                $99<span>/Mounth</span>
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <button className="buttonbuy">
                BUY NOW
              </button>
            </div>
            <div className="box-8">
              <p>BUSINESS</p>
              <div className="price">
                $199 <span>/Mounth</span>
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <button className="buttonbuy">
                BUY NOW
              </button>
            </div>
            <div className="box-8">
              <p>PROFESSIONAL</p>
              <div className="price">
                $299 <span>/Mounth</span>
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <button className="buttonbuy">
                BUY NOW
              </button>
            </div>
            <div className="box-8">
              <p>DIAMOND</p>
              <div className="price">
                $299 <span>/Mounth</span>
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <div className="chimuc">
                1.Hosting
              </div>
              <button className="buttonbuy">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        {/* Section 8 End */}
        {/* Sextion 9 Start */}
        <div id="section9" className="section9">
          <h1>What People About theHam</h1>
          <i className="fas fa-quote-left" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, amet. Voluptatibus incidunt ipsam itaque esse dignissimos dolor sed laboriosam fugit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur architecto nemo animi! Dolorum, nobis.</p>
          <h5>HASANALI</h5>
          <h6>UX Designer</h6>
          <div className="avatar">
          </div>
          <div className="section9-bottom">
            <button>&lt;</button>
            <div style={{backgroundImage: 'url(./image/h13.jpg)'}} className="s9-a" />
            <div style={{backgroundImage: 'url(./image/h14.jpg)'}} className="s9-a" />
            <div style={{backgroundImage: 'url(./image/h15.jpg)'}} className="s9-a" />
            <div style={{backgroundImage: 'url(./image/h16.jpg)'}} className="s9-a" />
            <button>&gt;</button>
          </div>
        </div>
        {/* Sextion 9 End */}
        {/* Section 10 Start */}
        <div id="section10" className="section10">
          <h1>Meet Our Team</h1>
          <div className="Boxs-10">
            <div className="box-10">
              <div className="avatar-10">
                <img src="./image/h13.jpg" alt="" />
              </div>
              <div style={{backgroundColor: 'rgb(46,74,91)'}}>
                <h5>Al Masum</h5>
                <h6>Feunder</h6>
              </div>
              <div className="ss10-botton">
                <div className="item-10"><i className="fab fa-facebook-f" /></div>
                <div className="item-10"><i className="fab fa-twitter" /></div>
                <div className="item-10"><i className="fab fa-skype" /></div>
                <div className="item-10"><i className="fab fa-vuejs" /></div>
              </div>
            </div>
            <div className="box-10">
              <div className="avatar-10">
                <img src="./image/h12.jpg" alt="" />
              </div>
              <h5>Al Masum</h5>
              <h6>Feunder</h6>
              <div className="ss10-botton">
                <div className="item-10"><i className="fab fa-facebook-f" /></div>
                <div className="item-10"><i className="fab fa-twitter" /></div>
                <div className="item-10"><i className="fab fa-skype" /></div>
                <div className="item-10"><i className="fab fa-vuejs" /></div>
              </div>
            </div>
            <div className="box-10">
              <div className="avatar-10">
                <img src="./image/h15.jpg" alt="" />
              </div>
              <h5>Al Masum</h5>
              <h6>Feunder</h6>
              <div className="ss10-botton">
                <div className="item-10"><i className="fab fa-facebook-f" /></div>
                <div className="item-10"><i className="fab fa-twitter" /></div>
                <div className="item-10"><i className="fab fa-skype" /></div>
                <div className="item-10"><i className="fab fa-vuejs" /></div>
              </div>
            </div>
            <div className="box-10">
              <div className="avatar-10">
                <img src="./image/h14.jpg" alt="" />
              </div>
              <h5>Al Masum</h5>
              <h6>Feunder</h6>
              <div className="ss10-botton">
                <div className="item-10"><i className="fab fa-facebook-f" /></div>
                <div className="item-10"><i className="fab fa-twitter" /></div>
                <div className="item-10"><i className="fab fa-skype" /></div>
                <div className="item-10"><i className="fab fa-vuejs" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* Sectio 10 End */}
        {/* Section 11 Start */}
        <div id="section11" className="section11">
          <h1>THEHAM IS NOT ONLY WORDPRESS THEME</h1>
          <h2>IT'S ALSO CLEAN AND CREATIVE DESIGN</h2>
          <div className="ss11-giua">
            <p><i className="fas fa-check-circle" />Clean Layout Design</p>
            <p><i className="fas fa-check-circle" />Many Style Portfolo Design</p>
            <p><i className="fas fa-check-circle" />Beautiful Blog Page</p>
            <p><i className="fas fa-check-circle" />Mega PSD Pack</p>
            <p><i className="fas fa-check-circle" />User Friendly Design</p>
            <p><i className="fas fa-check-circle" />Full Shortcodes</p>
            <p><i className="fas fa-check-circle" />Fully Edltable PSD</p>
            <button>PURCHASE NOW</button>
          </div>
        </div>
        {/* Section 11 End */}
        {/* Section 12 Start */}
        <div id="section12" className="section12">
          <h1>Keep In Touch</h1>
          <form action className="form-12">
            <input style={{border: '1px solid black', width: '400px', padding: '8px 0', opacity: 1, margin: '8px 0'}} type="text" defaultValue="Name" />
            <input style={{border: '1px solid black', width: '400px', padding: '8px 0', opacity: 1, margin: '8px 0'}} type="text" defaultValue="Email" />
            <textarea style={{border: '1px solid black', width: '400px', padding: '8px 0', opacity: 1, margin: '8px 0'}} value="mewssage" name id cols={50} rows={10} defaultValue={""} />
            <input type="submit" defaultValue="SEND REQUEST" style={{width: '400px', padding: '10px 0', color: 'white', backgroundColor: 'rgb(24, 207, 171)'}} />
          </form>
        </div>
        {/* Section 12 End */}
        {/* Section13 Start */}
        <div className="section13" id="section13">
          <div className="ss13-1" style={{height: '400px'}}><span style={{fontSize: '40px', fontWeight: 750, color: 'white'}}>the</span><span style={{color: 'rgb(24,207, 171)', fontSize: '40px', fontWeight: 750}}>Ham</span>
            <p style={{maxWidth: '300px', padding: '10px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, magni! Eligendi distinctio, impedit iste maxime labore accusantium temporibus dolores enim</p>
            <p style={{maxWidth: '300px', padding: '10px 0px', marginTop: '40px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iusto.</p>
            <p style={{maxWidth: '300px', padding: '10px 0px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptate blanditiis ipsa voluptatibus ad reprehenderit!</p>
          </div>
          <div className="ss13-2">
            <h2 style={{paddingBottom: '30px', paddingTop: '10px'}}>RECENT POST</h2>
            <div className="ss13-2-nho">
              <div className="avatar-ss13-2"><img src="./image/h5.jpg" alt="" /></div>
              <div className="ss13-right">
                <h3>A STANDARD IMAGE POST</h3>
                <p style={{maxWidth: '250px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto eum itaque eius!</p>
                <p style={{paddingTop: '10px'}}>10 March ,2015</p>
              </div>
            </div>
            <div className="ss13-2-nho">
              <div className="avatar-ss13-2"><img src="./image/h5.jpg" alt="" /></div>
              <div className="ss13-right">
                <h3>A STANDARD IMAGE POST</h3>
                <p style={{maxWidth: '250px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto eum itaque eius!</p>
                <p style={{paddingTop: '10px'}}>10 March ,2015</p>
              </div>
            </div>
            <div className="ss13-2-nho">
              <div className="avatar-ss13-2"><img src="./image/h5.jpg" alt="" /></div>
              <div className="ss13-right">
                <h3>A STANDARD IMAGE POST</h3>
                <p style={{maxWidth: '250px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto eum itaque eius!</p>
                <p style={{paddingTop: '10px'}}>10 March ,2015</p>
              </div>
            </div>
          </div>
          <div className="ss13-3">
            <h2 style={{paddingBottom: '20px'}}>TAGS</h2>
            <div>
              <div>
                <button>audio</button>
                <button>audio</button>
                <button>audio</button>
              </div>
              <div>
                <button>audio</button>
                <button>audio</button>
                <button>audio</button>
              </div>
              <div>
                <button>audio</button>
                <button>audio</button>
                <button>audio</button>
              </div>
              <div>
                <button>audio</button>
                <button>audio</button>
                <button>audio</button>
              </div>
            </div>
            <div>
              <h2 style={{padding: '20px 0'}}>NEWSLETTER</h2>
              <p style={{maxWidth: '250px', paddingBottom: '15px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ullam, libero non temporibus rerum unde?</p>
              <form>
                <input style={{height: '30px', backgroundColor: 'rgb(34, 53, 63)'}} type="text" name="search" placeholder="Enter email" /><button style={{width: '30px', height: '30px', backgroundColor: 'rgb(34, 53, 63)'}}>Go</button>
              </form>   
            </div>
          </div>
          <div className="ss13-4" style={{height: '400px'}}>
            <h2 style={{marginBottom: '40px'}}>FLICKE FEED</h2>
            <div style={{display: 'flex', flexDirection: 'row'}}><img src="./image/h6.jpg" alt="" /><img src="./image/h6.jpg" alt="" /></div>
            <div style={{display: 'flex', flexDirection: 'row'}}><img src="./image/h6.jpg" alt="" /><img src="./image/h6.jpg" alt="" /></div>
            <div style={{display: 'flex', flexDirection: 'row'}}><img src="./image/h6.jpg" alt="" /><img src="./image/h6.jpg" alt="" /></div>
          </div>
        </div>
        {/* Section13 End */}
        {/* Footer Start */}
        <div className="footer">
          <p>Copyright 2015 <span>theHam</span> All Right Reserved</p>
        </div>
        {/* Footer End */}

      </div>
    )
}
