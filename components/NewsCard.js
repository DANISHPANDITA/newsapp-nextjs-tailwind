/** @format */

function NewsCard({ author, description, title, img, url, date }) {
  return (
    <div className="bg-gray-200 p-1 w-1/3 md:w-1/2 sm:w-1/2 xs:w-full">
      <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
        <div>
          <img className="w-full" src={img} />
          <div className="px-4 py-2">
            <h1 className="text-xl font-gray-700 font-bold">{title}</h1>
            <p className="text-lg text-red-700 font-semibold font-serif text-center">
              By : {author}
            </p>
            <div className="flex space-x-2 mt-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="text-lg text-gray-600 font-semibold mb-2">
                {date}
              </h3>
            </div>
            <p className="text-base font-serif tracking-normal">
              {description}
            </p>
            <button
              onClick={() => {
                window.location.href = url;
              }}
              className="mt-12 font-serif font-bold w-full text-center bg-yellow-400 py-2 rounded-lg">
              Read Complete Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
