import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Canada Travel Guide",
  description: "Canada Travel Guide",
};

export default function Page() {
  return (
    <>
      <div className="site-wrap">
        <div className="quizContainer">
          <Image
            src="/21336192_web1_190629-RDA-canada-day2-1920x1280.jpg"
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
          <Link href="https://travel.axfest.com">🇨🇦 GET STARTED 🇨🇦</Link>
          <Link href="https://travel.axfest.com/">🇨🇦 CANADA VISA 🇨🇦 </Link>
          <Link href="https://travel.axfest.com/">🇨🇦 STUDY IN CANADA 🇨🇦</Link>
          <Link href="https://travel.axfest.com/">🇨🇦 JOBS IN CANADA 🇨🇦</Link>
        </div>
      </div>
    </>
  );
}
