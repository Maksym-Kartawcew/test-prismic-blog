import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { ProfileTitle } from "../../components/Components.styled";

const Quote = ({ slice }) => {
  return (
    <Bounded>
      <ProfileTitle>
        <PrismicText field={slice.primary.quote} />
      </ProfileTitle>
    </Bounded>
  );
};

export default Quote;
