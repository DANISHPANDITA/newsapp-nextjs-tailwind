/** @format */

import Head from "next/head";
import CountryNewsCard from "../../components/CountryNewsCard";
import d from "../../countries";
function Country({ query }) {
  return (
    <div className="p-2 bg-countrypagebg">
      <Head>
        <title>Search Results</title>
      </Head>
      {query.articles.map((i) => (
        <CountryNewsCard
          title={i.title}
          url={i.url}
          urlToImage={i.urlToImage}
          publishedAt={i.publishedAt}
          description={i.description}
          content={i.content}
          author={i.author}
          source={i.source.name}
        />
      ))}
    </div>
  );
}

export default Country;
export async function getServerSideProps(context) {
  const api = "480d313ee67d43ba86b6b1f2629f3fde";
  const country = context.query.name;
  const f = d.find((el) => el.label === country);
  const newsByCountry = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${f.value}&apiKey=${api}`
  ).then((res) => res.json());
  return {
    props: {
      query: newsByCountry,
    },
  };
}
