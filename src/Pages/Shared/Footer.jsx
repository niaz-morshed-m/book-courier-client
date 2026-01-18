import React from 'react';
import logo from "../../assets/Capwswsture-Photoroom.png"
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
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
            <h6 className="footer-title">Contact Info.</h6>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-xl"
              aria-label="Twitter / X"
            >
              <FaXTwitter />
            </a>

            <a
              href="mailto:bookcourier@admin.co"
              target="_blank"
              className="link link-hover"
            >
              bookcourier@admin.co
            </a>
          </nav>

          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link to="/TermsOfUse" className="link link-hover">
              Terms of Use
            </Link>
            <Link to="/PrivacyPolicy" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="/CookiePolicy" className="link link-hover">
              Cookie policy
            </Link>
          </nav>
        </footer>
        <p className="text-center my-6">
          © All Rights Reserved by BookCourier Ltd.
        </p>
      </div>
    );
};

export default Footer;