import Link from 'next/link';
import { ReactNode } from 'react';

interface RoundedLinkProps {
  href: string;
  children: ReactNode;
}

const RoundedLink: React.FC<RoundedLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="rounded-full border border-neutral-100 border-opacity-10 bg-neutral-100 bg-opacity-5 hover:bg-opacity-10 py-1 px-4 font-medium transition duration-300 ease-out">
      <p>
        {children}
        </p>
    </Link>
  );
};

export default RoundedLink;
