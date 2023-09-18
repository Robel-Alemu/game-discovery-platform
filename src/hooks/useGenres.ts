import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GenereObject {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GameGenres {
  count: number;
  results: GenereObject[];
}
const useFetchGenere = () => {
  const [genres, setGenres] = useState(<GenereObject[]>[]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameGenres>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
        return controller.abort();
      });
  }, []);

  return { genres: genres, error };
};

export default useFetchGenere;
