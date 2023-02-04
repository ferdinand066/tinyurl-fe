import PrimaryButton from "@/components/buttons/_primary-button";
import SecondaryButton from "@/components/buttons/_secondary-button";
import { PAGES } from "@/static/pages";
import Link from "next/link";

export default function ButtonRedirect() {
  return <div className='grid grid-cols-2 gap-4 mt-10 sm:mt-12'>
    <Link href={PAGES.TINY_URL.INDEX}>
      <PrimaryButton content="Try tiny url" />
    </Link>
    <SecondaryButton content="Try rename url" />
  </div>
}