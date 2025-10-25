// services/heroData/heroData.types.ts
export interface HeroTypes {
  id: number;
  happy_patients: number;
  wards: number;
  awards: number;
  ambulances: number;
}

// API response types
export interface ApiResponseArray {
  data?: HeroTypes[];
  results?: HeroTypes[];
}

export type HeroDataResponse = HeroTypes | HeroTypes[] | ApiResponseArray;