import * as React from 'react';
import styles from './ExemploReactspfx.module.scss';
import Form from './Form';

export default function ExemploApp():JSX.Element {
  return (
    <div className={styles.exemploReactspfx}>
      <h1 style={{textAlign: 'center'}}>{`Formulário`}</h1>
      <Form/>
    </div>
  );
}

/*export default class ExemploReactspfx extends React.Component<IExemploReactspfxProps, {}> {
  public render(): React.ReactElement<IExemploReactspfxProps> {
    return (
      <div className={ styles.exemploReactspfx }>
        <h1>{'Hello World'}</h1>
      </div>
    );
  }
}*/

//const ExemploApp = () => (<div><h1>Hello World</h1></div>);
//export default  ExemploApp;
