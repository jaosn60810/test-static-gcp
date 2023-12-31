import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const json = await res.json();
      setUser(json);
    };
    fetchUser();
  }, []);

  return (
    <div className="">
      <div className=""> {JSON.stringify(user)}</div>
      <Link href="/about" className="text-blue-500">
        about
      </Link>
    </div>
  );
}
