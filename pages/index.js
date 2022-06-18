import Head from "next/head";
import Articlelist from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  console.log(process.env.NODE_ENV);
  return (
    <div>
      <Head>
        <title>Peter's Next Practice</title>
        <meta name="keywords" content="web development" />
      </Head>
      <Articlelist articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
