

  export interface Query {
      original: string;
      isId: boolean;
      isNameOrKeyword: boolean;
  }

  export interface Result {
      id: number;
      icao: string;
      type: string;
      name: string;
      lat: number;
      lon: number;
      elev: number;
      continent: string;
      country: string;
      region: string;
      municipality: string;
      hasScheduledService: boolean;
      gps: string;
      iata: string;
      localCode?: any;
      homepage: string;
      wikipedia: string;
      keywords: string[];
  }

  export interface Lookup {
  }

  export interface Aeroport {
      query: Query;
      isError: boolean;
      errorMessage?: any;
      count: number;
      results: Result[];
      lookup: Lookup;
  }



