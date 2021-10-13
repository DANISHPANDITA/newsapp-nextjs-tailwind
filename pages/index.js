/** @format */
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { getSession } from "next-auth/react";
import Head from "next/head";
import CountryHeadlines from "../components/CountryHeadlines";
import CountrySearch from "../components/CountrySearch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { connectToDatabase } from "../components/mongo/mongodb";
import NewsCard from "../components/NewsCard";
import WeatherCard from "../components/WeatherCard";
export default function Home({
  cities,
  headlinesAll,
  businessNews,
  aroundtheworldnews,
  scienceNews,
  sportsNews,
  techNews,
  entertainment,
  health,
}) {
  const addNewCity = async () => {
    const cityName = prompt("Enter a city Name");
    await fetch(`http://localhost:3000/api/addcity?cityName=${cityName}`).then(
      () => {
        const y = confirm("Please reload the page");
        if (y) {
          window.location.reload();
        }
      }
    );
  };
  const img =
    "https://media.istockphoto.com/photos/flowers-on-the-shore-of-lake-geneva-picture-id1280003274?s=612x612";
  return (
    <div className="flex flex-col bg-pagebg">
      <Head>
        <title>NEWZ Now</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header img={img} />
      <p className="text-center text-red-900 animate-bounce mt-6 text-2xl font-extrabold font-serif">
        Headlines across the country
      </p>
      <CountryHeadlines
        headlinesAll={headlinesAll}
        sports={sportsNews}
        business={businessNews}
        science={scienceNews}
        techNews={techNews}
        entertainment={entertainment}
        health={health}
      />
      <h2 className="text-center text-red-900 animate-bounce mt-6 text-2xl font-extrabold font-serif">
        Local Temperature Today
      </h2>
      <div className=" flex flex-row items-center justify-center space-x-4 rounded-2xl shadow-xl p-8 mt-6  mx-auto bg-weatherbg w-10/12 md:flex-col sm:flex-col xs:flex-col md:space-y-2 xs:space-y-2 sm:space-y-2 ">
        {cities.length > 0 ? (
          <div className="flex flex-col items-center space-y-4">
            <Button
              color="blueGray"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="dark"
              onClick={addNewCity}>
              <Icon name="change_circle" size="regalar" /> Change City
            </Button>
            <WeatherCard locname={cities} />
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-white font-semibold font-serif ">
              No city yet in the database...
            </p>
            <Button
              color="blueGray"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="dark"
              onClick={addNewCity}>
              <Icon name="add" size="regular" /> Add New City{" "}
            </Button>
          </div>
        )}
      </div>
      <p className="text-center text-red-900 animate-bounce mt-6 text-2xl font-extrabold font-serif">
        Headlines Across the world
      </p>
      <div className="flex flex-wrap h-auto">
        {aroundtheworldnews?.articles?.map((article) => (
          <NewsCard
            key={article?.title}
            author={article?.author}
            title={article?.title}
            img={article?.urlToImage}
            url={article?.url}
            description={article?.description}
            date={article?.publishedAt}
          />
        ))}
      </div>
      <div>
        <p className="text-center text-red-900 animate-bounce mt-6 text-2xl font-extrabold font-serif">
          Search News by country
        </p>
        <CountrySearch />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const key = process.env.newsapikey;
  const headlinesAll = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
  ).then((res) => res.json());
  const businessNews = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`
  ).then((res) => res.json());
  const scienceNews = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`
  ).then((res) => res.json());
  const sportsNews = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`
  ).then((res) => res.json());
  const techNews = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`
  ).then((res) => res.json());
  const entertainment = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`
  ).then((res) => res.json());
  const health = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`
  ).then((res) => res.json());
  const aroundtheworldnews = await fetch(
    `https://newsapi.org/v2/everything?domains=theguardian.com&apiKey=${key}`
  ).then((res) => res.json());
  const { db } = await connectToDatabase();
  const data = await db.collection("cities").find({}).toArray();
  const cities = JSON.parse(JSON.stringify(data));

  return {
    props: {
      headlinesAll: headlinesAll,
      businessNews: businessNews,
      scienceNews: scienceNews,
      sportsNews: sportsNews,
      techNews: techNews,
      entertainment: entertainment,
      health: health,
      aroundtheworldnews: aroundtheworldnews,
      cities: cities[0].cityname,
      session: session,
    },
  };
}
