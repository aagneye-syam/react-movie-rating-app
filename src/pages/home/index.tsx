import { useState } from "react";
import { Button } from "semantic-ui-react";
import { ColumnDisplay } from "./ColumnDisplay";

enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

export const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>();
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
          <ColumnDisplay />
        ) : (
          <ColumnDisplay />
        )}
      </div>
    </div>
  );
};
