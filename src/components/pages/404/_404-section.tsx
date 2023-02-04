import PrimaryButton from "@/components/buttons/_primary-button";
import SecondaryButton from "@/components/buttons/_secondary-button";
import { PAGES } from "@/static/pages";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Section404() {
  const router = useRouter();
  return <>
    <div className='grid px-4 mx-auto my-4 gap-y-8 lg:gap-x-8 max-w-7xl lg:grid-cols-5 sm:px-7'>
      <div className="flex flex-col justify-center lg:col-span-2 gap-y-8 lg:gap-x-8">
        <div className="flex flex-col leading-loose lg:text-left">
          <span className="ml-0.5 text-3xl sm:text-5xl font-light text-right lg:text-left">404</span>
          <span className="text-5xl font-bold sm:text-7xl">Lost in Space</span>
          <span className="w-1/3 h-1 mt-1.5 ml-1 sm:ml-2 bg-gradient-to-r from-teal-500 to-cyan-600"></span>
        </div>

        <div className="flex flex-col ml-1 text-gray-800 sm:ml-2">
          <span>You have reached the edge of the universe. </span>
          <span>The page you requested could not be found. </span>
          <span>Don't worry and return to the previous page.</span>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:gap-8 sm:ml-1">
          <Link href={PAGES.INDEX}>
            <PrimaryButton content="Go Home" type="button" className="uppercase" />
          </Link>
          <div className="p-0.5 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md" onClick={() => router.back()} >
            <SecondaryButton content="Back" type="button" className="w-full h-full uppercase opacity-100 hover:from-teal-600 hover:to-cyan-700 hover:bg-gray-50" />
          </div>
        </div>
      </div>
      <img
        className="order-first lg:col-span-3 lg:-order-first"
        src='/assets/404.svg'
        alt="404 image"
      />
    </div></>
}