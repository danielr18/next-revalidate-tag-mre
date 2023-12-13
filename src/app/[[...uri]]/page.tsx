import Link from "next/link";
import { RevalidateButton } from "./RevalidateButton";

export default async function Page({ params }: { params: { uri: string[] } }) {
  if (params.uri) {
    // Only fetch to populate more cache entries
    await fetch(`https://jsonplaceholder.typicode.com/todos/${params.uri[0]}`, {
      next: { tags: [`page?uri=${params.uri[0]}`] },
    });
  }

  return (
    <div className="px-8 mt-8">
      <div className="mb-4">Path: /{(params.uri || []).join("/")}</div>
      <RevalidateButton />

      <div>Links</div>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i}>
          <Link href={`/a${i + 1}`} prefetch={false} className="text-blue-500">
            Page {i + 1}
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { uri: [] },
    ...Array.from({ length: 100 }, (_, i) => ({
      uri: [`a${i + 1}`],
    })),
  ];
}
