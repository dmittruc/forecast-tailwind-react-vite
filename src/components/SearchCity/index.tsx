interface IProps {
  city: string;
  onChange: (e) => void;
}

const SearchCity = ({ city, onChange }: IProps) => {
  return (
    <div className="mt-4">
      <input
        className={'bg-slate-400 h-12 rounded-md p-2'}
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchCity;
