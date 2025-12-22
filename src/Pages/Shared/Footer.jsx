import React from 'react';
import logo from "../../assets/Capwswsture-Photoroom.png"
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
      <div>
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-21">
          <aside>
            <img className="w-40" src={logo} alt="" />
            <p>
              BookCourier Ltd.
              <br />
              Providing reliable Service since 2010
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contact Info.</h6>
            <a className="link link- text-xl">
              <FaFacebook></FaFacebook>
            </a>
            <a className="link link- text-xl">
              <FaLinkedin></FaLinkedin>
            </a>
            <a className="link link- text-xl">
              <FaXTwitter></FaXTwitter>
            </a>
            <a className="link link-">bookcourier@admin.co</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <p className='text-center mb-6'>© All Rights Reserved by BookCourier Ltd.</p>
      </div>
    );
};

export default Footer;