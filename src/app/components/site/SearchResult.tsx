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
      <p className="text-2xl my-3 text-center">Parabéns, você tirou:</p>
      <p className="text-4xl text-center bg-blue-800 my-5 px-5 py-10 rounded-lg border-2 border-dashed border-blue-300">
        {results.personMatched.name}
      </p>
    </div>
  );
}
