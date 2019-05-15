import React from 'react';
import ig_icon from '../img/ig_icon.png';
import fb_icon from '../img/fb_icon.png';
import snapchat_icon from '../img/snapchat_icon.png';
import spotify_icon from '../img/spotify_icon.png';
import twitter_icon from '../img/twitter_icon.png';
import youtube_icon from '../img/youtube_icon.png';

const Footer = (props) => {
  if(props.removeHeaderAndFooter === true){
    return(null);
  } else{
    return(
      <footer> {/* Footer */}
        <div className="container-fluid">
          <div className="row footer_content">
            <div className="col-12 col-md-6">
              <div id="email_header_content">
                <h1 id="email_sign_up_title">Get Our Emails</h1>
                <h5 id="email_sign_up_detail">Sign up to receive Urban Outfitters emails and
                  get first dibs on new arrivals, sales, exclusive content and more!</h5>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group d-md-inline-block">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
              </div>
              <button type="button" className="btn">SUBMIT</button>
            </div>
            <div className="col-12">
              <p id="email_sign_up_agreement">
                By entering your email address, you agree to receive Urban Outfitters offers, promotions, other commercial messages. You can view our Privacy Policy here and you may unsubscribe at any time.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 footer_content">
              <h3 className="footer_section_header">Help + Info</h3>
              <p className="footer_more_options">
                Bla bla bla
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3 footer_content">
              <h3 className="footer_section_header">Quick Links</h3>
              <p className="footer_more_options">
                Bla bla bla
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3 footer_content">
              <h3 className="footer_section_header">Extras</h3>
              <p className="footer_more_options">
                Bla bla bla
              </p>
            </div>
            {/* Start of social media container */}
            <div className="col-12 col-lg-3 footer_content">
              <h3 className="footer_section_header">Follow us</h3>
              <ul id="social_media_icon_contianer">
                <li>
                  <img className="social_icon" src={ig_icon} alt="Instagram" />
                </li>
                <li>
                  <img className="social_icon" src={fb_icon} alt="Facebook" />
                </li>
                <li>
                  <img className="social_icon" src={snapchat_icon}alt="Snapchat" />
                </li>
                <li>
                  <img className="social_icon" src={spotify_icon} alt="Spotify" />
                </li>
                <li>
                  <img className="social_icon" src={twitter_icon} alt="Twitter" />
                </li>
                <li>
                  <img className="social_icon" src={youtube_icon} alt="Youtube" />
                </li>
              </ul> {/* End of  ul */}
            </div>   {/*End of social media container */}
          </div>
        </div>
        {/*End of container*/}

         {/*End of Footer*/}
      </footer>
    );
  }
}
export default Footer;
