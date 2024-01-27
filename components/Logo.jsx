
import Link from 'next/link';
import Image from 'next/image';


function Logo() {
  return (
    <Link href="/">
      
        <Image
          src="/logo.svg"
          alt="Logo"
          width={54}
          height={54}
          priority
          alt="Logo"
          />
        </Link>

  );
}

export default Logo;
