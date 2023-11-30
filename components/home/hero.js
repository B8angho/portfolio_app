import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          <br className="hidden lg:inline-block" />
          Byeongho Jeon
        </h1>
        <h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <br></br>
            incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis
            <br></br>
            hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit
            <br></br>
          </p>
        </h2>
        <br></br>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
