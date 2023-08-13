export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility?: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    '1h': number;
    '3h': number;
  };
  snow?: {
    '1h': number;
    '3h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastData {
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    rain: {
      '3h': number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
}

export interface Forecast {
  dates: string[];
  maxTemps: number[];
  minTemps: number[];
  weatherDescriptions: string[];
}

export class ForecastDataTransformer {
  constructor(private forecastData: any) {}

  groupDailyForecasts(): Forecast {
    const dailyMap = new Map<string, any[]>();

    for (const forecast of this.forecastData.list) {
      const dateKey = forecast.dt_txt.substr(0, 10);

      if (!dailyMap.has(dateKey)) {
        dailyMap.set(dateKey, []);
      }

      dailyMap.get(dateKey).push(forecast);
    }

    const dates: string[] = [];
    const maxTemps: number[] = [];
    const minTemps: number[] = [];
    const weatherDescriptions: string[] = [];

    dailyMap.forEach((dailyForecast, date) => {
      const maxTemp = Math.max(...dailyForecast.map(f => f.main.temp_max));
      const minTemp = Math.min(...dailyForecast.map(f => f.main.temp_min));
      const weatherDescription = dailyForecast[0].weather[0].description;

      dates.push(date);
      maxTemps.push(maxTemp);
      minTemps.push(minTemp);
      weatherDescriptions.push(weatherDescription);
    });

    return {
      dates: dates,
      maxTemps: maxTemps,
      minTemps: minTemps,
      weatherDescriptions: weatherDescriptions
    };
  }
}
