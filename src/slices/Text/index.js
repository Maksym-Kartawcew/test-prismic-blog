import { PrismicText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { ProfileDescription } from "../../components/Components.styled";

const Text = ({ slice }) => {
  return (
    <Bounded>
      <ProfileDescription>
        <PrismicText field={slice.primary.text} />
      </ProfileDescription>
    </Bounded>
  );
};

export default Text;
