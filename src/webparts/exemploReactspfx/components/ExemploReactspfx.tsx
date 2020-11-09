import * as React from 'react';
import styles from './ExemploReactspfx.module.scss';
import Form from './Form';
import Contador from './Contador';

export default function ExemploApp():JSX.Element {
  const [contador2, setContador] = React.useState(1);

  return (
    <div className={styles.exemploReactspfx}>
      <h1 style={{textAlign: 'center'}}>{`Formulário`}</h1>
      <Form/>
      <Contador /*counter={contador} updateCounter={()=>setContador(contador + 1)}*//>
      <h2>Contador 2: {contador2}</h2>
      <button onClick={() => setContador(contador2 + 2)}>Incrementar 2: {contador2}</button>
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
