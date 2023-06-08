import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Breast Cancer Information",
  description: "Breast Cancer Information",
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
fbq('init', '2157568414444980');
fbq('track', 'PageView');
`,
        }}
      />
      <div className="site-wrap">
        <div className="quizContainer">
          <Image
            src="/breast-cancer.jpg"
            width="300"
            height="300"
            alt="breast cancer"
            style={{ borderRadius: "10px" }}
            priority
          />

          <h3>
            Hello, what do you need help with? <br />
            Click answer below👇👇
          </h3>
          <Link
            href="https://travel.thewordmixer.com/2023/06/jobs-in-canada-that-help-fight-breast.html"
            style={{ fontSize: "0.9rem" }}
          >
            👩🏽‍⚕️ GET STARTED 👩🏽‍⚕️
          </Link>
          <Link
            href="https://travel.thewordmixer.com/2023/06/jobs-in-canada-that-help-fight-breast.html"
            style={{ fontSize: "0.9rem" }}
          >
            🤱🏽BREAST CANCER INFO🤱🏽
          </Link>
          <Link
            href="https://travel.thewordmixer.com/2023/06/jobs-in-canada-that-help-fight-breast.html"
            style={{ fontSize: "0.9rem" }}
          >
            🏥 FIGHT BREAST CANCER 🏥
          </Link>
        </div>
      </div>
    </>
  );
}
