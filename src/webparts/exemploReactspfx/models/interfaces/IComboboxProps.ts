
export type OptionValue = string | number;

export type Option<T extends OptionValue> = {
    value: T;
    label: string;
};

export interface IComboboxProps<T extends OptionValue> {
    options: Option<T>[];
    value: T;
    onChange: (value: T) => void;
    key?: keyof  T;
};
