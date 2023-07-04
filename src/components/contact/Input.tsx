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
        <span className="label-text">{props.labelText}</span>
        {props.labelTextAlt !== undefined && (
          <span className="label-text-alt italic">
            {" " + props.labelTextAlt}
          </span>
        )}
      </label>
      {/* // border-gray-200 */}
      <input
        className="input-bordered input w-full rounded-lg p-3 text-sm focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-transparent"
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
