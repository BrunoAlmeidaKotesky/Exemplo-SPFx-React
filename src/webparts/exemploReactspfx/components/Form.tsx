import * as React from 'react';
import { useState, useEffect, useCallback, memo } from 'react';
import { OptionValue, Option } from '../models/interfaces/IComboboxProps';
import {getLanguages, listData, sendData, ILista} from '../services/SharepointService';
import Input from './Input';
import ComboBox from './Select';
import Button from './Button';
import {useForm} from './hooks/useForm';

const Form = (): JSX.Element => {
    const { description,
            getItems, 
            formStyle, 
            listItems, opcoes, 
            sendValues, selectedOpt, 
            title, setOpt, setTitle, 
            setDescription} = useForm();
    
    return (
    <div style={formStyle}>
     <Input 
        value={title}
        label="Título" 
        onChange={(ev) => setTitle(ev.target.value)}/>
     <Input 
        value={description}
        label="Descrição" 
        onChange={(ev) => setDescription(ev.target.value)}/>
     <ComboBox 
         options={opcoes} 
         value={selectedOpt}
         onChange={(val) => {
            setOpt(val);
         }}/>
     <Button text="Enviar dados" onClick={() => sendValues()}/>
     <Button text="Buscar dados" onClick={async () => await getItems()}/>
     {listItems.length > 0 && 
     <ul>
        {listItems.map(item => 
            <li>
             <span>
             {'Título: '}<strong>{item?.Title}</strong>
             {', Linguagem: '}<strong>{item?.Linguagem?.Title}</strong>
             </span>
            </li>)}
    </ul>}
    </div>
    );
};

export default memo(Form);