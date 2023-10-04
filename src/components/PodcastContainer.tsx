import { PODCAST } from "../constant/const";
import Podcast from "./Podcast";
import classes from "./PodcastContainer.module.css";

const PodcastContainer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionHeader}>
        <div className={classes.sectionTitle}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 14.5L14 10L8 5.5V14.5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"></path>
          </svg>
          <p>Podcast & Video</p>
        </div>
        <p className={classes.viewAll}>View All</p>
      </div>
      <div className={classes.blogContainer}>
        {PODCAST.map((podcast) => {
          return <Podcast key={podcast.headers} podcast={podcast} />;
        })}
      </div>
    </section>
  );
};
export default PodcastContainer;