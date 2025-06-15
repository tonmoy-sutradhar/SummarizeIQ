export default function SummaryHeader({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-900 bg-clip-text text-transparent">
      {title}
    </h1>
  );
}
