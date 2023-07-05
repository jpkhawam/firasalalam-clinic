import type { ChangeEventHandler } from "react";

class InputProps {
  constructor(
    public labelText: string,
    public type: string,
    public id: string,
    public name: string,
    public required: boolean,
    public placeholder?: string,
    public value?: string,
    public onChange?: ChangeEventHandler<HTMLInputElement>,
    public labelTextAlt?: string
  ) {}
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label className="label">
        <span className="label-text dark:text-white">{props.labelText}</span>
        {props.labelTextAlt !== undefined && (
          <span className="label-text-alt italic">
            {" " + props.labelTextAlt}
          </span>
        )}
      </label>
      <input
        className="input-bordered input w-full rounded-lg p-3 text-sm invalid:required:focus:empty:input-error focus:border-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-base-100 placeholder:dark:text-gray-300 dark:focus:border-brand"
        type={props.type}
        id={props.id}
        name={props.name}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
