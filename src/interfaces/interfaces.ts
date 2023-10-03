//search interfaces
export interface locationDataEntryType {
  id: number,
  name: string
  location: {
    lat: number,
    lon: number
  },
  details?: {
    description: string,
    website?: string
    avgStoreTraffic?: {
      monday: number | null,
      tuesday: number | null,
      wednesday: number | null,
      thursday: number | null,
      friday: number | null,
      saturday: number | null,
      sunday: number | null
    }
  },
  images?: string[]
}

export type locationDataListType = locationDataEntryType[]

export interface searchStateType {
  input: string
  results: locationDataListType
};

//modal interfaces
export interface modalStateType {
  isOpen: boolean,
  data: locationDataEntryType
}

//map interfaces
export interface mapStateType {
  coordinates: {
    lat: number
    lon: number
  }
}

//chart interfaces
export interface chartFormatType {
  labels: string[],
  datasets: number[]   
}

//reducers interfaces
export interface reducersType {
  map: mapStateType,
  modal: modalStateType,
  search: searchStateType
}