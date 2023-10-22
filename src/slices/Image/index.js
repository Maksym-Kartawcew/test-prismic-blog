import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      <figure className="grid grid-cols-1 gap-4">
        {prismic.isFilled.image(image) && (
          <div className="bg-gray-100">
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </div>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;
