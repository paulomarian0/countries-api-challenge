import { ICountryList, countryList } from "@/constants/data"
import { create } from "zustand"

interface IListCountriesStorage {
    countries: ICountryList[]
    setCountries: (countries: ICountryList[]) => void
}

const useListCountriesStorage = create<IListCountriesStorage>((set) => ({
    countries: countryList,
    setCountries: (countries) => set({ countries }),
}))

export { useListCountriesStorage }