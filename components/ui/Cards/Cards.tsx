// import Image from "next/image";
// import Link from "next/link";
import Image from "next/image";
import s from "./Card.module.css";
import { FC } from "react";

interface Technology {
  name: string;
  image: string;
  description: string;
}

interface Props {
  technologies: Technology[];
}

const Card: FC<Props> = ({ technologies }) => {
  return (
    <>
      <div className="my-[50px]">
        <h1 className="my-5 text-5xl text-black ml-5 font-semibold">
          Technologies Used
        </h1>
        <div className={`${s.blogGrid}`}>
          {technologies.map((card, index) => (
            <div key={index} className={`${s.blog} group bg-mineShaft !my-5`}>
              <div className={`overflow-hidden`}>
                <Image
                  fill
                  key={index}
                  src={card.image}
                  className={`${s.blogimg} !relative group-hover:scale-110`}
                  alt={card.name}
                  loading="lazy"
                />
              </div>
              <p className="text-white py-5 border-white border-b-2 w-[80%] m-auto">
                {card.name}
              </p>
              <p className="text-white mt-8 w-[90%] m-auto">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
