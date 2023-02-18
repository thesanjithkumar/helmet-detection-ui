import Head from "next/head";
import { FC } from "react";
import type { GetServerSideProps } from "next";
import { ImageComponent } from "@/components/ui";

interface Image {
  id: number;
  name: string;
  pub_date: string;
  location: string;
  image: string;
}

interface Props {
  imagesData: Image[];
}

const Images: FC<Props> = ({ imagesData }) => {
  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <div className="text-white mt-[-20px]">
        <ImageComponent images={imagesData} />
      </div>
    </>
  );
};

export default Images;

export const getServerSideProps: GetServerSideProps = async () => {
  const img = await fetch("http://127.0.0.1:8000/images/");
  const imagesData = await img.json();
  return { props: { imagesData } };
};
