import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../utilities";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=60251a68751bc8e49e5c42142c15ea73&language=en-US`
      )
      .then(function (response) {
        // handle success
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
        console.log("Success Response For " + props.title);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error Response For " + props.title);

        console.log(error);
      });
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  const showThumbnails = (type) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail key={movie.id} movieData={movie} type={type} />;
        });
  };

  const thumbSize = (type) => {
    if (props.type === "large-v") {
      return "400";
    }

    if (props.type === "small-v") {
      return "240";
    }

    if (props.type === "large-h") {
      return "700";
    }

    if (props.type === "large-h") {
      return "450";
    }
  };

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {
          showThumbnails(props.type)
          // loopComp(<Thumbnail />, 10)
        }
      </div>
    </div>
  );
};

const Thumbnail = (props) => {
  const thumbSize = (type) => {
    if (type === "large-v") {
      return "400";
    }

    if (type === "small-v") {
      return "185";
    }

    if (type === "large-h") {
      return "500";
    }

    if (type === "small-h") {
      return "342";
    }
  };

  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}/${
          props.movieData.poster_path
        }`}
      />

      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default MediaRow;
