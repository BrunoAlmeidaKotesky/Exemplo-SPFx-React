import * as React from 'react';
import {useEffect, useState, useCallback, memo} from 'react';

function Contador({counter, updateCounter}: {counter?: number, updateCounter?: () => void}) {
    const [contador, setContador] = React.useState(1);
    console.log('Fui renredizado!');

    const increaseCounter = useCallback(() => setContador(contador + 1), [contador])

    return(<>
    <h2>Contador 1: {contador}</h2>
    <button onClick={increaseCounter/*updateCounter*/}>Incrementar 1</button>
    </>)
}

export default memo(Contador);