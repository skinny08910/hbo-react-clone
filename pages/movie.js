import Head from "next/head";
import CastInfo from "../components/CastInfo/CastInfo";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";

export default function HomeView() {
  return AuthCheck(
    <>
      <MainLayout>
        <FeaturedMedia />
        <MediaRow title="More like this" type="small-v" />
        <CastInfo />
      </MainLayout>
    </>
  );
}
