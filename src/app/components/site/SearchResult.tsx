'use client'
type SearchResultProps = {
  results: {
    person: { name: string };
    personMatched: { name: string };
  };
};

export default function SearchResult({ results }: SearchResultProps) {
  return (
    <div>
      <p className="text-3xl text-center">{results.person.name}</p>
      <p className="text-2xl my-3 text-center">parabéns, você tirou:</p>
      <p className="flex pb-2 justify-center items-center text-4xl bg-blue-800 rounded-lg border-2 border-dashed border-blue-300">
        {results.personMatched.name}
      </p>
    </div>
  );
}
