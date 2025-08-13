import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Rick and Morty Characters</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {data.characters.results.map((char: any) => (
          <div key={char.id}>
            <img src={char.image} alt={char.name} style={{ width: "100%" }} />
            <p>{char.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

