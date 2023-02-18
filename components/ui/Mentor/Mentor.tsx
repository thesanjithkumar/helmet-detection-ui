import Image from "next/image";
import s from "./Mentor.module.css";
import { FC } from "react";

const Mentor: FC = () => {
  return (
    <>
      <div className={`my-5 m-auto w-[95%]`}>
        <h1 className="mb-10 text-5xl text-black font-semibold md:ml-[-0.7rem]">
          Our Mentor
        </h1>
        <div className={`${s.aboutDiv}`}>
          <div className={`${s.image} text-black sm:mt-auto`}>
            <Image
              fill
              className={`${s.groupImg} !relative`}
              src="/images/group image/sample group image.jpg"
              alt=""
            />
          </div>
          <div className={`${s.description} text-right`}>
            {/* // TODO: Add Some more content to the About description */}
            <p className={`text-black my-4 w-[100%] text-lg`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              maxime quidem. Voluptatum quia, eos quos soluta necessitatibus
            </p>
            <p className={`text-black mb-4 text-lg`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              libero et aperiam obcaecati eveniet necessitatibus, nostrum totam,
              temporibus eaque, perspiciatis commodi magnam fuga quibusdam
            </p>
            <p className={`text-black mb-4 text-lg`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              labore iste, repellat sint consectetur saepe, ipsam similique quo
              ullam perferendis exercitationem, omnis dignissimos blanditiis
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentor;
