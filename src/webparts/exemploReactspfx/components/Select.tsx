import * as React from 'react';
import {useCallback} from 'react';
import styles from './ExemploReactspfx.module.scss';
import {IComboboxProps, OptionValue} from '../models/interfaces/IComboboxProps';

type RSelect = React.FormEvent<HTMLSelectElement>;

const Combobox = <T extends OptionValue>({key, onChange, options, value}: IComboboxProps<T>) => {

    //Lida com o evento de mudança das opções do select
    function handleOnChange(e: RSelect) {
      const { selectedIndex } = e.currentTarget;
      const selectedOption = options[selectedIndex];
      onChange(selectedOption.value);
    }

    /* Recria a função apenas quando o valor mudar
     const handleOnChange = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
      const { selectedIndex } = e.currentTarget;
      const selectedOption = options[selectedIndex];
      onChange(selectedOption.value);
    }, [value]);*/

    return (
      <select
        className={styles.customInput}
        value={value} 
        onChange={handleOnChange}>
        {options.map(option => (
          <option key={key?.toString() ?? option?.value?.toString()} value={option.value}>
            {option?.label ?? option?.value}
          </option>
        ))}
      </select>
    );
};

export default React.memo(Combobox);