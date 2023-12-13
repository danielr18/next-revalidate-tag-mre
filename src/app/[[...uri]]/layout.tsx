import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC', { next: { tags: ['date'] } }).then((res) => res.json());
  return (
    <>
      <header className="bg-gray-200 px-8 py-2 flex justify-between">
        <div className="flex gap-4">
          <Link href="/" prefetch={false} className="text-blue-500">
            Home
          </Link>
          <Link href="/one" prefetch={false} className="text-blue-500">
            One
          </Link>
          <Link href="/two" prefetch={false} className="text-blue-500">
            Two
          </Link>
          <Link href="/three" prefetch={false} className="text-blue-500">
            Three
          </Link>
        </div>
        <span className="text-sm font-bold">Last updated: {data.datetime.slice(0, 19)}</span>
      </header>
      {children}
    </>
  );
}
