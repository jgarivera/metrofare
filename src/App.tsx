import { useState } from 'react';
import { calculateFare, stations } from './station';

export default function App() {
  return (
    <div className="h-screen bg-gray-100">
      <h1 className="mb-2 text-center text-3xl font-bold">Metrofare</h1>
      <TransportMode name="MRT-3" />
    </div>
  );
}

function TransportMode({ name }: { name: string }) {
  const firstStation = stations[0].name;
  const lastStation = stations[stations.length - 1].name;

  const [origin, setOrigin] = useState(firstStation);
  const [destination, setDestination] = useState(lastStation);
  const [fare, setFare] = useState(0);

  return (
    <div className="mx-auto max-w-sm rounded bg-white p-2 shadow-lg">
      <h1 className="text-center text-lg font-bold">{name}</h1>

      <div className="float-left block">
        <label htmlFor="origin">Origin</label>
        <select
          value={origin}
          id="origin"
          className="block"
          onChange={(e) => setOrigin(e.target.value)}
        >
          {stations.map((station) => {
            return <option key={station.name}>{station.name}</option>;
          })}
        </select>
      </div>

      <div className="float-right block">
        <label htmlFor="destination">Destination</label>
        <select
          value={destination}
          id="destination"
          className="block"
          onChange={(e) => setDestination(e.target.value)}
        >
          {stations.map((station) => {
            return <option key={station.name}>{station.name}</option>;
          })}
        </select>
      </div>
      
      <button
        className="mt-3 rounded bg-blue-500 p-1 text-white hover:bg-blue-950"
        onClick={() => setFare(calculateFare(origin, destination))}
      >
        Submit
      </button>

      <h2 className='text-lg text-center'>
        The fare is:
        <span className="mt-1 ml-2 font-mono font-bold text-blue-600">PHP {fare.toFixed(2)}</span>
      </h2>
    </div>
  );
}
