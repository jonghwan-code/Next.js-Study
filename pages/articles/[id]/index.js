import Link from "next/link";
import { server } from "../../../config";
// import { useRouter } from "next/dist/client/router";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    // 여기 context.params가 getStaticPaths가 리턴하는 params이다.
    `${server}/api/articles/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

//getStaticPaths는 paths를 getStaticProps 로 리턴한다.

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default article;
