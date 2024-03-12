import { baseImgUrl } from "../constants";

const CastCard = ({ cast }) => {
  return (
    <div className="w-[140px] rounded-md overflow-hidden">
      {cast.profile_path ? (
        <img className="h-[175px]" src={baseImgUrl + cast?.profile_path} />
      ) : (
        <div className="h-[175px] w-[116px] bg-gray-600"></div>
      )}

      <h2 className="text-xl font-semibold">{cast.original_name}</h2>
      <h3>{cast.character}</h3>
    </div>
  );
};

export default CastCard;
