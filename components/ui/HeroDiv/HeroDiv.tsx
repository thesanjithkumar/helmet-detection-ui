import { FC } from "react";
import s from "./HeroDiv.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroDiv: FC = () => {
  return (
    <>
      {/* <Parallax pages={1}> */}
      <div className={`${s.blur_bg}`}>
        <Image
          fill
          className={`${s.blur_img} !relative`}
          src="/images/hero_div/testhero_div_img.jpg"
          alt=""
        />
        <h1 className={`${s.heading} ${s.glitch}`}>
          Hi,
          {/* <br /> */}
          &#32;We are
          <br />
          KMPS
        </h1>
        <Link passHref href="/contact">
          <button className={`${s.contactbtn} `}>Contact Us</button>
        </Link>
      </div>
      {/* </Parallax> */}
    </>
  );
};

export default HeroDiv;
