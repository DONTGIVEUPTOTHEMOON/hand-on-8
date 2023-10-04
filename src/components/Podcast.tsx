import { PODCASTDTO } from "../types/dto";
import classes from "./Blog.module.css";

interface IPODCASTProps {
  podcast: PODCASTDTO;
}

const Podcast = ({ podcast }: IPODCASTProps) => {
  return (
    <div className={classes.containerPodcast}>
      <div className={classes.metaData}>
        <p className={classes.author}>{podcast.author}</p>
        <p className={classes.dateAndTime}>
          {podcast.date} • {podcast.readingTime}
        </p>
      </div>
      <h2 className={classes.blogHeader}>{podcast.headers}</h2>
      <p className={classes.description}>{podcast.description}</p>
    </div>
  );
};
export default Podcast;
