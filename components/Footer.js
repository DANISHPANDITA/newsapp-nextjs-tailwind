/** @format */
import Head from "next/head";
function Footer() {
  return (
    <footer className="relative bg-blue-100 pt-8 pb-6 mt-6">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <div className="flex flex-wrap text-left lg:text-left">
        <div className="lg:w-6/12 px-4 xl:w-6/12 2xl:w-6/12 2xl:text-center">
          <h4 className="text-3xl font-semibold text-gray-700">
            Let's keep in touch!
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-gray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button
              onClick={() => {
                window.location.href("https://twitter.com/Dan_is_h19");
              }}
              className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button">
              <i className="fab fa-twitter"></i>
            </button>
            <button
              onClick={() => {
                window.location.href("https://www.facebook.com/danish.pandita");
              }}
              className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button">
              <i className="fab fa-facebook-square"></i>
            </button>
            <button
              className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              onClick={() => {
                window.location.href(
                  "https://www.instagram.com/danishpandit19/"
                );
              }}>
              <i class="fab fa-instagram"></i>
            </button>
            <button
              className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              onClick={() => {
                window.location.href("https://github.com/danishpandita");
              }}>
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div className="lg:w-6/12 px-4  xl:w-6/12">
          <div className="flex flex-wrap items-top mb-6 2xl:flex-row">
            <div className=" lg:w-4/12 px-4 ml-auto w-auto">
              <span className="block uppercase text-gray-800 text-sm font-bold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    Free Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-auto  px-4 ">
              <span className="block uppercase text-gray-800 text-sm font-bold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gra800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/danishpandita">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray--500 font-semibold py-1">
            Copyright © <span id="get-current-year">2021</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              className="text-gray--500 hover:text-gray-800"
              target="_blank"
            />{" "}
            Created by{"  "}
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              className="text-gray-500 hover:text-gray-800">
              Danish Pandita
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
