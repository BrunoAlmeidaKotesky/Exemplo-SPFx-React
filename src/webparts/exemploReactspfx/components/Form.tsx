import * as React from 'react';
import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { OptionValue, Option } from '../models/interfaces/IComboboxProps';
import {getLanguages, listData, sendData, ILista} from '../services/SharepointService';
import Input from './Input';
import ComboBox from './Select';
import Button from './Button';

const Form = (): JSX.Element => {
    const targets = [
        { value: "es3", label: "ECMAScript 3" },
        { value: "es5", label: "ECMAScript 5" },
        { value: "es2015", label: "ECMAScript 2015" },
        { value: "es2016", label: "ECMAScript 2016" },
        { value: "es2017", label: "ECMAScript 2017" },
        { value: "es2018", label: "ECMAScript 2018" },
        { value: "es2019", label: "ECMAScript 2019" }
      ];
    const [selectedOpt, setOpt] = useState<OptionValue>(1);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [listItems, setListItems] = useState<ILista[]>([]);

    const [opcoes, setOpcoes] = useState<Option<number>[]>([]);
    const formStyle: React.CSSProperties = useMemo(() => {
        return {
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            gap: '2px',
            paddingBottom: '12px',
            margin: '14px'
        }
    }, []);

    useEffect(() => {
        const getFiled = async () => {
            const languages = await getLanguages();
            const options:Option<number>[] = languages.map(i => {
                return {label: i.Title, value: i.Id};
            });
            setOpcoes(options);
        };
        getFiled();
    }, []);

    // useEffect(() => {
    //     if(selectedOpt)
    //         console.log(selectedOpt);
    // }, [selectedOpt]);

    const sendValues = useCallback(async () => {
        if(title && selectedOpt && description) {
           let res = await sendData(title, description, selectedOpt as number);
           if(res) {
               setTitle('');
               setDescription('');
           }
        }
    }, [description, title, selectedOpt]);

    const getItems = useCallback(async () => {
        const items = await listData();
        setListItems(items);
    }, []);

    return (
    <div style={formStyle}>
     <Input label="Título" onChange={(ev) => setTitle(ev.target.value)}/>
     <Input label="Descrição" onChange={(ev) => setDescription(ev.target.value)}/>
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