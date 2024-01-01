type SearchResultProps = {
  res: {
    person: { name: string };
    personMatched: { name: string };
  };
};

export default function SearchResult({ res }: SearchResultProps) {
  return (
    <div>
      <p className="text-3xl text-center">{res.person.name}</p>
      <p className="text-2xl my-3 text-center">Parabéns, você tirou:</p>
      <p className="text-4xl text-center bg-blue-800 my-5 px-5 py-10 rounded-lg border-2 border-dashed border-blue-300">
        {res.personMatched.name}
      </p>
    </div>
  );
}
