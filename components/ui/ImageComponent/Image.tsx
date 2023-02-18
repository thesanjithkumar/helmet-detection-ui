// import { Projects } from "@/types/project/project";
import Image from "next/image";
// import Link from "next/link";
import s from "./Image.module.css";
import { FC } from "react";

interface Image {
  id: number;
  name: string;
  pub_date: string;
  location: string;
  image: string;
}

interface Props {
  images: Image[];
}

const Project: FC<Props> = ({ images }) => {
  return (
    <>
      <div className="my-[60px]">
        <div className={`${s.projectGrid}`}>
          {images.map((image) => (
            <div key={image.id} className={`${s.project} group`}>
              <a href={`/images/${image.id}`}>
                <div className={`overflow-hidden`}>
                  <Image
                    key={image.id}
                    fill
                    src={image.image}
                    className={`${s.projectimg} group-hover:scale-100 !relative`}
                    alt={image.name}
                    loading="lazy"
                  />
                </div>
                <p className="text-black">{image.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
