import { createSignal } from 'solid-js';

const [toggled, setToggled] = createSignal(false);

const handleClick = () => {
  setToggled(!toggled());
};

export default function Tooltip({ children }) {
  return (
    <>
      <div
        onClick={handleClick}
        className="relative mt-medium max-w-min text-min max-sm:hidden"
      >
        <div
          id="helper"
          className="group whitespace-nowrap opacity-75 hover:cursor-help"
        >
          <p>Using Bracket Pair colorization?</p>
        </div>
      </div>
      <div
        className={`${toggled() ? 'opacity-100' : 'opacity-0'} fixed my-xs rounded bg-code px-medium py-small transition-all duration-150`}
      >
        {children}
      </div>
    </>
  );
}
