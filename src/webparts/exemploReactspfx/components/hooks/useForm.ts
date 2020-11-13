import * as React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {getLanguages, listData, sendData} from '../../services/SharepointService';
import { Option, OptionValue } from '../../models/interfaces/IComboboxProps';

export function useForm() {
    const [selectedOpt, setOpt] = useState<OptionValue>(1);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [listItems, setListItems] = useState<any[]>([]);
    const [message, setMessage] = useState('');

    const [opcoes, setOpcoes] = useState<Option[]>([]);
    const formStyle = {
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            gap: '2px',
            paddingBottom: '12px',
            margin: '14px'
    };

    useEffect(() => {
        const getFiled = async () => {
            const languages = await getLanguages();
            const options:Option[] = languages.map(i => {
                return {label: i.Title, value: i.Id};
            });
            setOpcoes(options);
        };
        getFiled();
    }, []);

    useEffect(() => {
        if(message === 'Dados enviados com sucesso!') {
            setTimeout(() => {
                setMessage('');
            }, 2500);
        }
        else if(message === 'Valores carregados com sucesso!') {
            setTimeout(() => {
                setMessage('');
            }, 2500);
        }
    }, [message]);

    const sendValues = useCallback(async () => {
        if(title && selectedOpt && description) {
           let res = await sendData(title, description, selectedOpt as number);
           if(res) {
               setTitle('');
               setDescription('');
               setMessage('Dados enviados com sucesso!');
           }
        }
    }, [description, title, selectedOpt]);

    const getItems = useCallback(async () => {
        const items = await listData();
        setListItems(items);
        setMessage('Valores carregados com sucesso!');
    }, []);

    return {getItems, sendValues, selectedOpt, title, description, listItems, formStyle, opcoes, setMessage, setTitle, setOpt, setDescription};
}