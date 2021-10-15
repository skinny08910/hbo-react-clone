import { useState, useEffect } from "react";
import axios from "axios";

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${
          props.mediaType === "movie" ? "movie" : "tv"
        }/${
          props.mediaId
        }/credits?&api_key=60251a68751bc8e49e5c42142c15ea73&language=en-US`
      )
      .then(function (response) {
        // handle success
        setCredits(response.data);
        setLoadingData(false);
        console.log("Success Response For cast and crew");
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error Response For cast and crew");

        console.log(error);
      });
  }, [props.updateData]);

  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((item, index) => {
        return (
          <ul className="cast-info__crew" key={index}>
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast...</div>;
    }
  };

  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map((item, index) => {
        return (
          <ul className="cast-info__crew" key={index}>
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Crew...</div>;
    }
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast & Crew</div>

      <div className="cast-info__list">{showCast()}</div>

      <div className="cast-info__group-title">Director</div>

      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
};

export default CastInfo;
