import TextWatermark from "@/reusables/textWatermark";
import React from "react";

export default function Watermarks() {
  return (
    <>
      <TextWatermark
        quote="There is no friend as loyal as a book. - Ernest Hemingway"
        tilt="10deg"
        top="7rem"
        left="3rem"
      />
      <TextWatermark
        quote="A reader lives a thousand lives before he dies. The man who never reads lives only one. - George R.R. Martin"
        tilt="-10deg"
        top="7rem"
        right="5rem"
      />
      <TextWatermark
        quote="Reading is dreaming with open eyes- Anissa Trisdianty"
        tilt="5deg"
        top="22rem"
        left="10rem"
      />
      <TextWatermark
        quote="Books are a uniquely portable magic. - Stephen King"
        tilt="-10deg"
        bottom="10rem"
        left="8rem"
      />
      <TextWatermark
        quote="The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss"
        tilt="10deg"
        bottom="13rem"
        right="5rem"
      />
      <TextWatermark
        quote="So many books, so little time. - Frank Zappa"
        tilt="0deg"
        bottom="7rem"
        right="40rem"
      />
    </>
  );
}
