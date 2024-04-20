interface ArrowDownIconProps {
  color?: string;
  isOpen?: boolean;
}

export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  color = "black",
  isOpen = false,
}) => (
  <div>
    <svg
      className={isOpen ? "transform rotate-180" : ""}
      height='12'
      viewBox='0 0 32 32'
      width='12'
      fill={color}
    >
      <path d='M4 8 H28 L16 26 z' />
    </svg>
  </div>
);
