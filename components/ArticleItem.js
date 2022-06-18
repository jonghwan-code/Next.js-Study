import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const Articleitem = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default Articleitem;
