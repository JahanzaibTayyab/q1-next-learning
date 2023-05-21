export default function Blog({ params }: { params: { detail: string } }) {
  return <div>My Blog Detail is {params.detail}.</div>;
}
