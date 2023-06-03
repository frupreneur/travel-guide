import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Breast Cancer Information",
  description: "Breast Cancer Information",
};

export default function Home() {
  return (
    <>
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
