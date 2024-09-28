import { inter } from '@/app/ui/fonts';
import {GlobeAltIcon} from "@heroicons/react/16/solid"; // adjust the path as necessary

export default function AcmeLogo() {
  return (
      <div className={`${inter.className} flex flex-row items-center leading-none text-white`}>
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
        <p className="text-[44px]">Acme</p>
      </div>
  );
}
