interface IProps {
  name: string;
  onClick: () => void;
  loading?: boolean;
}

const CustomButton = ({ name, onClick, loading }: IProps) => {
  return (
    <div>
      <button onClick={onClick} disabled={loading}>
        {name}
      </button>
    </div>
  );
};

export default CustomButton;
