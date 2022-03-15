import BeerMinitature from "../BeerMiniature";
import beersFetch from "../lib/beersFetch";
import responseToJson from "../lib/responseToJson";
import Screen from "../Screen";

export default function HomeScreen() {
  const beers = [
    { id: 1, name: "beer 1", price: 10.5 },
    { id: 2, name: "beer 2", price: 9.25 },
    { id: 3, name: "beer 3", price: 12.4 },
    { id: 4, name: "beer 4", price: 6.5 },
    { id: 5, name: "beer 5", price: 25.5 },
  ];

  return (
    <Screen>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <BeerMinitature beer={beer} />
          </li>
        ))}
      </ul>
    </Screen>
  );
}
