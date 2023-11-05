import React, { Component } from 'react';
import './style.css';
import '../src/about.css';
import aboutUsBuildings from './about-us/about-us-buildings.png';
import solution from './about-us/solution-arrow.png';
import problem from './about-us/problem-img.png';
import hireContractor from './about-us/hire-contactor-from.png';
class About extends React.Component {
  render() {
    return (
      <div>
        <div class="about-us-banner banner-sec">
          <div class="container">
            <div class="about-us-cont">
              <div class="about-us-lft col-md-7">
                <h1 class="banner-heading text-white">
                  Companies helping each other makes an efficient world
                </h1>
                <p class="paragraph-global-text text-white">
                  We're uniting global software agencies on a single platform,
                  fostering resource and expertise sharing, while also striving
                  to be the industry's trusted source for engagement.
                </p>
              </div>
              <div class="about-us-rgt about-us-banner-img col-md-5">
                <figure class="text-right">
                  <img loading="lazy" alt="banner" src={aboutUsBuildings}/>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="sec-padding">
          <div class="quote-sec">
            <div class="container">
              <div class="row mx-0">
                <div class="col-md-4 col-sm-12">
                  <figure>
                    <img src={problem} alt="" />
                  </figure>
                </div>
                <div class="col-md-8 col-sm-12 quote-content-sec">
                  <h4 class="heading-four">Problem we solve</h4>
                  <h1 class="heading-one">
                    Manually appointing vendors to hire contract talent?
                    Outsourcing to freelancers instead of Agencies?
                  </h1>
                  <p class="paragraph-global-text sub-head-paragraph">
                    For any business, economic ups and downs are a reality.
                    Contract talent offers flexibility. Enterprise vendors reach
                    out to other agencies in search for quality talent creating
                    a multi-layered and time consuming search often delayed
                    longer than expected due to payment terms negotiations and
                    agreements.
                  </p>
                </div>
              </div>
              <div class="mx-auto text-center hide-on-mobile arrow-img-sec">
                <img src={solution} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="about-positions">
    <div class="container">

        <ul>
            <li class="col-md-6 our-story-space our-story-space-lft pl-0">
                <h4 class="heading-four">Solution</h4>
                <h2 class="heading-one ourStoryTitle">Hire Contractors from Trusted Software Agencies, Outsource with Confidence</h2>
                <p class="paragraph-global-text  sub-head-paragraph space">LinkedIn, Indeed and other job boards are great for full-time hiring, but what about finding contract talent? Aumnics connects you directly with a network of reputable software agencies and their skilled professionals, giving you the confidence to hire contract talent.</p>
                <p class="paragraph-global-text  sub-head-paragraph space">We also simplify outsourcing to software agencies, ensuring your projects are in the hands of expert teams with strong organizational support, meeting high standards and deadlines.</p>
            </li>
            <li class="col-md-5 text-right">
                <figure>
                    <img loading="lazy" src={hireContractor} alt="img" />
                </figure>
            </li>
        </ul>
        <ul class="mobile-flex-column-reverse">
            <li class="col-md-5 text-left">
                <figure>
                    <img loading="lazy" src={aboutUsBuildings} alt="mission" />
                </figure>
            </li>
            <li class="col-md-6 our-story-space our-story-space-lft pl-0">
                <h2 class="heading-one ourStoryTitle">Aumnics dev support: When your software dev teams needs expert help</h2>
                <p class="paragraph-global-text  sub-head-paragraph space">will be hired as contractors on Aumnics</p>
                <p class="paragraph-global-text  sub-head-paragraph space">At Aumnics, we’re changing the way you hire contract talent, outsource projects, and get expert help to your dev teams by connecting to our global network of software services agencies.</p>
            </li>
        </ul>
    </div>
</div>
      </div>
    );
  }
}

export default About;