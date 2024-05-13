import { createSignal } from 'solid-js';

const [toggled, setToggled] = createSignal(false);

const handleClick = () => {
  setToggled(!toggled());
};

export default function Tooltip({ children }) {
  return (
    <>
      <div
        className={`${toggled() ? 'opacity-100' : 'opacity-0'} sticky my-xs max-w-min rounded bg-code px-medium py-small transition-all duration-150 max-md:py-medium`}
      >
        {children}
      </div>
      <div
        onPointerOver={handleClick}
        onPointerDown={handleClick}
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
