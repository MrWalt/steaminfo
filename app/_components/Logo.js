import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="mx-auto flex items-center justify-center py-4 pt-6">
      <Link href="/">
        <Image src="/logocol.png" height={64} width={128} alt="Logo" />
      </Link>
    </div>
  );
}
