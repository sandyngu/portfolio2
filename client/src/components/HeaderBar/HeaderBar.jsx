import React from 'react';
import Logo from '../../assets/images/logo.png'
import FlowerBorder from '../../assets/images/flowerborder.png'
import './headerbar.scss';

function HeaderBar(props) {

  var element = document.querySelector('.blur1');
  var element2 = document.querySelector('.blur2');
  window.addEventListener('scroll', function(e) {
    // http://stackoverflow.com/a/28633515/962603
    var scroll = window.pageYOffset || document.documentElement.scrollTop ||
                  document.body.scrollTop || 0;
    element.style.opacity = Math.max(0, Math.min(1, -scroll / 500 + 2));
    element2.style.opacity = Math.max(0, Math.min(1, -scroll / 500 + 2));
  });

    return (
      <div className='headerbar'>
          <img src={Logo} className="headerbar__logo" alt="Logo"/>
          <h2 className="headerbar__text" id="header">{props.state.headerTitle}</h2>
          <div className="headerbar__image-container">
            <img src={FlowerBorder} className="headerbar__image blur1" alt="Flowers" />
            <img src={FlowerBorder} className="headerbar__image blur2" alt="Flowers" />
          </div>
          <div className="headerbar__menu">
              <div className="headerbar__menu-logo" onClick={()=>props.logoHover()}>
                  <div className="headerbar__menu-line headerbar__menu-line1">———</div>
                  <div className="headerbar__menu-line headerbar__menu-line2">———</div>
                  <div className="headerbar__menu-line headerbar__menu-line3">———</div>
              </div>
          </div>
      </div>
    )
}

export default HeaderBar;