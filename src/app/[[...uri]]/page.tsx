import { RevalidateButton } from "./RevalidateButton";

export default function Page({ params }: { params: { uri: string[] } }) {
  return (
    <div className="px-8 mt-8">
      <div className="mb-4">Path: /{(params.uri || []).join("/")}</div>
      <RevalidateButton />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { params: { uri: [] } },
    { params: { uri: ["one"] } },
    { params: { uri: ["two"] } },
    { params: { uri: ["three"] } },
  ];
}
