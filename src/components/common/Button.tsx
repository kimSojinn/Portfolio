interface Props {
  desc: string;
  style: ButtonStyle;
}

interface ButtonStyle {
  width: string | number;
  height: string | number;
  bgColor?: string;
  color?: string;
  fontsize?: string;
}

export const Button = ({ desc, style }: Props) => {
  const width = style.width;
  const height = style.height;
  const bgColor = style.bgColor;
  const color = style.color;
  const fontsize = style.fontsize;

  return (
    <button
      className={`py-3 bg-white cursor-pointer rounded-6 px-7 ${width} ${height} ${bgColor} ${color} ${fontsize}`}
    >
      {desc}
    </button>
  );
};
