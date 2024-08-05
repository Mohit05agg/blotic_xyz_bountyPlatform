import React from "react";

function Web3Hive() {
  return (
    <div>
      <div className="intro">
        <div className="introTxt">
          <p className="let">Let's</p>
          <h1 className="title">
            Deep dive into the
            <br />
            concepts of <h1 className="web3">Web3</h1>
          </h1>
          <div className="btn">
            <a href="#">
              <span className="mas">Register</span>
              <button id="work" type="button" name="Hover">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="abt-body">
        <div className="about">
          <p className="abt">About</p>
          <p className="aboutHive">Web3Hive</p>
          <p className="text">
            Web3Hive is a elite Blockchain Bootcamp, presented by Blotic. This
            5-day program is tailor-made for college students seeking to immerse
            themselves in the cutting-edge technology of blockchain. From
            delving into the intricacies of Web3 and crypto wallets, to
            exploring the boundless possibilities of the metaverse and NFTs,
            this bootcamp is a one-of-a-kind opportunity to expand your
            knowledge and jumpstart your career. Don't miss this chance to join
            the vanguard of the blockchain revolution. Enroll in Web3Hive's
            Blockchain Bootcamp, presented by Blotic, today and elevate your
            understanding to new heights.
          </p>
        </div>

        <div className="tym-container">
          <p className="time">When?</p>
          <div className="timeline">Time Schedule</div>
          <div id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>20th Jan: About Web3</h2>
                <p>
                  Examining deep into the concepts of web3 and its promising
                  future.
                </p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture"></div>

              <div className="cd-timeline-content">
                <h2>21th Jan: About Blockchain</h2>
                <p>
                  Analyzing the blocks that collectively gave rise to this
                  innovative technology called blockchain.
                </p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>

              <div className="cd-timeline-content">
                <h2>22nd Jan: Crypto and Wallets</h2>
                <p>
                  Practical understanding of how we can contribute to this
                  decentralized technology.
                </p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>

              <div className="cd-timeline-content">
                <h2>23rd Jan: Metaverse and NFTs</h2>
                <p>
                  Understanding scalability blockchain and the fields in which
                  it is applied.
                </p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>24th Jan: Resource Gathering</h2>
                <p>
                  How to gather the correct resources to excel in your career in
                  this field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="registration">
        <p className="r-hurry">Hurry !!</p>
        <h1 className="r-h1">Why wait, get enrolled now</h1>
        <br /><div className="r-card">
          <h1 className="card">Web3Hive</h1>
          <p className="r-p">
            We are delighted to share that there will be 5 speaker sessions with post-credit certificates.
          </p>
          <div className="btn r-btn">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfU2XjCwv6Q8HtsWC7nqux_u9dKC9AFhYkYrhWWGWJNTu1vOg/viewform">
              <span className="mas">Register</span>
              <button id="work" type="button" name="Hover">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="contact"></div>
    </div>
  );
}

export default Web3Hive;
