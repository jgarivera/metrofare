type Station = {
  name: string;
};

/**
 * List of MRT-3 stations
 */
export const stations: Station[] = [
  {
    name: 'North Avenue',
  },
  {
    name: 'Quezon Avenue',
  },
  {
    name: 'GMA Kamuning',
  },
  {
    name: 'Araneta Cubao',
  },
  {
    name: 'Santolan Annapolis',
  },
  {
    name: 'Ortigas',
  },
  {
    name: 'Shaw Boulevard',
  },
  {
    name: 'Boni',
  },
  {
    name: 'Guadalupe',
  },
  {
    name: 'Buendia',
  },
  {
    name: 'Ayala',
  },
  {
    name: 'Magallanes',
  },
  {
    name: 'Taft Avenue',
  },
];

/**
 * Calculates the fare from travelling from one station to another.
 *
 * @param origin - origin station
 * @param destination - destination station
 * @returns fare in Philippine peso
 */
export function calculateFare(origin: string, destination: string): number {
  const originIndex = stations.findIndex((station) => station.name == origin);
  const destinationIndex = stations.findIndex(
    (station) => station.name == destination,
  );

  if (originIndex < 0 || destinationIndex < 0) {
    return -1;
  }

  const distance = Math.abs(originIndex - destinationIndex);

  if (distance == 0) {
    return 0;
  }

  if (distance < 3) {
    return 13.0;
  } else if (distance < 5) {
    return 16.0;
  } else if (distance < 8) {
    return 20.0;
  } else if (distance < 11) {
    return 24.0;
  } else {
    return 28.0;
  }
}
