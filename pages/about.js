import Link from 'next/link';

export default function About() {
  return (
    <div className="">
      <h1>about</h1>
      <Link href="/" className="text-blue-500">
        home
      </Link>
    </div>
  );
}
