import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="relative mx-auto w-3/4 h-[128px] flex items-center justify-center mt-2 mb-6">
      <Link href="/">
        <Image src="/logocol.png" height={64} width={156} alt="Logo" />
      </Link>
    </div>
  );
}
