import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Guia de viagem do Canadá",
  description: "Guia de viagem do Canadá",
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

          <h2>
            Olá, com o que você precisa de ajuda? <br />
            Clique na resposta abaixo👇👇
          </h2>
          <Link href="https://travel.englishcompositions.com/2023/05/easy-ways-to-migrate-and-find-job-in.html">
            🇨🇦 GUIA DO CANADÁ
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/05/canada-visa-application-100-working.html">
            🇨🇦 VISTO PARA O CANADÁ
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/05/study-in-canada-scholarships-financial.html">
            🇨🇦 ESTUDAR NO CANADÁ
          </Link>
          <Link href="https://travel.englishcompositions.com/2023/05/high-paying-jobs-in-canada-for.html">
            🇨🇦 EMPREGOS NO CANADÁ
          </Link>
        </div>
      </div>
    </>
  );
}
