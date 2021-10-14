/** @format */

import Head from "next/head";
import SearchArticle from "../../components/SearchArticle";
function SearchNews({ data }) {
  if (data.status === "ok") {
    return (
      <div className="p-2 bg-countrypagebg">
        <Head>
          <title>Search Results</title>
        </Head>
        {data.articles.map((art) => (
          <SearchArticle
            author={art.author}
            content={art.content}
            source={art.source.name}
            publishedAt={art.publishedAt}
            url={art.url}
            urlToImage={art.urlToImage}
            description={art.description}
            title={art.title}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-gray-700 text-center"> Not found...</p>
      </div>
    );
  }
}

export default SearchNews;
export async function getServerSideProps(context) {
  const query = context.query.q;
  const newskey = process.env.newsapikey;
  const result = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${newskey}`
  ).then((res) => res.json());
  return {
    props: {
      data: result,
    },
  };
}
