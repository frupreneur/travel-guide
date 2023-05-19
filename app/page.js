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
          <Link href="https://travel.englishcompositions.com/2023/05/easy-ways-to-migrate-and-find-job-in.html">
            🇨🇦 CANADA GUIDE 🇨🇦
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/05/canada-visa-application-100-working.html">
            🇨🇦 CANADA VISA 🇨🇦{" "}
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/05/study-in-canada-scholarships-financial.html">
            🇨🇦 STUDY IN CANADA 🇨🇦
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/05/high-paying-jobs-in-canada-for.html">
            🇨🇦 JOBS IN CANADA 🇨🇦
          </Link>
        </div>
      </div>
    </>
  );
}
