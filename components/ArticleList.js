import articleStyles from "../styles/Article.module.css";
import Articleitem from "./ArticleItem";
const Articlelist = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <Articleitem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articlelist;
