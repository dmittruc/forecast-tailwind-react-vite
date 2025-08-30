interface IProps {
  onClick: () => void;
  loading?: boolean;
  className?: string;
  children: any;
}

const CustomButton = ({ children, onClick, loading, className }: IProps) => {
  return (
    <button onClick={onClick} disabled={loading} className={`${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
