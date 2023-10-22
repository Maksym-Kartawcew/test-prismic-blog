import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";

const Text = ({ slice }) => {
  return (
    <Bounded>
      {prismic.isFilled.richText(slice.primary.text) && (
        <div>
          <PrismicText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
