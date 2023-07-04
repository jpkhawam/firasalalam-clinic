import type { ChangeEventHandler } from "react";

class SelectProps {
  constructor(
    public labelText: string,
    public name: string,
    public required: boolean,
    public options: Array<string>,
    public onChange?: ChangeEventHandler<HTMLSelectElement>,
    public placeholderOptionValue?: any,
    public placeholderOptionText?: string,
    public value?: any,
    public defaultValue?: any
  ) {}
}

export default function Select(props: SelectProps) {
  return (
    <div>
      <label className="label">
        <span className="label-text text-black dark:text-white">
          {props.labelText}
        </span>
      </label>
      <select
        className="select-primary select w-full max-w-6xl border-opacity-20 font-normal focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-opacity-0"
        name={props.name}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        required={props.required}
      >
        <option disabled={true} value={props.placeholderOptionValue}>
          {props.placeholderOptionText}
        </option>
        {props.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
