import Image from "next/image";
import CapsuleButton from "@/components/Button/CapsuleButton";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full px-8 md:px-36 items-start">
      <h1 className="expanded-font gradient-text py-12 text-4xl">
        {" "}
        privacy policy
      </h1>

      <h2>information we collect</h2>

      <p>
        {" "}
        our app utilizes the TrueDepth API to track the distance from your face
        to the phone during workout sessions. this is the only data observed
        through the TrueDepth camera system.{" "}
      </p>

      <h2>purpose of data collection</h2>

      <p>
        the sole purpose of collecting this data is for a seamless experience by
        accurately tracking the number of push-ups you perform. this data is not
        stored, shared, or used for any other purpose.
      </p>

      <h2>data sharing and storage</h2>

      <p>
        we do not share any data collected through the TrueDepth API with third
        parties. additionally, no face data is stored on our servers or locally
        on your device. all processing is done in real-time on your device,
        ensuring that no data leaves your phone.
      </p>

      <h2>contact us</h2>

      <p>
        if you have any questions or concerns about our use of your data, please
        contact us at <a href="mailto:push@joogps.com">push@joogps.com</a>.
      </p>

      <CapsuleButton className="capsule-button-secondary-dark my-6" href="./">
        <p className="py-2 px-5 text-nowrap"> go back </p>
      </CapsuleButton>
    </div>
  );
}
