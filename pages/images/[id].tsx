import Head from "next/head";
import s from "./images.module.css";
import Image from "next/image";
// import f from "/styles/fonts.module.css";

import { GetServerSideProps } from "next";

interface Img {
  id: number;
  name: string;
  pub_date: string;
  location: string;
  image: string;
}

interface Props {
  image: Img;
}

const image = ({ image }: Props) => {
  return (
    <>
      <Head>
        <title>{image.name}</title>
      </Head>
      <div className={`${s.projectDiv}`}>
        {/* <p className={`${s.id} !text-black`}>{image.name}</p> */}
        <Image
          fill
          src={image.image}
          className={`${s.projectImg} !relative group-hover:scale-110`}
          alt={image.name}
          loading="lazy"
        />
        <p className={`text-black text-[18px] my-3 font-semibold`}>
          Time Stamp: {new Date(image.pub_date).toString()}
        </p>
        <p className={`text-black text-[18px] my-3 font-semibold`}>
          Vehicle Number: {image.id}
        </p>
        <p className={`text-black text-[18px] my-3 font-semibold`}>
          Location: {image.location}
        </p>
      </div>
    </>
  );
};

export default image;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      image: await (await fetch(`http://127.0.0.1:8000/images/${id}/`)).json(),
    },
  };
};
