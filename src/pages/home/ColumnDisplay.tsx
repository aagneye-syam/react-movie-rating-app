import {DisplayType} from ".";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

export const ColumnDisplay = (props:Props) => {};
