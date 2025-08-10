const Button = ({
  text = "Shop Now",
  bg = "bg-transparent",
  hoverBg = "hover:bg-white",
  border = "border-white",
  hoverBorder = "hover:border-black",
  textColor = "text-white",
  hoverTextColor = "hover:text-black",
  textSize = "text-base",
  paddingX = "px-6",
  paddingY = "py-2",
  rounded = "rounded-full",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${paddingX} ${paddingY} ${textSize} ${rounded}
        border transition-colors duration-300
        ${bg} ${border} ${textColor}
        ${hoverBg} ${hoverBorder} ${hoverTextColor}
      `}
    >
      {text}
    </button>
  );
};
export default Button;
