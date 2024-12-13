export interface Polarstern {
    sensor: PolarsternSensor[];
}
export interface PolarsternSensor {
    id: number;
    date: string;
    wind: number;
    temperature: number;
    latitude: number;
    longitude: number;
}

export interface ExtendedMarker {
    sail: string;
    marker: L.Marker;
    latestPosition: [number, number];
}
