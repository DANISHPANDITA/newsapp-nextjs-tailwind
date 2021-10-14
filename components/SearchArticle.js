/** @format */
import Button from "@material-tailwind/react/Button";
import moment from "moment";
function SearchArticle({
  author,
  content,
  source,
  publishedAt,
  url,
  urlToImage,
  description,
  title,
}) {
  return (
    <div className="my-2 p-3 bg-cardbg flex flex-col lg:flex-row xl:flex-row 2xl:flex-row rounded-xl shadow-2xl">
      <img
        className="w-5/12 md:w-8/12 sm:w-10/12 xs:w-full h-auto mx-auto rounded-xl"
        src={urlToImage}
        alt=""
      />
      <div className="flex flex-col justify-between p-2">
        <p className="text-center font-bold text-xl text-blue-700 md:text-lg sm:text-base xs:text-sm">
          {title}
        </p>
        <p className="text-center text-gray-700 font-semibold text-base md:text-sm sm:text-sm xs:text-xs">
          By :{" "}
          <span className="text-gray-800 ">
            {author} - ({moment.utc(publishedAt).format("MM/DD/YYYY")})
          </span>
        </p>
        <p className="text-center text-gray-700 font-semibold text-xl md:text-base sm:text-sm xs:text-xs">
          ({source})
        </p>
        <p className="text-justify font-medium text-lg md:text-base sm:text-sm xs:text-sm">
          {description}
        </p>
        <p className="text-justify font-medium text-lg md:text-base sm:text-sm xs:text-sm">
          {content}
        </p>
        <Button
          color="orange"
          buttonType="filled"
          size="lg"
          rounded={false}
          block={true}
          iconOnly={false}
          ripple="light"
          onClick={() => {
            window.location.href = url;
          }}>
          Read complete Article
        </Button>
      </div>
    </div>
  );
}

export default SearchArticle;
