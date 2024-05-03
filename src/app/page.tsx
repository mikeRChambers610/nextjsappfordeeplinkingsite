import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';


export default function Home() {
  const imageData = [
    { id: '1', src: '/assets/image1.png', title: 'Chat Screen' },
    { id: '2', src: '/assets/image2.png', title: 'Home Screen' },
    { id: '4', src: '/assets/image4.png', title: 'Events Screen' },
    { id: '5', src: '/assets/image5.png', title: 'Events Screen' },
    { id: '6', src: '/assets/image6.png', title: 'Events Screen' },
    { id: '7', src: '/assets/image7.png', title: 'Events Screen' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Event with Friends!</title>
        <meta name="description" content="Discover and share events with your friends." />
      </Head>
      <h1>Welcome to Event with Friends!</h1>
      <p>Discover and share events with your friends.</p>
      <Link href="https://linke.to/eventwithfriends" className={styles.button}>
        Download the App Free
      </Link>
      <div className={styles.imageContainer}>
        {imageData.map((item) => (
          <div key={item.id} className={styles.image}>
            <Image
              src={item.src}
              alt={item.title}
              width={300} // Adjust based on your design
              height={600} // Adjust based on your design
            />
          </div>
        ))}
      </div>
    </div>
  );
}
