
import Link from 'next/link';
import Image from 'next/image';


function Logo() {
  return (
    <Link href="/">
          <Image
              className="rounded-xl"
              src="/logo3.svg"
              alt="Logo"
              width={90}
              height={0}
              priority
          />

        </Link>

  );
}

export default Logo;
