import { ImStarFull, ImStarHalf } from "react-icons/im";
import _ from "lodash";

export default function Rating({ rating = 0 }) {
  const starts = _.range(0, Math.floor(Math.min(rating, 5)));

  let mod = rating % Math.floor(rating);
  mod *= 100;

  return (
    <div className="d-flex align-items-center gap-1">
      {starts.map((s) => (
        <ImStarFull key={s} color="#0ead69" />
      ))}

      {mod > 50 && <ImStarHalf color="#0ead69" />}
    </div>
  );
}
