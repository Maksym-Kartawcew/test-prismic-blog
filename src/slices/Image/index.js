import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { ProfileImage } from "../../components/Components.styled";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded>
      <ProfileImage>
        <PrismicNextImage field={image} />
      </ProfileImage>
    </Bounded>
  );
};

export default Image;
