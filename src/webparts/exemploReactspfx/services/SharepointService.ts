import {sp}  from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/profiles";
import "@pnp/sp/site-users/web";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/items";

interface ILanguage {
    Title: string;
    Id: number;
}
export async function getLanguages():Promise<ILanguage[]> {
  const items:ILanguage[] = await sp.web.lists.getByTitle('Linguagens').items.select('Title', 'Id').get();
   return items;
};

export async function sendData(title: string, description: string, language: number) {
    try {
        const res = await sp.web.lists.getByTitle('SPFxWEB').items.add({
            "Title": title,
            "Descricao": description,
            "LinguagemId": language
        });
        if(res)
            return true;
        else return false;
    }
    catch(e) {
        console.error(e);
        return false;
    }
}
export interface ILista {
    Id: number;
    Title: string;
    Descricao: string;
    Linguagem: {
        Title: string;
        Id: number;
    }
}
export async function listData() {
    const items:ILista[] = await sp.web.lists
        .getByTitle('SPFxWEB')
        .items
        .select('Title', 'Descricao', 'Linguagem/Id', 'Linguagem/Title')
        .expand('Linguagem').get();
    return items;
}