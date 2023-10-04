import { BLOGS } from "../constant/const";
import Blog from "./Blog";
import classes from "./BlogContainer.module.css";

const BlogContainer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionHeader}>
        <div className={classes.sectionTitle}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="16"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="4"
              y="4"
              width="10"
              height="2"
              fill="currentColor"
              stroke="none"
            />
            <rect
              x="4"
              y="8"
              width="8"
              height="2"
              fill="currentColor"
              stroke="none"
            />
            <rect
              x="4"
              y="12"
              width="5"
              height="2"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <p>Blog</p>
        </div>
        <p className={classes.viewAll}>View All</p>
      </div>
      <div className={classes.blogContainer}>
        {BLOGS.map((blog) => {
          return <Blog key={blog.header} blog={blog} />;
        })}
      </div>
    </section>
  );
};
export default BlogContainer;
