const ChevronUp = ({ rotate = "rotate(0)" }: { rotate?: string }) => {
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={rotate}
    >
      <path
        d="M0.75 7.5L7 1.25L13.25 7.5"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronUp;
