type diagonalCardProps = {
  img: string;
};

const DiagonalCard = ({ img }: diagonalCardProps) => {
  return (
    <div className="transform-gpu w-[500px] h-fit overflow-hidden flex-shrink-0 hover:cursor-pointer rounded-2xl rotate-0 hover:rotate-3 transition-all duration-300 ease-out">
      <img
        className="object-cover rounded-2xl rotate-0  hover:cursor-pointer hover:-rotate-3 hover:scale-120 transition-all duration-300 ease-out"
        src={img}
        alt=""
      />
    </div>
  );
};

export default DiagonalCard;
