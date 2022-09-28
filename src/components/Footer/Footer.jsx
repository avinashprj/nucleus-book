import React from "react";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const Footer = () => (
  <footer className="relative bg-blueGray-200 pt-8 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-700">
            Let's keep in touch!
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Feel free to message me anytime at any of the given links
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button
              className="bg-white text-twitter shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <a
                href="http://twitter.com/avinash_prj"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter className="w-full" />
              </a>
            </button>
            <button
              className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <a
                href="https://github.com/avinashprj"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="grid place-items-center w-full" />
              </a>
            </button>
            <button
              href="https://linkedin.com/in/avinash-prajapati"
              className="bg-white text-linkedin shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <a
                href="http://linkedin.com/in/avinash-prajapati"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="w-full" />
              </a>
            </button>
            <button
              className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 text-pink"
              type="button"
            >
              <a
                href="http://instagram.com/avinashprj"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="w-full" />
              </a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="https://avinashprajapati.me"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="https://avinashprj.hashnode.dev"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="https://www.github.com/avinashprj/nucleus-book"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="/"
                  >
                    Free Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="/"
                  >
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="/"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-800 hover:text-primary font-semibold block pb-2 text-sm"
                    href="mailto:avinashprajapati914@gmail.com"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span>{new Date().getFullYear()}</span>
            <a
              href="https://github.com/nucleus-book"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Nucleusbook by{" "}
            </a>
            <a
              href="https://avinashprajapati.me"
              className="text-blueGray-500 hover:text-blueGray-800"
              target="_blank"
              rel="noreferrer"
            >
              Avinash
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  </footer>
);
