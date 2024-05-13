import { createSignal } from 'solid-js';

const [toggled, setToggled] = createSignal(false);

const handleClick = () => {
  setToggled(!toggled());
};

export default function Tooltip({ children }) {
  return (
    <>
      <div
        className={`${toggled() ? 'opacity-100' : 'opacity-0'} sticky bottom-12 my-xs max-w-min rounded bg-code px-medium py-small transition-all duration-150 max-md:py-medium`}
      >
        {children}
      </div>
      <div
        onClick={handleClick}
        onTouchStart={handleClick}
        className="relative mt-medium max-w-min text-min"
      >
        <div
          id="helper"
          className="group whitespace-nowrap opacity-75 hover:cursor-help"
        >
          <p>Using Bracket Pair colorization?</p>
        </div>
      </div>
    </>
  );
}
