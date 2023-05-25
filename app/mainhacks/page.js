import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Canada Travel Guide",
  description: "Canada Travel Guide",
};

export default function Home() {
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
          <Link href="https://travel.mainhacks.com/2023/03/how-to-legally-relocate-to-uk.html">
            🇬🇧 U.K TRAVEL 🇬🇧
          </Link>
          <Link href="https://travel.mainhacks.com/2023/03/the-ultimate-guide-to-landing-job-in.html">
            🇨🇦 CANADA VISA 🇨🇦{" "}
          </Link>
          <Link href="https://travel.mainhacks.com/2023/03/how-to-apply-for-scholarships-in-usa.html">
            🇨🇦 STUDY IN CANADA 🇨🇦
          </Link>
          <Link href="https://travel.mainhacks.com/2023/03/skilled-worker-jobs-in-canada-how-to.html">
            🇨🇦 JOBS IN CANADA 🇨🇦
          </Link>
        </div>
      </div>
    </>
  );
}
