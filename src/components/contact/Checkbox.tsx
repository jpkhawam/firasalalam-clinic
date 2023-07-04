class CheckboxProps {
  constructor(public name: string) {}
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <label className="label cursor-pointer" key={props.name}>
      <div>
        <svg
          onClick={() => {
            if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
              const checkbox = document.getElementById(
                `checkbox${props.name}`
              ) as HTMLInputElement;
              checkbox.checked = !checkbox.checked;
            }
            const modal = document.getElementById(
              `modal-${props.name}`
            ) as HTMLDialogElement;
            modal.showModal();
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="inline-flex h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="label-text pe-5 ps-3 font-semibold dark:text-white">
          {props.name}
        </span>
      </div>
      <input
        id={`checkbox${props.name}`}
        type="checkbox"
        className=" form-checkbox checkbox h-4 w-4 rounded-none dark:checkbox-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
        name={props.name}
        aria-label={`Toggle ${props.name}`}
      />
    </label>
  );
}
