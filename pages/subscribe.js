/** @format */
import Head from "next/head";

function SubsPage() {
  return (
    <div class="py-4 px-6 2xl:flex-row bg-gray-700">
      <Head>
        <title>Pricing</title>
      </Head>
      <h1 class="text-center text-4xl  font-serif text-red-600 font-medium leading-snug tracking-wider">
        Pricing
      </h1>
      <p class="text-center text-xl text-white font-medium mt-2 px-6">
        Choose any plan you want.
      </p>
      <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
      <div class="w-full md:max-w-6xl mx-auto my-3 md:px-8">
        <div class="flex flex-row sm:flex-col xs:flex-col items-center 2xl:justify-around xl:justify-around lg:justify-between">
          <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
            <div class="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
              <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Hobby
                </h1>
                <h2 class="text-sm text-gray-500 font-semibold text-center pb-6">
                  FREE
                </h2>
                Read in short whenever you want.
              </div>
              <div class="flex flex-wrap mt-3 px-6">
                <ul>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" />
                    </div>
                    <span class="text-gray-700 text-lg ml-3">
                      No access to complete article.
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" />
                    </div>
                    <span class="text-gray-700 text-lg ml-3">
                      No weekly newsletter.
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" />
                    </div>
                    <span class="text-gray-700 text-lg ml-3">
                      No access to latest magazines.
                    </span>
                  </li>
                </ul>
              </div>
              <div class=" flex items-center p-8  uppercase">
                <button
                  class="mt-3 text-lg font-semibold 
  bg-black w-full text-white rounded-lg 
  px-6 py-3 block shadow-xl hover:bg-gray-700">
                  Select
                </button>
              </div>
            </div>
          </div>
          <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
            <div class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
              Most Popular
            </div>
            <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Expert
              </h1>
              <h2 class="text-sm text-gray-500 font-semibold text-center pb-6">
                <span class="text-3xl ">€19</span> /mo
              </h2>
              Get complete news at your service.
            </div>
            <div class="flex pl-12 justify-start sm:justify-start mt-3">
              <ul>
                <li class="flex items-center">
                  <div class="rounded-full p-2 fill-current ">
                    <img src="https://img.icons8.com/ios-filled/50/000000/double-tick.png" />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">
                    Access to complete article.
                  </span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current ">
                    <img src="https://img.icons8.com/ios-filled/50/000000/double-tick.png" />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">
                    Weekly Newsletter.
                  </span>
                </li>
                <li class="flex items-center">
                  <div class=" rounded-full p-2 fill-current ">
                    <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" />
                  </div>
                  <span class="text-gray-700 text-lg ml-3">
                    No access to latest magazines.
                  </span>
                </li>
              </ul>
            </div>

            <div class=" flex items-center p-8  uppercase">
              <button
                class="mt-3 text-lg font-semibold 
  bg-black w-full text-white rounded-lg 
  px-6 py-3 block shadow-xl hover:bg-gray-700">
                Select
              </button>
            </div>
          </div>
          <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
            <div class="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
              <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Enteprise
                </h1>
                <h2 class="text-sm text-gray-500 text-center pb-6 font-semibold">
                  €39 /mo
                </h2>
                Stripe offers everything needed to run an online business at
                scale. Get in touch for details.
              </div>
              <div class="flex flex-wrap mt-3 px-6">
                <ul>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current">
                      <img src="https://img.icons8.com/ios-filled/50/000000/double-tick.png" />
                    </div>
                    <span class="text-gray-700 text-lg ml-3">
                      Access to complete article.
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <img src="https://img.icons8.com/ios-filled/50/000000/double-tick.png" />
                    </div>
                    <span class="text-gray-700 text-lg ml-3">
                      Weekly Newsletter.
                    </span>
                  </li>
                  <li class="flex items-center">
                    <div class=" rounded-full p-2 fill-current text-green-700">
                      <img src="https://img.icons8.com/ios-filled/50/000000/double-tick.png" />{" "}
                    </div>
                    <span class="text-gray-700 text-lg ml-3">
                      Access to latest magazines.
                    </span>
                  </li>
                </ul>
              </div>

              <div class=" flex items-center p-8  uppercase">
                <button
                  class="mt-3 text-lg font-semibold 
  bg-black w-full text-white rounded-lg 
  px-6 py-3 block shadow-xl hover:bg-gray-700">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubsPage;
