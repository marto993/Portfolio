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

        <h2>Primer proyecto complejo</h2>

        <p>Me tocó liderar el desarrollo de un nuevo módulo para registrar y dar trazabilidad a los Permisos de Embarque dentro del sistema de Comercio Exterior. </p>

        <p>El proyecto comenzó con algo que nunca había hecho antes: liderar reuniones con múltiples áreas de la empresa. Tuve que coordinar entrevistas con referentes de Comercio Exterior, Tesorería, Administración y Contabilidad.</p>

        <p>Cada área tenía su perspectiva del proceso, sus necesidades específicas y sus propias reglas de negocio que se debían respetar. Aquí tuve que encontrar los puntos en común, identificar las necesidades y definir un flujo de trabajo que funcionara para todos.</p>

        <p>Fueron necesarias varias reuniones para entender el proceso y llegar a un consenso definitivo con todos los involucrados de cuál era el camino a seguir.</p>

        <h3>Desarrollo iterativo (antes de conocer el término)</h3>

        <p>Sin saberlo, estaba aplicando una metodología ágil. Cada semana mostraba avances a los usuarios clave, recogía feedback y ajustaba el rumbo según fuera necesario.</p>

        <p>El módulo permitía registrar permisos de embarque de forma atómica, aplicando las reglas de negocio específicas del Comercio Exterior. Pero la parte que más me enorgullecía era la automatización: una vez que el usuario completaba el proceso, el sistema generaba automáticamente las órdenes de gasto correspondientes al pago de derechos de exportación, tasa de aduana, costo de digitalización y otros gastos asociados a cada exportación.</p>

        <p>La automatización incluía la generación de comprobantes, el envío de emails de notificación y la creación de movimientos en los sistemas de tesorería, contabilidad y proveedores. Todo esto sucedía de forma automática al avanzar en determinados puntos del proceso.</p>

        <h3>Capacitación y documentación: la otra mitad del proyecto</h3>

        <p>Una vez terminado el desarrollo vino la parte más cercana al usuario: la capacitación y documentación de cada etapa del proceso.</p>

        <p>Redacté manuales diferenciados para operadores y administradores. Los administradores de Tesorería necesitaban entender las configuraciones críticas que permitían que las automatizaciones funcionaran correctamente. Los operadores necesitaban una base de conocimientos que sirviera para su trabajo diario.</p>

        <h3>El seguimiento: mejora continua</h3>

        <p>Finalizada la implementación, establecí un proceso de seguimiento. Cada semana revisaba con los usuarios cómo estaba funcionando el sistema, y qué mejoras podían implementarse.</p>

        <p>Esta retroalimentación constante permitió refinar el módulo durante varios meses. Pequeños ajustes en la interfaz, validaciones adicionales, nuevos reportes... ¿El resultado? 100% de satisfacción del usuario.</p>

        <h3>Por qué fue un éxito rotundo</h3>

        <p>El proyecto se completó antes del plazo estimado, los usuarios lo integraron en su día a día y logró automatizar un proceso que antes requería múltiples pasos manuales y coordinación constante entre áreas.</p>

        <p>Aunque lo más importante fue darme cuenta de que podía liderar proyectos complejos de principio a fin y aprender MUCHÍSIMO en el proceso.</p>

        <p><strong>Programar es solo una parte del trabajo. El resto es comunicación, análisis, gestión y, sobre todo, entender profundamente el problema que estás resolviendo.</strong></p>

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
  }, 
  {
      slug: 'tokenizacion-activos-argentina-revolucion-financiera',
      title: 'Tokenización de Activos en Argentina',
      date: '2025-09-24',
      excerpt: 'Argentina, pionero regional con el marco regulatorio más avanzado de Latinoamérica para tokenizar activos del mundo real.',
      category: 'Fintech',
      tags: ['tokenización', 'blockchain', 'fintech', 'argentina', 'regulación', 'CNV', 'inversión'],
      featured: true,
      content: `
        <div>
          
          <h2>¿Qué es la tokenización de activos?</h2>
          
          <p>Imaginemos que tenés un departamento valuado en USD 100.000. La tokenización te permite dividir ese inmueble en, por ejemplo, 100.000 tokens digitales, donde cada token representa USD 1 de participación en la propiedad. Así, alguien puede invertir USD 100 y ser "dueño" del 0,1% de ese departamento.</p>
          
          <p>El token funciona como un certificado digital que se registra en blockchain, garantizando transparencia, trazabilidad e inmutabilidad. Es como tener acciones de una empresa, pero aplicado a bienes inmuebles, campos, obras de arte, o cualquier activo del mundo real.</p>
          
          <h2>El marco regulatorio argentino: pionero en la región</h2>
          
          <p>En junio de 2025, la Comisión Nacional de Valores (CNV) aprobó la <a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/326947/20250613" target="_blank" rel="noopener noreferrer">Resolución General 1069</a>, estableciendo las primeras reglas del juego para tokenizar activos en Argentina.</p>
          
          <p><strong>Primera fase (<a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/326947/20250613" target="_blank" rel="noopener noreferrer">RG 1069/2025</a>):</strong> Permite tokenizar fideicomisos financieros y fondos de inversión cerrados cuyos activos subyacentes sean bienes físicos (inmuebles, campos, facturas) que no coticen en mercados habilitados.</p>
          
          <p><strong>Segunda fase (<a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/330173/20250821" target="_blank" rel="noopener noreferrer">RG 1081/2025</a>):</strong> Amplió el alcance a acciones, obligaciones negociables y CEDEARs, completando un régimen integral.</p>
          
          <p>El sistema funciona bajo un <strong>sandbox regulatorio</strong> hasta agosto de 2026, período durante el cual se pueden realizar emisiones. Las emisiones ya aprobadas mantienen su validez incluso después del período de prueba.</p>
          
          <h3>Los operadores: PSAV</h3>
          
          <p>Los <strong>Proveedores de Servicios de Activos Virtuales (PSAV)</strong> son los intermediarios autorizados para comercializar y custodiar digitalmente estos tokens. Deben cumplir procedimientos auditados y reportar cualquier irregularidad a la CNV, garantizando protección a los inversores.</p>
          
          <h2>Casos reales que ya funcionan en Argentina</h2>
          
          <h3>R3AL BLOCKS: el primer edificio tokenizado de Buenos Aires</h3>
          
          <p>La startup liderada por la ingeniera Débora Carrizo lanzó <strong>Conectia</strong>, el primer edificio tokenizado de la Ciudad de Buenos Aires. El proyecto permite invertir desde USD 100 en un inmueble que se entregará en diciembre de 2025, ubicado en Monserrat.</p>
          
          <p>"La tokenización no solo simplifica el acceso a bienes como edificios, vehículos o empresas, sino que también ofrece mayor liquidez, transparencia y eficiencia en la gestión de activos", explica Carrizo.</p>
          
          <h3>Raíz: liquidez inmediata en real estate</h3>
          
          <p>La fintech liderada por Alexandre Boccara permite invertir en proyectos inmobiliarios con rendimientos anuales en dólares. Su modelo ofrece liquidez inmediata y distribuye ingresos mensualmente.</p>
          
          <p>"La tokenización nos dio la posibilidad de ofrecer lo mejor de todos los mundos: tiene la estabilidad y seguridad del ladrillo y la accesibilidad de cualquier billetera virtual", destaca Boccara.</p>
          
          <h3>Otros proyectos en marcha</h3>
          
          <p><strong>MilAires</strong> (Villa Devoto): Proyecto inmobiliario donde se pueden adquirir tokens desde montos muy bajos.</p>
          
          <p>Plataformas tecnológicas como <strong>Koibanx</strong> y <strong>Rext</strong> también están desarrollando infraestructura para tokenizar distintos tipos de activos.</p>
          
          <h2>¿Qué se puede tokenizar actualmente?</h2>
          
          <p>Bajo la regulación actual, se pueden tokenizar:</p>
          
          <p>• <strong>Certificados de participación de fideicomisos financieros</strong> cuyo activo subyacente esté compuesto por inmuebles, créditos, facturas u otros activos del mundo real</p>
          
          <p>• <strong>Cuotapartes de fondos comunes de inversión cerrados</strong> con patrimonio integrado por activos reales</p>
          
          <p>• <strong>Acciones, obligaciones negociables y CEDEARs</strong> (desde la segunda fase)</p>
          
          <p>Sectores como energía, agro, gastronomía y hasta jugadores de tenis están siendo explorados por diferentes plataformas.</p>
          
          <h2>Ventajas y riesgos</h2>
          
          <h3>Ventajas</h3>
          <p>• <strong>Democratización:</strong> Acceso a inversiones antes reservadas para grandes capitales</p>
          <p>• <strong>Liquidez:</strong> Mayor facilidad para vender participaciones</p>
          <p>• <strong>Transparencia:</strong> Toda la información queda registrada en blockchain</p>
          <p>• <strong>Diversificación:</strong> Posibilidad de invertir pequeñas sumas en múltiples activos</p>
          
          <h3>Riesgos a considerar</h3>
          <p>• <strong>Regulación en desarrollo:</strong> Estamos en período de prueba (sandbox)</p>
          <p>• <strong>Riesgo tecnológico:</strong> Dependencia de plataformas digitales</p>
          <p>• <strong>Riesgo de proyecto:</strong> Los activos subyacentes pueden no rendir lo esperado</p>
          <p>• <strong>Liquidez limitada:</strong> Aunque prometida, aún falta desarrollar mercados secundarios robustos</p>
          
          <h2>Argentina en el contexto internacional</h2>
          
          <p>Roberto Silva, presidente de la CNV, destacó que estas regulaciones "ponen a Argentina nuevamente en la vanguardia regional y global". Efectivamente, el país se suma a jurisdicciones como España (Ley 6/2023), Brasil (Resolución CVM N° 29/2021) y Uruguay (Ley N° 20.345) que ya regulan la tokenización.</p>
          
          <p>La diferencia argentina es la amplitud del marco regulatorio y la implementación práctica inmediata a través del sandbox.</p>
          
          <h2>El futuro inmediato</h2>
          
          <p>Con 8.6 millones de argentinos operando criptomonedas (19% de la población según la Fundación Blockchain Argentina) y un ecosistema fintech en rápida expansión, el terreno está preparado para la adopción masiva de activos tokenizados.</p>
          
          <p>Las plataformas locales ya están demostrando casos de uso concretos, y la regulación proporciona el marco de confianza necesario para que tanto inversores como emisores participen con seguridad.</p>
          
          <hr>
          
          <blockquote>
            <p><em>¿Conocías estos avances en tokenización de activos?. Si te gustó este artículo te invito a compartirlo en tus redes!</em></p>
          </blockquote>
        </div>
      `
},
{
  slug: 'primera-serendipia',
  title: 'Primera serendipia',
  date: '2025-09-28',
  excerpt: 'Cuando dos mentes llegan a la misma solución de forma independiente.',
  category: 'Reflexión',
  tags: ['serendipia', 'colaboración', 'desarrollo', 'experiencia', 'junior'],
  featured: false,
  content: `
    <div>
      
      <p>Esta es la historia de uno de los momentos que quedó grabado en mi memoria para siempre. De esas experiencias que trascienden y conectan con algo más profundo. El siguiente relato sucedió entre la primera y segunda semana de mi primer trabajo como desarrollador.</p>
      
      <p>Para entender bien esta historia necesito dar algo de contexto. En la empresa (en realidad grupo de empresas pesqueras con varios barcos) existía un sistema de reportes para visualizar las posiciones de todos los barcos de la flota. Este sistema tenía dos versiones: una básica que mostraba los barcos sobre una imagen estática de un mapa (opción limitada ya que no permitía zoom porque el mapa era una imagen fija), y otra más avanzada que abría el navegador predeterminado del usuario cargando Google Maps e incrustando cada uno de los barcos en sus coordenadas exactas. Esta versión avanzada permitía zoom para localizar exactamente la posición del barco en el mapa, además de dibujar las zonas de vedas de pesca.</p>
      
      <p>Mi compañero (desarrollador senior, trabajaba en la empresa hacía +15 años [Tipazo++]) estaba trabajando en mejorar justamente la versión de Google Maps para incorporarle más datos a cada barco que se veía en el mapa. La idea era que cuando el usuario hiciera click sobre un barco se desplegara un pequeño popup incrustado dentro del mapa que tuviera dos pestañas: una con información sobre la tripulación a bordo (legajo, apellido y nombre, categoría correspondiente al rango del tripulante, y totales de las cantidades), y otra sobre la producción que listara acumulado por día los partes de pesca, totalizando para saber la producción total que llevaba a bordo el barco. Hablamos de barcos factoría que cuentan con su propia planta de producción a bordo y pescan por más de 30 días.</p>
      
      <p>Un día en la oficina mi compañero me empezó a explicar lo que les acabo de contar, pero se encontraba atascado por una limitación técnica. Los barcos ya aparecían correctamente en el mapa de Google, eso funcionaba perfecto. El problema real era algo técnico: toda la información que se pretendía mostrar no cabía en el canal de comunicación disponible entre el sistema y el navegador.</p>
      
      <p>Simplemente no existían tipos ni estructuras de datos con la capacidad suficiente para servir toda la información y además en el formato necesario.</p>
      
      <p>Mi compañero llevaba algunas horas dándole vueltas al asunto. El problema era evidente y fácil de entender, pero la solución requería inventar un nuevo puente para enviar los datos al navegador y sobre eso nos quedamos charlando los minutos que quedaban del día laboral.</p>
      
      <p>Volví a mi casa pensando en ese problema, ilusionado de aportar mi primera solución. Recuerdo estar en el colectivo camino a casa construyendo ese puente técnico en mi cabeza. </p>
      
      <p>Para antes de cenar lo tenía resuelto. Se me ocurrió algo simple pero efectivo: desde el sistema guardar toda la información que no cupiera en la comunicación tradicional en archivos temporales, y además crear un pequeño script en JavaScript que se encargara de leer esos archivos (ya desde el navegador) e incrustar toda la información en la visualización por pantalla del usuario</p>
      
      <p>El proceso sería completamente transparente para el usuario. Luego los archivos temporales se podían borrar diariamente por política via GPO. Sin limitaciones de tamaño, sin complicaciones técnicas, una solución elegante que esquivaba las limitaciones de la comunicación directa.</p>
      
      <p>Al día siguiente llegué a la empresa (mi horario era de 13 a 17:30hs) con esa sensación única de cuando creés que encontraste la solución perfecta a un problema real. Y más siendo un junior al 100%, la posibilidad de aportar algo valioso a un compañero experimentado me llenaba de emoción.</p>
      
      <p>Saludé a mi compañero con una sonrisa que no podía disimular y fui directo al grano: "Che, ¿te acordás de la limitación que charlamos ayer del sistema de reportes con Google Maps?". Mi compañero me escuchó con atención, claramente interesado. En menos de dos minutos le expliqué toda la solución: archivos temporales, JavaScript, transparencia para el usuario. Un híper resumen, pero sabía que él me entendería a la primera. Y así fue.</p>
      
      <p>Lo que pasó después fue simplemente hermoso. Mi compañero me miró con una mezcla de sorpresa y alegría. Entre risas, me dijo: "¿Me creés que estuve toda la mañana programando exactamente eso?". Y procedió a mostrarme los avances que había hecho.</p>
      
      <p>No era broma. Mi compañero estaba desarrollando exactamente la misma solución. Exactamente. La. Misma. Solución. Dos mentes, trabajando de forma independiente, en un lapso de pocas horas, habían llegado al mismo lugar por caminos paralelos.</p>
      
      <p>Al ver que me había interesado genuinamente por el problema decidió derivarme el desarrollo para que continuara lo que él había empezado. Ya lo tenía resuelto en un 70%, restaba acomodar el diseño, añadir las zonas de vedas y corregir algunos errores menores. Completé aquella tarea en 2 días. Los barcos en Google Maps ahora mostraban toda la información detallada que habían solicitado.</p>
      
      <p>No hay forma de describir el shock de felicidad que uno recibe al experimentar una serendipia genuina. Simplemente no la hay. Esta experiencia puede ocurrir en muchos aspectos de la vida, pero hay una condición fundamental: tenés que estar abierto y dispuesto a colaborar de verdad. A entender el problema del otro, a querer ayudar desde el puro espíritu de cooperación, no porque sea tu obligación o "tu trabajo".</p>
         
      <p>Esta experiencia se quedó registrada para siempre en mi memoria y me inspiró a querer más. Es como una adicción, pero de las buenas: una que fortalece vínculos, que te invita a cooperar.</p>
      
      <p>Si sos desarrollador te invito a estar abierto a estos momentos, sobre todo si contás con un Seniority elevado. Esta serendipia sucedió no gracias a mí, sino por mérito de mi compañero experimentado que apenas se enfrentó al desafío decidió compartirlo conmigo.</p>
      
      <hr>
      
      <blockquote>
        <p><em>¿Experimentaste alguna vez una serendipia en tu carrera? Te invito a que me cuentes la historia en el formulario de Contacto.</em></p>
      </blockquote>
    </div>
  `
},{
  slug: 'ci-cd-github-actions-portfolio',
  title: 'CI/CD con GitHub Actions: Automatizando el despliegue de mi Portfolio',
  date: '2025-09-29',
  excerpt: 'Cómo implementé un pipeline de integración y despliegue continuo con GitHub Actions para automatizar completamente el deployment de mi portfolio.',
  category: 'DevOps',
  tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'automatización', 'deployment', 'GitHub Pages'],
  featured: false,
  content: `
    <div>
      
      <p>Después de completar mi portfolio con blog integrado, me enfrenté a una realidad incómoda: cada vez que hacía un cambio (por más pequeño que fuera) tenía que ejecutar manualmente <code>npm run build</code>, esperar a que terminara, y luego hacer push del directorio <code>dist</code> a GitHub. Un proceso tedioso que consumía tiempo y aumentaba las chances de errores humanos.</p>
      
      <p>La solución: implementar un pipeline de CI/CD con GitHub Actions que automatizara completamente este proceso. Cada push a la rama <code>main</code> dispararía automáticamente el build y deployment a GitHub Pages.</p>
      
      <h2>¿Qué es CI/CD?</h2>
      
      <p>CI/CD son las siglas de <strong>Continuous Integration</strong> (Integración Continua) y <strong>Continuous Deployment</strong> (Despliegue Continuo). Son prácticas de DevOps que permiten a los equipos de desarrollo entregar código de forma más rápida y confiable.</p>
      
      <h3>Continuous Integration (CI)</h3>
      
      <p>La integración continua implica fusionar cambios de código frecuentemente en una rama principal (típicamente <code>main</code> o <code>master</code>), ejecutando automáticamente tests y builds para detectar problemas lo antes posible.</p>
      
      <p>El objetivo es simple: cuanto antes detectes un error, más fácil y barato es corregirlo.</p>
      
      <h3>Continuous Deployment (CD)</h3>
      
      <p>El despliegue continuo lleva la CI un paso más allá: cada cambio que pasa las pruebas se despliega automáticamente a producción. Esto elimina intervención manual, reduce errores humanos y acelera el ciclo de desarrollo.</p>
      
      <p>En mi caso, cada push a <code>main</code> genera automáticamente un build optimizado y lo publica en GitHub Pages, sin que yo tenga que hacer absolutamente nada más allá del commit inicial.</p>
      
      <h2>GitHub Actions</h2>
      
      <p>GitHub Actions es la plataforma de CI/CD integrada directamente en GitHub. Te permite automatizar workflows directamente desde tu repositorio mediante archivos YAML que definen los pasos a ejecutar.</p>
      
      <h3>Conceptos clave</h3>
      
      <p><strong>Workflows:</strong> Son archivos YAML ubicados en <code>.github/workflows/</code> que definen procesos automatizados.</p>
      
      <p><strong>Jobs:</strong> Cada workflow contiene uno o más jobs que se ejecutan en paralelo (por defecto) o secuencialmente.</p>
      
      <p><strong>Steps:</strong> Cada job contiene pasos individuales que se ejecutan secuencialmente.</p>
      
      <p><strong>Actions:</strong> Son módulos reutilizables que encapsulan lógica común. Pueden ser creados por GitHub, la comunidad, o por vos mismo.</p>
      
      <p><strong>Runners:</strong> Son los servidores que ejecutan tus workflows. GitHub proporciona runners hospedados (Ubuntu, Windows, macOS) o podés usar runners auto-hospedados.</p>
      
      <h2>Mi implementación paso a paso</h2>
      
      <p>Voy a desglosar el workflow que implementé para mi portfolio. El archivo completo está en <code>.github/workflows/deploy.yml</code>.</p>
      
      <h3>1. Configuración inicial y triggers</h3>
      
      <pre><code>name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:</code></pre>
      
      <p>El workflow se llama "Deploy Portfolio to GitHub Pages" y se activa de dos formas:</p>
      
      <p>• Automáticamente con cada push a la rama <code>main</code></p>
      <p>• Manualmente desde la interfaz de GitHub (<code>workflow_dispatch</code>)</p>
      
      <p>La opción manual es útil para forzar un redeploy sin hacer cambios en el código, por ejemplo, si GitHub Pages tuvo algún problema.</p>
      
      <h3>2. Permisos del workflow</h3>
      
      <pre><code>jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write</code></pre>
      
      <p>Esta sección define los permisos necesarios para el job:</p>
      
      <p>• <code>contents: read</code> - Permite leer el código del repositorio</p>
      <p>• <code>pages: write</code> - Crucial para publicar en GitHub Pages</p>
      <p>• <code>id-token: write</code> - Necesario para autenticación segura con GitHub Pages</p>
      
      <p>Sin estos permisos específicos, el workflow fallaría al intentar desplegar.</p>
      
      <h3>3. Checkout del repositorio</h3>
      
      <pre><code>steps:
  - name: Checkout repository
    uses: actions/checkout@v4</code></pre>
      
      <p>El primer paso es obtener el código del repositorio. Uso la versión 4 de la action oficial de GitHub que clona el repo en el runner.</p>
      
      <h3>4. Setup de Node.js con caché</h3>
      
      <pre><code>- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '22'
    cache: 'npm'</code></pre>
      
      <p>Aquí hay dos optimizaciones importantes:</p>
      
      <p><strong>Node 22:</strong> Especifico la versión exacta para garantizar reproducibilidad del build.</p>
      
      <p><strong>Cache de npm:</strong> Esta es la clave para acelerar el workflow. GitHub Actions cachea automáticamente <code>node_modules</code> usando el hash de <code>package-lock.json</code>. Si las dependencias no cambiaron, las restaura del caché en lugar de reinstalarlas desde cero.</p>
      
      <p>Esto puede reducir el tiempo de instalación de dependencias de 2-3 minutos a 10-20 segundos.</p>
      
      <h3>5. Instalación de dependencias</h3>
      
      <pre><code>- name: Install dependencies
  run: npm ci</code></pre>
      
      <p>Uso <code>npm ci</code> en lugar de <code>npm install</code>. La diferencia es crucial:</p>
      
      <p>• <code>npm ci</code> es más rápido y determinista</p>
      <p>• Borra <code>node_modules</code> existente antes de instalar</p>
      <p>• Instala exactamente las versiones especificadas en <code>package-lock.json</code></p>
      <p>• Falla si hay inconsistencias entre <code>package.json</code> y <code>package-lock.json</code></p>
      
      <p>Es el comando recomendado para entornos de CI/CD.</p>
      
      <h3>6. Build del proyecto</h3>
      
      <pre><code>- name: Build project
  run: npm run build</code></pre>
      
      <p>Este paso ejecuta el script de build definido en <code>package.json</code>. En mi caso, Vite se encarga de:</p>
      
      <p>• Transpilar JSX a JavaScript</p>
      <p>• Procesar Tailwind CSS</p>
      <p>• Minificar archivos</p>
      <p>• Optimizar assets</p>
      <p>• Generar el directorio <code>dist</code></p>
      
      <p>El build usa la configuración de <code>vite.config.js</code> que incluye <code>base: '/Portfolio/'</code>, crítico para que las rutas funcionen correctamente en GitHub Pages.</p>
      
      <h3>7. Configuración de GitHub Pages</h3>
      
      <pre><code>- name: Setup Pages
  uses: actions/configure-pages@v4</code></pre>
      
      <p>Esta action prepara el entorno para desplegar en GitHub Pages. Configura las URLs correctas y verifica que Pages esté habilitado en el repositorio.</p>
      
      <h3>8. Upload del artifact</h3>
      
      <pre><code>- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './dist'</code></pre>
      
      <p>Aquí subimos el directorio <code>dist</code> como un artifact. Los artifacts son archivos que persisten entre jobs y steps. En este caso, el artifact contiene todo el sitio estático generado.</p>
      
      <p>GitHub Actions comprime automáticamente el artifact para acelerar la transferencia.</p>
      
      <h3>9. Deploy a GitHub Pages</h3>
      
      <pre><code>- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v4</code></pre>
      
      <p>El paso final toma el artifact y lo publica en GitHub Pages. La action maneja toda la complejidad de:</p>
      
      <p>• Autenticación con GitHub Pages</p>
      <p>• Publicación del contenido</p>
      <p>• Invalidación de caché</p>
      <p>• Generación de la URL final</p>
      
      <h3>Configuración de Vite para GitHub Pages</h3>
      
      <p>Un detalle crítico en <code>vite.config.js</code> es el <code>base</code> path:</p>
      
      <pre><code>export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})</code></pre>
      
      <p>Sin <code>base: '/Portfolio/'</code>, todas las rutas fallarían porque GitHub Pages sirve el sitio desde <code>https://usuario.github.io/Portfolio/</code> y no desde la raíz.</p>
      
      <h3>Optimización del build</h3>
      
      <p>Desactivé sourcemaps en producción (<code>sourcemap: false</code>) para reducir el tamaño del artifact y acelerar el despliegue.</p>
      
      <h3>Separación de dependencias</h3>
      
      <p>En <code>package.json</code> separo claramente <code>dependencies</code> de <code>devDependencies</code>. Esto permite que en el futuro, si quisiera optimizar aún más, podría usar <code>npm ci --only=production</code> en el build.</p>
      
      <h2>Debugging y troubleshooting</h2>
      
      <p>Cuando un workflow falla, GitHub muestra logs detallados de cada step. Podés acceder desde la pestaña "Actions" de tu repositorio.</p>
      
      <p>Los errores más comunes que encontré:</p>
      
      <p><strong>Error de permisos:</strong> Si olvidás configurar <code>pages: write</code> en permissions, el deploy fallará con un error de autenticación.</p>
      
      <p><strong>Error de build:</strong> Si hay errores en el código, el paso de build fallará. Los logs mostrarán exactamente qué archivo y línea causó el problema.</p>
      
      <p><strong>Error de base path:</strong> Si el sitio carga pero todos los assets devuelven 404, probablemente olvidaste configurar <code>base</code> en Vite.</p>
      
      <h3>Testing local antes del push</h3>
      
      <p>Antes de hacer push, siempre ejecuto:</p>
      
      <pre><code>npm run build
npm run preview</code></pre>
      
      <p>Esto me permite verificar que el build funciona correctamente y que el sitio se ve bien en el entorno de producción simulado.</p>
      
      <h3>Forzar redeploy</h3>
      
      <p>Si necesitás redesplegar sin hacer cambios, podés:</p>
      
      <p>• Usar la opción "Run workflow" en la pestaña Actions</p>
      <p>• Hacer un commit vacío: <code>git commit --allow-empty -m "Trigger redeploy"</code></p>
      
      <h3>Caché corrupto</h3>
      
      <p>Si sospechás que el caché está causando problemas, GitHub permite limpiar manualmente el caché desde Settings → Actions → Caches.</p>
      
      <h3>Verificar permisos del repositorio</h3>
      
      <p>En Settings → Actions → General, asegurate de que "Workflow permissions" esté en "Read and write permissions". Sin esto, el workflow no podrá escribir en Pages.</p>
      
      <h2>Resultados y beneficios</h2>
      
      <p>Desde que implementé este workflow:</p>
      
      <p>• <strong>Tiempo de deployment:</strong> Automático</p>
      <p>• <strong>Errores humanos:</strong> Eliminados por completo</p>
      <p>• <strong>Flujo de trabajo:</strong> Simplificado a solo <code>git push</code></p>
      <p>• <strong>Confiabilidad:</strong> El build es 100% reproducible</p>
      <p>• <strong>Historial:</strong> Cada deployment queda registrado con logs completos</p>
     
      <h2>Algunas mejoras que se podrían implementar</h2>
            
      <p><strong>Testing automatizado:</strong> Agregar un job que ejecute tests antes del deploy</p>
      
      <p><strong>Linting:</strong> Incluir ESLint en el pipeline para mantener calidad del código</p>
      
      <p><strong>Deploy preview:</strong> Para PRs, crear deploys temporales de preview</p>
      
      <p><strong>Notificaciones:</strong> Integrar con Slack o Telegram para notificar cuando un deploy termina</p>
      
      <p><strong>Rollback automático:</strong> Si un deploy falla los smoke tests, revertir al estado anterior</p>
     
      <h3>Si todavía estás desplegando manualmente tus proyectos, te recomiendo que dediques una tarde a implementar tu primer workflow. La inversión inicial de tiempo se recupera rápidamente en productividad y paz mental.</h3>
      
      <hr>
      
      <blockquote>
        <p><em>¿Necesitas implementar CI/CD en tus proyectos? Escribime en el formulario de contacto.</em></p>
      </blockquote>
    </div>
  `
}];