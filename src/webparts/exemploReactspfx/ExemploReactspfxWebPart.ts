import * as React from 'react';
import * as ReactDom from 'react-dom';
import {sp} from '@pnp/sp';
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'ExemploReactspfxWebPartStrings';
import ExemploReactspfx from './components/ExemploReactspfx';
import { IExemploReactspfxProps } from './components/IExemploReactspfxProps';

export interface IExemploReactspfxWebPartProps {
  description: string;
}

export default class ExemploReactspfxWebPart extends BaseClientSideWebPart<IExemploReactspfxWebPartProps> {

  //Implementar esta linha, não vem por padrão
  public async onInit(): Promise<void> {
    await super.onInit();
    sp.setup({
      spfxContext: this.context
    });
  }

  public render(): void {
    const element: React.ReactElement<IExemploReactspfxProps> = React.createElement(
      ExemploReactspfx,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
  //@ts-ignore
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
