import Card from "./Card";

export default function Results({results})  {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4 mx-auto max-w-6xl">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  )
}
