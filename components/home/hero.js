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
          끊임없이 변화하는 세상의 중심이 되고 싶은
          <br></br>
          개발자, <b>전병호</b>입니다. <span>[추가작성]</span>
          <br></br>
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
