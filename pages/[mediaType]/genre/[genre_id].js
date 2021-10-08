import { Router } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../../components/HBOProvider";
import MainLayout from "../../../components/layouts/MainLayout";
import FeaturedMedia from "../../../components/UI/FeaturedMedia/FeaturedMedia";
import { useRouter } from "next/router";
import AuthCheck from "../../../components/AuthCheck";
import MediaRow from "../../../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholder from "../../../components/UI/Placeholders/PlaceHolders";
import GenreNav from "../../../components/UI/GenreNav/GenreNav";
import axios from "axios";
import { shuffleArray } from "../../../components/utilities";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();

  const showRandomMedia = () => {
    let thumbType;

    return props.genresData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0];

      return (
        <LazyLoad
          offset={-300}
          placeholder={<Placeholder title={item.name} type={thumbType} />}
          key={item.id}
        >
          <MediaRow
            updateData={props.query.genre_id}
            title={item.name}
            type={thumbType}
            endpoint={`discover/${props.query.mediaType}?with_genres=${
              props.query.genre_id
            }&sort_by=popularity.desc&primary_release_year=2021&page=${
              index + 1
            }`}
          />
        </LazyLoad>
      );
    });
  };

  return AuthCheck(
    <>
      <MainLayout>
        <FeaturedMedia
          mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
          title={
            props.query.mediaType === "movie"
              ? props.featuredData.title
              : props.featuredData.name
          }
          linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
          type="single"
        />

        <GenreNav
          mediaType={props.query.mediaType}
          genresData={props.genresData}
        />

        {showRandomMedia()}
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;

  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=60251a68751bc8e49e5c42142c15ea73&language=en-US`
    );

    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&with_genres=${context.query.genre_id}&api_key=60251a68751bc8e49e5c42142c15ea73&language=en-US`
    );
    console.log("Genres Data");
    console.log(genresData.data);
  } catch (error) {
    console.log("error");
    console.log(error);
  }

  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
  };
}
