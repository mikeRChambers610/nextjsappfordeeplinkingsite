// app/components/NavBar.tsx
'use client'; // This directive marks the component as a Client Component

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <nav className={styles.navBar}>
      <Image src="/assets/officialappicon.png" alt="App Icon" width={65} height={65} />
      <Link href="/" passHref>
        <div className={isActive('/') ? styles.activeLinkStyle : styles.linkStyle}>Home</div>
      </Link>
      <Link href="/details" passHref>
        <div className={isActive('/details') ? styles.activeLinkStyle : styles.linkStyle}>Contact</div>
      </Link>
    </nav>
  );
}

export default NavBar;
