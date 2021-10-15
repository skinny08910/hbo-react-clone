import Head from "next/head";
import { useEffect, useState } from "react";
import CastInfo from "../../components/CastInfo/CastInfo";
import MainLayout from "../../components/layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import { useRouter } from "next/router";
import axios from "axios";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/UI/Placeholders/PlaceHolders";

export default function SingleMediaPage(props) {
  const router = useRouter();

  const [mediaData, setMediaData] = useState(false);

  console.log(props);

  return AuthCheck(
    <>
      <MainLayout>
        <FeaturedMedia
          title={
            props.query.mediaData === "movie"
              ? props.mediaData.title
              : props.mediaData.name
          }
          mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
          location="In Theaters and on HBO MAX. Streaming throughout May 23."
          linkUrl="/movies/id"
          type="single"
          mediaType={props.query.mediaType}
          mediaId={props.query.id}
        />

        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Movies" type="large-v" />}
        >
          <MediaRow
            updateData={props.query.id}
            title="Similar to this"
            type="small-v"
            mediaType={props.query.mediaType}
            endpoint={`${props.query.mediaType === "movie" ? "movie" : "tv"}/${
              props.query.id
            }/similar?`}
          />
        </LazyLoad>

        <CastInfo
          updateData={props.query.id}
          mediaId={props.query.id}
          mediaType={props.query.mediaType}
        />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  let mediaData;

  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?&api_key=60251a68751bc8e49e5c42142c15ea73&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }

  return {
    props: { mediaData: mediaData.data, query: context.query },
  };
}
