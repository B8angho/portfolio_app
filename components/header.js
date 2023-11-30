import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 px-10 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/favicon.ico" alt="Favicon" width={24} height={24} className="mr-2" />
              <span className="ml-3 text-xl">Portfolio</span>
            </a>
          </Link>

          <nav className="md:ml-auto flex flex-wrap text-base items-center justify-center">
            <Link href="/">
              <a className="ml-3 text-xl mr-4">Home</a>
            </Link>

            <Link href="/projects">
              <a className="ml-3 text-xl mr-4">Project</a>
            </Link>

            <a href="https://open.kakao.com/o/smjZKunf" className="ml-3 text-xl mr-4">
              Contact
            </a>
          </nav>

          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
