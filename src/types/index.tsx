export interface Weather {
    TeamperatureId: number;
    CityId: number;
    Temperature: number;
    WeatherType: string;
}

export interface City {
    CityId: number;
    CityName: string;
}
export type Action =
 | { type: 'INITIAL_WEATHERLIST', item :[] }
 | { type: 'FILTER_CITYID', item : number };


// export enum WeekDays {
//     "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday"
// }