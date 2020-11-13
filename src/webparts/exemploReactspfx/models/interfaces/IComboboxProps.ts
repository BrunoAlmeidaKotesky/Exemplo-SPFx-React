
export type OptionValue = string | number;

export type Option = {
    value: OptionValue;
    label: string;
};

export interface IComboboxProps {
    options: Option[];
    value: OptionValue;
    onChange: (value: OptionValue) => void;
    key?: keyof  OptionValue;
};
