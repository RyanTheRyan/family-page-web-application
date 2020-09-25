import React from 'react'

export default function() {
  return (
      <div>
          {/* <h1>Hi bro, I love you so much, and I am very proud of you, and of the man you're becoming</h1> */}
          <div className="header-wrapper">
            <div className="header-quote-wrapper">
              <p><span className="quote">"</span>It's never goodbye, It's always see you later.<span className="quote">"</span><br /><span className="linda">Linda Lee Phipps Lowe</span></p>
            </div>
          </div>
          <div className="information">
            <div className="information-wrapper">
              <div className="sheild-image">
                <img src={require('../../../static/assets/images/family-sheild.png')} alt="Lowe Family Sheild" />
              </div>
              <div className="text-information">
                <div className="information-heading">
                  <h1>Welcome to the Lowe family page!</h1>
                </div>
                <div className="information-content">
                  <p>This website was create for all descedants of Rhichard Lowe who was born on Dec 25th, 1826. Here you can view recent family news and get update about the anual family reunioun.</p>
                  <p>Please remember that this a family site. Please be kind in your remarks. Any inappropraite posts will be removed.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}