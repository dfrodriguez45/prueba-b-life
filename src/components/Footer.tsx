import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 px-6 py-20 md:flex-row md:gap-0 md:px-16 xl:px-28">
      <div className="flex w-full flex-col justify-between">
        <Image src="/logo.svg" alt="logo" width={160} height={100} />
        <p className="text-balance text-base">
          Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
          vitae leo nunc.
        </p>
      </div>
      <div className="w-full">
        <ul className="flex flex-row flex-wrap items-start justify-between gap-10">
          <li className="space-y-3">
            <h4 className="text-lg font-extrabold">Company</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm">About Us</li>
              <li className="text-sm">Products Digital</li>
              <li className="text-sm">Customer Reviews</li>
            </ul>
          </li>
          <li className="space-y-3">
            <h4 className="text-lg font-semibold">Information</h4>
            <ul className="flex flex-col gap-2">
              <li className="text-sm">Help Center</li>
              <li className="text-sm">Payment Methods</li>
              <li className="text-sm">Return & Refund</li>
            </ul>
          </li>
          <li className="space-y-3">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-row items-center gap-2 text-sm">
                <Image
                  src="/icons/tel.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
                (+1) 123-456-7890
              </li>
              <li className="flex flex-row items-center gap-2 text-sm">
                <Image
                  src="/icons/mail.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
                email@youremail.com
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
