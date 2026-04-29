⚡ Operadores de RxJS (El "Laboratorio")
Mapping (Flujos internos)
switchMap: Cancela lo anterior si llega algo nuevo (Buscadores).

mergeMap: Todo en paralelo, no importa el orden (Subida de archivos).

concatMap: En cola. No empieza el siguiente hasta que el anterior termine (Orden riguroso).

Combinación
forkJoin: Como Promise.all. Espera a que todos terminen y da el resultado final.

combineLatest: Emite cada vez que cualquier fuente cambia (Filtros dinámicos).

withLatestFrom: Un trigger principal "mira" qué tienen los demás en ese momento.

Aquí tienes tu "Hoja de Ruta" para el curso de Angular. Son notas rápidas y directas para que las tengas a mano mientras explicas.

🎨 RxJS: Conceptos Clave
Observable vs. Subject: \* Observable (Netflix): Unidifusión. Cada uno ve su película desde el inicio. Pasivo (no puedes forzar emisiones desde fuera).

Subject (Radio): Multidifusión. Todos escuchan lo mismo al mismo tiempo. Activo (puedes usar .next() para emitir datos).

BehaviorSubject: El favorito para estados. Siempre emite el último valor a quien se suscriba tarde.

⚡ Operadores de RxJS (El "Laboratorio")
Mapping (Flujos internos)
switchMap: Cancela lo anterior si llega algo nuevo (Buscadores).

mergeMap: Todo en paralelo, no importa el orden (Subida de archivos).

concatMap: En cola. No empieza el siguiente hasta que el anterior termine (Orden riguroso).

Combinación
forkJoin: Como Promise.all. Espera a que todos terminen y da el resultado final.

combineLatest: Emite cada vez que cualquier fuente cambia (Filtros dinámicos).

withLatestFrom: Un trigger principal "mira" qué tienen los demás en ese momento.

🏛️ Redux (Pattern con Servicios)
Estado (State): Objeto único y centralizado. La "Verdad" de la app.

Acciones (Actions): Notificaciones de "qué pasó" (ej: [Carrito] Añadir).

Reducer: Función pura que coge el estado viejo + la acción y "cocina" un estado nuevo.

Selectores: Usan map y distinctUntilChanged para dar al componente solo el trozo de dato que necesita.

🛡️ Inmutabilidad: "Se mira pero no se toca"
¿Por qué?:

Performance: Angular solo compara referencias (A === B). Si mutas, la referencia no cambia y la vista no se actualiza.

Predictibilidad: Evitas que cambiar un dato en la pantalla A rompa "mágicamente" la pantalla B.

Historial: Permite hacer Undo/Redo y depuración fácil.

Cómo: Usando el Spread Operator ({...state, nuevoDato: 1}). Siempre devolvemos un objeto nuevo, nunca editamos el anterior.





Esta es la pregunta del millón en el mundo de Redux y el desarrollo reactivo. La respuesta corta es: si modificas (mutas) el estado, rompes la capacidad de Angular para saber qué ha cambiado.

Aquí tienes los 3 motivos fundamentales explicados de forma sencilla para que tus compañeros lo entiendan a la primera:

1. El problema de la "Referencia" (Memoria)
En JavaScript, los objetos y arrays se manejan por referencia. Imagina que el estado es una casa.

Mutar (Mal): Pintar la pared de la casa. La dirección (referencia) sigue siendo la misma.

Inmutabilidad (Bien): Construir una casa nueva exactamente igual pero con la pared de otro color. Ahora tienes una nueva dirección.

¿Por qué le importa esto a Angular?
Angular usa una estrategia llamada ChangeDetectionStrategy.OnPush. Para saber si debe actualizar la vista, solo hace una comparación ultra rápida:
¿ReferenciaAnterior === ReferenciaNueva?

Si mutas el objeto, la referencia es la misma, Angular dice "aquí no ha pasado nada" y la pantalla no se actualiza, aunque el dato dentro del objeto sea distinto.

2. El operador distinctUntilChanged()
En el servicio que diseñamos antes, usamos este operador en los selectores. Su función es: "No dejes pasar el dato si es igual al anterior".

Si tú haces esto:

TypeScript
state.user.name = 'Carlos'; // Mutación
this.state$.next(state);    // Emites el mismo objeto
El operador distinctUntilChanged() comparará el objeto viejo con el nuevo, verá que son el mismo objeto en memoria y bloqueará la emisión. Tus componentes nunca se enterarán del cambio de nombre.



Para cerrar el círculo de la reactividad, esta es la comparativa definitiva. Si el Observable y el Observer son las dos piezas de un rompecabezas, el Subject es la pieza que encaja en ambos lados.Aquí tienes la explicación para tus alumnos:1. La jerarquía de rolesDiles que piensen en un Subject como un "híbrido" o un "agente doble":Observable: Es solo un emisor (Productor). No puedes obligarle a emitir un valor desde fuera; él decide cuándo lo hace.Observer: Es solo un receptor (Consumidor). Tiene los métodos next, error y complete para reaccionar.Subject: Es ambos a la vez. Es un Observable porque te puedes suscribir a él, y es un Observer porque tiene los métodos .next(), .error() y .complete() disponibles para que tú los llames manualmente.2. Diferencia de flujo (La clave del "Next")Concepto¿Quién llama a .next()?¿Desde dónde?ObservableEl propio Observable.Internamente (al definirlo).ObserverNadie. El Observer implementa el next.Es el destino final.SubjectTú (el desarrollador).Desde cualquier parte del código.El ejemplo del "Micrófono"Un Observable es un CD de música: La música está grabada dentro. Tú solo puedes darle al Play (suscribirte) y escuchar lo que el CD ya tiene decidido emitir.Un Observer es el Altavoz: No genera música, solo proyecta lo que le llega.Un Subject es un Micrófono: Está conectado a los altavoces (es Observable), pero tú puedes hablar por él en cualquier momento (usar .next('Hola')) para que todos escuchen.
