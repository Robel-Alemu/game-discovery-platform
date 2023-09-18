import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useFetchGenere = () => useData<Genre>("/genres");

export default useFetchGenere;
