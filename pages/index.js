import { Router } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import { useRouter } from "next/router";
import AuthCheck from "../components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholder from "../components/UI/Placeholders/PlaceHolders";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);

  return AuthCheck(
    <>
      <MainLayout>
        <FeaturedMedia
          mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?mute=1&controls=0&autoplay=1&loop=1&start=16"
          title="Mortal Kombat"
          location="In Theaters and on HBO MAX. Streaming throughout May 23."
          linkUrl="/movie/460465"
          type="front"
        />
        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Movies" type="large-v" />}
        >
          <MediaRow
            title="Movies"
            type="large-v"
            endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
          />
        </LazyLoad>

        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Series" type="small-h" />}
        >
          <MediaRow
            title="Series"
            type="small-h"
            mediaType="series"
            endpoint="discover/tv?&primary_release_year=2021"
          />
        </LazyLoad>

        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Action" type="small-v" />}
        >
          <MediaRow
            title="Action"
            type="small-v"
            endpoint="discover/movie?with_genres=28&primary_release_year=2021"
          />
        </LazyLoad>

        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Horror" type="small-v" />}
        >
          <MediaRow
            title="Horror"
            type="small-v"
            endpoint="discover/movie?with_genres=27&primary_release_year=2021"
          />
        </LazyLoad>

        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Animations" type="large-h" />}
        >
          <MediaRow
            title="Animations"
            type="large-h"
            endpoint="discover/movie?with_genres=16&primary_release_year=2021"
          />
        </LazyLoad>

        <LazyLoad
          offset={-400}
          placeholder={<Placeholder title="Sci-Fi" type="small-v" />}
        >
          <MediaRow
            title="Sci-Fi"
            type="small-v"
            endpoint="discover/movie?with_genres=878&primary_release_year=2021"
          />
        </LazyLoad>
      </MainLayout>
    </>
  );
}
