// Datos de los artículos del blog - Versión mejorada
// Este archivo se puede generar automáticamente en el futuro

export const articlesData = [
  {
    slug: 'bitcoin-criptomonedas-explicacion-tecnica',
    title: 'Bitcoin y Criptomonedas',
    date: '2025-09-18',
    excerpt: 'Un repaso sobre qué es Bitcoin y qué propone.',
    category: 'Tecnología',
    tags: ['bitcoin', 'blockchain', 'criptomonedas', 'tecnología', 'finanzas'],
    featured: true,
    content: `
      <div>
        
        <p>Hace algunos años la curiosidad me llevó a investigar Bitcoin más allá del ruido mediático. Como desarrollador, me fascinó la elegancia técnica de la solución. Este artículo es mi intento de explicar Bitcoin desde la perspectiva técnica.</p>
        
        <h2>El punto de partida: el whitepaper que cambió todo</h2>
        
        <p>En octubre de 2008 mientras el mundo financiero se sacudía a causa de la crísis financiera de los bancos estadounidenses, alguien bajo el pseudónimo Satoshi Nakamoto publicó 9 páginas que provocarían una revolución: "Bitcoin: A Peer-to-Peer Electronic Cash System".</p>
        
        <p>La primera vez que leí ese paper, admito que no entendí completamente la magnitud de lo que proponía. Pero había algo que me llamó la atención: finalmente alguien había resuelto el problema del doble gasto sin necesidad de un tercero de confianza.</p>
        
        <blockquote>
          <p>El problema del doble gasto suena simple pero es fundamental: ¿cómo evitas que alguien use el mismo dinero digital dos veces? Los bancos tradicionales lo resuelven manteniendo un registro centralizado. Satoshi lo resolvió con matemáticas e incentivos económicos distribuidos.</p>
        </blockquote>
        
        <h2>Blockchain: la cadena más larga es la que vale</h2>
        
        <p>Cuando empecé a investigar sobre blockchain me sorprendió la simpleza (a nivel abstracto) de la solución que propone Satoshi. Cada bloque (pensemos en un bloque como una página de un libro contable) está conectada con el anterior mediante un hash criptográfico único que representa todo su contenido.
        
        <p>¿Qué es un hash criptográfico? Es un algoritmo matemático que transforma cualquier bloque arbitrario de datos en una cadena alfanumérica de longitud fija. Esta cadena, llamada simplemente 'hash', es única para los datos de entrada específicos y siempre tendrá la misma longitud sin importar el tamaño original de los datos. </p>

        <p>Esto significa que si alguien modifica la información de un bloque, el hash de ese bloque cambiará (recordemos que el hash del bloque se genera a partir de su contenido), y por ende modificará el hash del bloque siguiente, y así sucesivamente. </p>
        
        <p>Y acá está la clave: la cadena de bloques más larga es la que vale. Dado que hay multiples copias de las blockchain distribuidas por todo el mundo, quien quiera adulterar una transacción deberá ser capaz de superar en potencia de cómputo (equipos de minería) a la mayoría de los mineros de la red, lo cual es virtualmente imposible.</p>
        
        <h3>Cómo funciona una transacción (brevemente)</h3>
        
        <ol>
          <li>Firmás la transacción con tu clave privada (esto lo hace tu wallet)</li>
          <li>La transacción se propaga por la red</li>
          <li>Los mineros la verifican y la incluyen en un bloque</li>
          <li>El bloque se añade a la blockchain</li>
          <li>Tu transacción quedará confirmada luego de 6 confirmaciones (generalmente, se consideran confirmadas cuando han pasado 6 bloques luego de tu transacción)</li>
        </ol>
        
        <p>El tiempo que tarda depende de dos cosas: cuánto pagás de comisión y qué tan congestionada está la red. Durante el bull run de 2017, las comisiones llegaron a ser ridículas.</p>
        
        <h2>Los 21 millones: escasez programada</h2>
        
        <p>Una de las cosas que más me gusta de Bitcoin es que su política monetaria está escrita en código. Solo van a existir 21 millones de Bitcoin y se pueden fraccionar con una precisión de 8 decimales (los decimales son llamados 'satoshis').</p>
        
        <p>Cada 4 años aproximadamente ocurre el "halving": la recompensa por minar se reduce a la mitad. Es como si cada 4 años fuera cada vez más difícil encontrar oro.</p>
        
        <blockquote>
          <p>El último Bitcoin se va a minar alrededor del año 2140. Para ese entonces los mineros se tendran que conformar con las comisiones (fee) de las transacciones.</p>
        </blockquote>
        
        <h2>Las limitaciones</h2>
        
        <p>Bitcoin tiene ciertas limitaciones técnicas, exploremos algunas:/p>
        
        <p>La velocidad de una transacción. Bitcoin genera un nuevo bloque aproximadamente cada 10 minutos, lo cual significa que "normalmente" debas esperar de mínimo 1 hora hasta que tu transacción se confirme (6 bloques).</p>
        
        <p>Las comisiones. BTC se ha apreciado tanto en el último tiempo que las comisiones (fee) no suelen ser "baratas", sobre todo en momentos donde la red está muy congestionada lo cual suele coincidir con periodos de alta volatilidad.</p>
        
        <p>La complejidad de uso. Si bien hoy en día podés acceder a tu Exchange de confianza, depositar dinero, y comprar BTC de forma 'simple', el proceso de retirarlo y autogestionar tu wallet no lo es tanto. Requiere que hayas seleccionado tu wallet de confianza y sepas como gestionarla.</p>
        
        <h3>Lightning Network: una solución de segunda capa</h3>
        
        <p>Lightning Network propone transacciones instantáneas y con comisiones mínimas mediante canales de pago fuera de la cadena principal.</p>

        <p>Los canales de pago son contratos inteligentes entre dos participantes que bloquean una cantidad de Bitcoin en la blockchain principal. Una vez establecido el canal, las partes pueden realizar múltiples transacciones entre sí sin necesidad de escribir cada una en la blockchain.</p>
        
        <p>Ahora bien, en la realidad esto sólo es una solución para quienes son mínimamente entusiastas de BTC y conocen el ecosistema (además de requerir fondos previamente). Abrir canales, gestionar liquidez, enrutamiento de pagos... complejo tal vez. De todas formas el ecosistema mejoró muchísimo en los últimos años, pero sigue siendo intimidante para el usuario promedio.</p>
        
        <h2>El potencial real: dinero sin fronteras</h2>
        
        <p>Lo que más me atrae de Bitcoin no es que pueda valer $100.000 o $1.000.000. Es su potencial como medio de transferir valor globalmente, sin fronteras.</p>
        
        <p>Gracias a bitcoin es posible que alguien de (por ejemplo) Japón pueda enviarle dinero a alguien de (por ejemplo) Canadá sin pedirle permiso a nadie, sólo pagando el coste de la transacción. </p>
        
        <h2>Riesgos reales</h2>
        
        <p>La transparencia de la blockchain es un arma de doble filo. Todas las transacciones son públicas. Si alguien vincula tu identidad (o tu IP) con una dirección Bitcoin, puede ver todo tu historial financiero.</p>
        
        <p>La autocustodia requiere conocimiento técnico. La cantidad de Bitcoin perdido para siempre es enorme. Se estima que entre 3 y 4 millones de Bitcoin (20% del total) están estancados en wallets cuyos dueños ya no tienen acceso a sus claves privadas.</p>
        
        <h2>Mi perspectiva</h2>
        
        <p>Bitcoin representa un experimento monetario sin precedentes que ya cambió cómo pensamos sobre el dinero. Es un software que ha sentado las bases de un nuevo sistema financiero, paralelo al tradicional.</p>
        
        <hr>
        
        <blockquote>
          <p><em>Si tenés alguna pregunta o comentario, te invito a utilizar el formulario de contacto.</em></p>
        </blockquote>
      </div>
    `
  },
  {
    slug: 'mi-carrera-desarrollo',
    title: 'Mi camino en el desarrollo de software',
    date: '2025-09-17',
    excerpt: 'Lecciones, errores y reflexiones luego de más de 10 años en IT.',
    category: 'Desarrollo',
    tags: ['carrera', 'desarrollo', 'experiencia', 'reflexión', 'programación'],
    featured: true,
    content: `
      <div>
       
        <p>Empezar a escribir sobre mi carrera me da un poco de vértigo. No porque sea una historia épica, sino porque es muy fácil caer en la auto-congratulación o en el síndrome del impostor. Pero bueno, acá vamos: mi recorrido desde un pibe de 16 años que apenas entendía qué era un algoritmo hasta convertirme en alguien que puede liderar migraciones complejas de sistemas ERP.</p>
        
        <h2>Los primeros pasos: EET N°5</h2>
        
        <p>Mi primer contacto con la programación fue en la escuela técnica N°5 de Mar del Plata, utilizando Turbo Pascal. Recuerdo la primera vez que logré ejecutar mi primer programa, una mezcla de "hola mundo" con calculadora de operaciones básicas. Parecía como hacer magia.</p>
        
        <p>Lo que más me llamó la atención no era el lenguaje en sí (resultaba obvio que Pascal era una herramienta antigua y cuyo propósito es méramente pedagógico), sino cómo podía resolver problemas complejos dividiéndolos en pasos simples, el famoso "divide y vencerás".</p>

        <p>Ver a mis compañeros de clase en su mayoría sufrir con Algoritmos (nombre de la materia) me motivó a ayudarlos. No es que fuera un genio, simplemente me gustaba el proceso de pensar paso a paso.
        
        <p>De una clase de casi 30 estudiantes, solo 4 o 5 aprobamos esta materia. No porque fuera súper difícil sino porque requería un tipo de pensamiento que no estábamos acostumbrados a ejercitar. En el primer año aprendí lecciones importantes: Programar no es sobre memorizar sintaxis, es sobre aprender a pensar. Y el ya mencionado "divide y vencerás".</p>
        
        <h3>La Olimpiada Informática Argentina</h3>
        
        <p>Por destacarme entre mis compañeros me invitaron a participar en la Olimpiada Informática Argentina. No tenía idea de en qué me estaba metiendo, pero sonaba realmente interesante.</p>
        
        <p>Luego de 3 horas de olimpiada (y algunas semanas después) Clasificar 4to en la instancia provincial, lo que me hizo meritorio de la clasificación a la competencia Nacional en la Universidad de La Matanza. Un viaje increíble con compañeros y docentes que hasta el día de hoy recuerdo con todo lujo de detalles.</p>
        
        <p>Finalicé 10mo en la nacional. No estaba mal aunque no logré clasificar al mundial que ese año se disputó en Egipto.</p>
        
        <h2>Mi primer oportunidad: una pasantía</h2>
        
        <p>Pasada la mitad del último año en la técnica, me ofrecen la posibilidad de realizar una pasantía breve (2 semanas) en una empresa pesquera, más precisamente en la oficina de Sistemas. Sin dudarlo acepté, estaba desbordado por la curiosidad de saber cómo es la experiencia real de un programador."</p>
        
        <p>El primer día volví a mi casa con un libro de Visual FoxPro (+400 páginas, una belleza) luego de una gran introducción a su entorno de desarrollo y a algunas de las tareas frecuentes del día a día.</p>

        <p>El libro resultó ser más interesante de lo que esperaba y tan sólo la primera tarde-noche debo haber leído unas 60 páginas. Al día siguiente en la oficina pasada la tarde quien era el jefe de sistemas se veía ligeramente sorprendido por mi interés, dedicación y adaptación.</p>

        <p>Para la última jornada de la pasantía ya había realizado mi primer pequeño desarrollo como programador: un resumen de cuenta de clientes. Constaba de un formulario con filtros que emitía dicho reporte, utilizando las clases visuales de la empresa e integrado al menú del sistema de Ventas Mercado Interno.</p>

        <p>Antes de despedirme de los muchachos de la oficina llegó el momento soñado: me ofrecieron el puesto como desarrollador por media jornada (4 horas) al finalizar la escuela.</p>

        <p>Aquí me lo pensé con tranquilidad hasta que definí el futuro de mis estudios: iba a estudiar Tecnicatura Superior en Programación en la UTN.</p>

        <p>Finalmente acepté la propuesta laboral, todo parecía encajar ya que el trabajo quedaba muy cerca de la universidad.</p>
        
        <p>Al principio cursaba por la mañana y trabajaba por la tarde, pero esta situación duró tan sólo algunos meses. Antes de llegar al primer año el trabajo se volvió a tiempo completo y tuve que pasarme a cursar en el turno noche. Fueron 2 años de mucho esfuerzo: trabajar de 8 a 17, cursar de 18 a 22, llegar a casa 23hs, dormir, comenzar un nuevo día.</p>
        
        <h3>Evolución profesional: de junior a liderar proyectos</h3>
        
        <p>Fueron años de crecimiento gradual pero constante. Comencé haciendo informes, análisis funcional básico, soporte, correcciones en la base de datos. Poco a poco fui ganando autonomía y capacidad de acción (cualquier día te puede tocar apagar un incendio).</p>
        
        <p>2012-2015: En estos primeros años aprendí las reglas del negocio, entendí cómo funciona una empresa en cada una de sus áreas y cómo estas interactuan a través del sistema. El código era importante, pero más importante era entender el impacto real que tenía.</p>
        
        <p>Año 2015, primer punto de inflexión: el líder de TI deja la empresa. Esto provocó una rotación de puestos dentro del equipo que incluyó la contratación de un nuevo programador.</p>

        <p>Luego de estos cambios en el equipo fui encargado de capacitar al nuevo integrante e introducirlo al entorno de desarrollo, los sistemas que se utilizaban y a las tareas del día a día que anteriormente me tocaba desempeñar.</p>
        
        <p>Esta redistribución de responsabilidades implicó un cambio significativo para mí: ya no resolvía cosas del día a día ni era la primera línea de atención a los usuarios. Comencé a liderar proyectos, definir estrategias para su implementación, monitorear servidores y servicios crtíticos, gestionar proveedores TI, entre otras cosas.</p>

        <p>El primer proyecto importante fue un nuevo módulo para registrar y dar trazabilidad a los Permisos de Embarque dentro del sistema de Comercio Exterior.</p>

        <p>Este módulo permitió registrar permisos de embarque de forma atómica, aplicando reglas de negocio propias del Comercio Exterior. También permitió automatizar el registro de ordenes de gasto correspondientes al pago por los derechos de exportación, tasa de aduana, costo de digitalización, entre otros gastos correspondientes a cada exportación.</p>

        <p><b>Reglas claras, atomicidad y automatización: estos fueron los pilares que convirtieron este proyecto en un éxito rotundo.</b></p>

        <h2>Libro de Sueldos Digital</h2>
        
        <p>Uno de los proyectos más destacados que me tocó desarrollar es sin duda el libro de sueldos digital. </p>
        
        <p></p>
        
        <h3>Liderando migraciones</h3>
        
        <p>Luego de cambios en la dirección de la empresa, hubo cambios de sistemas y eso requirió migraciones de datos. Era trabajo complejo que requería coordinar esfuerzos de múltiples equipos, tanto internos como externos.</p>
      
        <h2>En paralelo y por hobby: El Prode</h2>
        
        <p>El Prode comenzó producto de una necesidad y un deseo: cada vez que organizaba un prode del mundial tenía que gestionar todo a mano con Excel y estaba con ganas de incursionar en el desarrollo web.</p>
        
        <p>Debía elegír una tecnología web para el desarrollo y fué PHP, podría decir que por su documentación oficial y su comunidad. Sobre todo la documentación, me recordaba mucho a aquel viejo libro de Visual FoxPro.</p>
        
        <p>Este proyecto me permitió vivir una experiencia completa de desarrollo web: desde conectarme por SSH al servidor Linux, gestionar certificado SSL, usuarios y permisos, directorios, archivos, control de versión (git), testear mis endpoints con Postman, entre otras cosas.</p>
        
        <h2>Las tecnologías</h2>

        <p>Qué feo se siente tener que encasillarse debajo del cartel de una tecnología cuando por dentro sentís el fuego de la curiosidad y el deseo de aprender. En fin, dejo una lista de tecnologías que he utilizado a continuación: </p>
        
        <p>Visual FoxPro, SQL Server, MySQL, PHP, HTML, CSS, Bootstrap, JavaScript, JQuery, React, Node.js, PostgreSQL, MongoDB, C++, C#, Python, Git, n8n</p>
        
        <h2></h2>
        
        
        <h2>Lecciones aprendidas</h2>
       
        <p><strong>El código es solo un pequeño porcentaje del trabajo.</strong> El resto es comunicación, documentación, testing, deployment, mantenimiento, y gestión de expectativas.</p>
        
        <p><strong>Entender el negocio es más valioso que conocer el último framework.</strong></p>
        
        <p><strong>La documentación no es opcional.</strong> Tu código va a ser mantenido por alguien (y quizás ese alguien sos vos en 3 años).</p>
        
        <p><strong>Los usuarios no leen.</strong> Simplificar es el camino.</p>
        
        <h2>Reflexión final</h2>
        
        <p>Sigo disfrutando del proceso de resolver problemas complejos y aprendiendo algo nuevo día a día.</p>
        
        <p>La carrera en desarrollo no es lineal. Hay curvas, retrocesos, cambios de dirección. Lo importante es mantener la curiosidad y la humildad para seguir aprendiendo.</p>
        
        <hr>
        
        <blockquote>
          <p><em>Si llegaste hasta acá, gracias por leerme. Si tenés alguna pregunta o comentario te invito a utilizar el formulario de contacto.</em></p>
        </blockquote>
      </div>
    `
  }];