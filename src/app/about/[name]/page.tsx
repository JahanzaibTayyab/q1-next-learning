export default function GiveSlug({ params }: { params: { name: string } }) {
  return <div>My name is {params.name}.</div>;
}
