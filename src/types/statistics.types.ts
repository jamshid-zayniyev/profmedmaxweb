export interface StatisticsTypes {
  id: number;
  happy_patients: number;
  wards: number;
  awards: number;
  ambulances: number;
}

export interface StatisticsResponse {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results: StatisticsTypes[];
}

export type StatisticsList = StatisticsTypes[];