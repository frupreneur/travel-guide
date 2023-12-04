import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Canada Travel Guide",
  description: "Canada Travel Guide",
};

export default function Page() {
  return (
    <>
      <Script
        id="fb1"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '975607233574842');
          fbq('track', 'PageView');`,
        }}
      />

      <div className="site-wrap">
        <div className="quizContainer">
          <Image
            src="/promo_want_to_travel_to_canada_in_2024.png"
            width="300"
            height="300"
            alt="canada travel"
            style={{ borderRadius: "10px" }}
            priority
          />

          {/* <h3>
            Hello, what do you need help with? <br />
            Click answer below👇👇
          </h3> */}
          <Link href="https://travel.englishcompositions.com/2023/07/how-to-legally-relocate-to-usa.html">
            🇨🇦 GET STARTED 🇺🇸
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/07/how-to-legally-relocate-to-usa.html">
            🇨🇦 CANADA VISA 🇨🇦{" "}
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/07/how-to-legally-relocate-to-usa.html">
            🇺🇸 USA VISA 🇺🇸
          </Link>
        </div>
      </div>
    </>
  );
}
