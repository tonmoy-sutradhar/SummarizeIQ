import { getSummaryById } from "@/lib/summaries";
import { notFound } from "next/navigation";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;

  const summary = getSummaryById(id);

  if (!summary) {
    notFound;
  }

  return <div>SummaryPage {id}</div>;
}
