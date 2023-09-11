import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Canada Travel Guide",
  description: "Canada Travel Guide",
};

export default function Home() {
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
fbq('init', '987290555855605');
fbq('track', 'PageView');`,
        }}
      />

      <div className="site-wrap">
        <div className="quizContainer">
          <Image
            src="/2-2.png"
            width="300"
            height="300"
            alt="canada travel"
            style={{ borderRadius: "10px" }}
            priority
          />

          <h3>
            Hello, what do you need help with? <br />
            Click answer below👇👇
          </h3>
          <Link href="https://travel.thewordmixer.com/2023/05/high-paying-jobs-in-canada-for.html">
            🇨🇦 GET STARTED 🇨🇦
          </Link>
          <Link href="https://travel.thewordmixer.com/2023/05/high-paying-jobs-in-canada-for.html">
            🇨🇦 CANADA VISA 🇨🇦{" "}
          </Link>
          <Link href="https://travel.thewordmixer.com/2023/05/high-paying-jobs-in-canada-for.html">
            🇨🇦 STUDY IN CANADA 🇨🇦
          </Link>
          <Link href="https://travel.thewordmixer.com/2023/05/high-paying-jobs-in-canada-for.html">
            🇨🇦 JOBS IN CANADA 🇨🇦
          </Link>
        </div>
      </div>
    </>
  );
}
