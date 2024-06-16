import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./ColumnDisplay";

import { fetchMovies, fetchTvShows } from "./query";
import { useQueries, useQuery } from "@tanstack/react-query";

enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading :isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: tvShowData, isLoading : isLoadingTvShows} = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  return (
    <div style={{ marginTop: 50, height: "auto" }}>
      {" "}
      <Button.Group>
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TV Shows
        </Button>
      </Button.Group>
      <div style={{ marginTop: 20 }}>
        {displayType === DisplayType.Movies ? (
          <ColumnDisplay data={} displayType={DisplayType.Movies} />
        ) : (
          <ColumnDisplay data={} displayType={DisplayType.TvShows} />
        )}
      </div>
    </div>
  );
};
