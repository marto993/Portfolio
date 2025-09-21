// Datos de los artículos del blog - Versión mejorada
// Este archivo se puede generar automáticamente en el futuro

export const articlesData = [
  {
    slug: 'bitcoin-criptomonedas-explicacion-tecnica',
    title: 'Bitcoin y Criptomonedas: sin humo',
    date: '2025-09-18',
    excerpt: 'Un repaso sobre Bitcoin y las criptomonedas',
    readTime: '8 min',
    category: 'Tecnología',
    tags: ['bitcoin', 'blockchain', 'criptomonedas', 'tecnología', 'finanzas'],
    featured: true,
    content: `
      <div>
        
        <p>Hace algunos años la curiosidad me llevó a investigar Bitcoin más allá del ruido mediático. Como desarrollador, me fascinó la elegancia técnica de la solución. Este artículo es mi intento de explicar Bitcoin desde la perspectiva técnica.</p>
        
        <h2>El punto de partida: el whitepaper que cambió todo</h2>
        
        <p>En octubre de 2008, mientras el mundo financiero se desmoronaba, alguien bajo el pseudónimo Satoshi Nakamoto publicó 9 páginas que cambiarían todo: "Bitcoin: A Peer-to-Peer Electronic Cash System".</p>
        
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
    readTime: '6 min',
    category: 'Desarrollo',
    tags: ['carrera', 'desarrollo', 'experiencia', 'reflexión', 'programación'],
    featured: true,
    content: `
      <div>
       
        <p>Empezar a escribir sobre mi carrera me da un poco de vértigo. No porque sea una historia épica, sino porque es muy fácil caer en la auto-congratulación o en el síndrome del impostor. Pero bueno, acá vamos: mi recorrido desde un pibe de 16 años que apenas entendía qué era un algoritmo hasta convertirme en alguien que puede liderar migraciones complejas de sistemas ERP.</p>
        
        <h2>Los primeros pasos: cuando programar era casi magia</h2>
        
        <p>Mi primer contacto con la programación fue en la escuela técnica con Turbo Pascal. Recuerdo vívidamente la primera vez que logré hacer que la computadora me mostrara "Hola Mundo" en pantalla. Sonará ridículo, pero fue como hacer magia.</p>
        
        <p>Lo que más me llamó la atención no era la tecnología en sí, sino cómo podía resolver problemas complejos dividiéndolos en pasos simples. Ver a mis compañeros sufrir con algoritmos me motivó a ayudarlos. No era que fuera un genio, simplemente me gustaba el proceso de pensar paso a paso.</p>
        
        <p>De una clase de casi 30 estudiantes, solo 4 aprobamos algoritmos. No porque fuera súper difícil, sino porque requería un tipo de pensamiento que no todos estábamos acostumbrados a ejercitar. Ahí entendí mi primera lección importante: la programación no es sobre memorizar sintaxis, es sobre aprender a pensar.</p>
        
        <h3>La Olimpiada: mi primer "logro" real</h3>
        
        <p>Por destacarme entre mis compañeros, me invitaron a participar en la Olimpiada Informática Argentina. Honestamente, no tenía idea de en qué me estaba metiendo.</p>
        
        <p>Clasificar 4to en la instancia provincial y llegar a la nacional fue surreal. De repente estaba compitiendo contra pibes de todo el país que sabían cosas que yo ni imaginaba que existían. Fue mi primera experiencia real de síndrome del impostor.</p>
        
        <p>Terminé 10mo en la nacional. No era medalla, pero para un pibe de provincia que había aprendido programación en la escuela, no estaba mal. Más importante: me di cuenta de que había mucho, MUCHO que aprender.</p>
        
        <h2>Mi primer trabajo: la pesquera que cambió todo</h2>
        
        <p>La olimpiada me abrió puertas que ni sabía que existían. Un docente me recomendó para una pasantía de 2 semanas en una empresa pesquera. "Dos semanas", pensé, "¿qué puede salir mal?"</p>
        
        <p>Esas dos semanas se convirtieron en 9 años de carrera. Fue mi primera lección sobre cómo las oportunidades aparecen disfrazadas de experiencias temporales.</p>
        
        <p>Al principio era trabajo de medio tiempo mientras cursaba en la UTN. Después se volvió tiempo completo y tuve que pasarme al turno noche. Fueron 2 años de mucho esfuerzo: trabajar de 8 a 17, cursar de 18 a 22, llegar a casa 23hs, dormir, comenzar un nuevo día.</p>
        
        <h3>Evolución profesional: de junior a líder de proyecto</h3>
        
        <p>Mi carrera en la pesquera fue un crecimiento gradual pero constante. Empecé haciendo análisis funcional básico y soporte técnico. Lentamente fui ganando autonomía y responsabilidades más complejas.</p>
        
        <p>2012-2015 fueron mis años de "junior real": aprender las reglas del negocio, entender cómo funciona una empresa, cometer errores y aprender de ellos. El código era importante, pero más importante era entender por qué estaba escribiendo ese código.</p>
        
        <p>2015-2019 me convertí en el "solucionador de problemas". Cuando algo era complejo o requería entender múltiples áreas de la empresa, me lo asignaban a mí. No porque fuera el mejor programador, sino porque había desarrollado la habilidad de comunicarme con diferentes áreas y traducir necesidades de negocio a requerimientos técnicos.</p>
        
        <h2>El proyecto que me cambió: Libro de Sueldos Digital</h2>
        
        <p>Si tuviera que elegir el proyecto que más me marcó, sería el desarrollo del Libro de Sueldos Digital. Me sacó completamente de mi zona de confort y me obligó a aprender cosas que jamás pensé que necesitaría.</p>
        
        <p>Tuve que aprender liquidación de sueldos, cargas sociales, leyes laborales. De repente estaba estudiando código laboral argentino como si fuera documentación técnica. Era surreal, pero necesario.</p>
        
        <p>El proyecto me enseñó que ser desarrollador va mucho más allá del código. Tenés que entender el negocio tan profundamente como el CTO entiende la tecnología. Esa mentalidad me acompañó el resto de mi carrera.</p>
        
        <p>Trabajar codo a codo con la encargada de RRHH durante la implementación fue una master class en gestión del cambio. No alcanza con desarrollar algo que funcione técnicamente; tiene que funcionar humanamente también.</p>
        
        <h3>Liderando migraciones: cuando el código es lo menos importante</h3>
        
        <p>Mis últimos años en la pesquera estuvieron dominados por proyectos de migración de sistemas legacy. Era trabajo complejo que requería coordinar múltiples equipos, tanto internos como externos.</p>
        
        <p>Lo más difícil no era la parte técnica. Lo más difícil era lograr que 30+ usuarios cambiaran workflows que habían usado durante décadas. Cada reunión era una negociación. Cada decisión técnica tenía ramificaciones políticas internas.</p>
        
        <p>Aprendí que en proyectos de migración, el 20% del tiempo lo usás programando y el 80% coordinando, documentando, capacitando y apagando incendios. Es frustrante para alguien que empezó porque le gustaba programar, pero es la realidad de liderar proyectos complejos.</p>
        
        <h2>Mi aventura independiente: El Prode</h2>
        
        <p>Paralelamente a mi trabajo en la pesquera, tenía mi pequeño proyecto personal: El Prode. Empezó porque estaba cansado de gestionar pronósticos deportivos con hojas de Excel.</p>
        
        <p>Era mi excusa perfecta para aprender PHP. Necesitaba algo funcional rápido, y PHP era la herramienta correcta para el trabajo. No el lenguaje más elegante, pero gets things done.</p>
        
        <p>El proyecto me enseñó sobre la experiencia completa de desarrollo web: desde conectarme por SSH a un servidor hasta manejar usuarios reales con necesidades reales. También mi primer contacto con el estrés de tener "clientes" (aunque fueran amigos) dependiendo de tu código.</p>
        
        <p>Más importante: me dio confianza para emprender proyectos propios. Saber que podía conceptualizar, desarrollar, deployar y mantener una aplicación completa fue liberador.</p>
        
        <h2>Diversificando experiencias: mesa de ayuda y consulting</h2>
        
        <p>Después de la pesquera, decidí diversificar mi experiencia. Trabajé en mesa de ayuda para el Registro Civil de Córdoba y como consultor para una empresa de software ERP.</p>
        
        <p>La mesa de ayuda me enseñó sobre la importancia del soporte técnico. No es solo resolver problemas; es comunicar soluciones de manera clara y empática. Cada ticket es una oportunidad de mejorar la experiencia del usuario.</p>
        
        <p>Logré reducir los tiempos de respuesta en más del 33% simplemente organizando mejor los procesos y creando documentación clara. A veces las mejoras más importantes no requieren código nuevo, sino organización y comunicación mejores.</p>
        
        <p>En el consulting aprendí a trabajar con múltiples clientes simultaneamente. Cada empresa tiene su cultura, sus procesos, sus peculiaridades. Adaptarse rápidamente y agregar valor desde el primer día es un skill que solo se desarrolla con práctica.</p>
        
        <h2>Las tecnologías que marcaron mi carrera</h2>
        
        <p>Mi stack tecnológico evolucionó orgánicamente, siempre guiado por necesidades reales más que por hype.</p>
        
        <p>Visual FoxPro fue mi caballo de batalla durante años. Suena vintage, pero era increíblemente productivo para aplicaciones empresariales. Me enseñó sobre bases de datos, interfaz de usuario y lógica de negocio integrada.</p>
        
        <p>PHP me introdujo al desarrollo web. No es el lenguaje más sexy, pero es pragmático. Me permitió crear soluciones rápido y deployar fácil.</p>
        
        <p>JavaScript y React llegaron después, cuando entendí que el futuro del desarrollo de aplicaciones estaba en el browser. La curva de aprendizaje fue empinada, pero valió la pena.</p>
        
        <p>Node.js cerró el círculo: finalmente podía usar el mismo lenguaje en frontend y backend. La eficiencia mental de no cambiar de contexto constantemente es subestimada.</p>
        
        <h2>Lecciones aprendidas (a veces de la manera difícil)</h2>
       
        <p><strong>El código es solo un pequeño porcentaje del trabajo.</strong> El resto es comunicación, documentación, testing, deployment, mantenimiento, y gestión de expectativas. Nadie te enseña esto en los cursos de programación.</p>
        
        <p><strong>Entender el negocio es más valioso que conocer el último framework.</strong> React va a ser reemplazado eventualmente. Los principios de cómo funcionan las empresas son eternos.</p>
        
        <p><strong>La documentación no es opcional.</strong> Tu código va a ser mantenido por alguien más (incluso si ese alguien sos vos en 6 meses). Documentar bien es un acto de compasión hacia el futuro.</p>
        
        <p><strong>Los usuarios no leen.</strong> Si tu aplicación requiere un manual de 50 páginas, falló en UX. La simplicidad es la sofisticación definitiva.</p>
        
        <h2>Nuevas tecnologías</h2>
        
        <p>Hoy mi enfoque está en las automatizaciones. Después de años viendo procesos manuales repetitivos en diferentes empresas, estoy convencido de que hay una oportunidad enorme para optimizar procesos con herramientas como n8n.</p>
        
        <p>La mayoría de las empresas todavía tienen sistemas que no se hablan entre sí. Construir puentes entre esos sistemas es donde veo el mayor valor agregado.</p>
        
        <p>Mi objetivo es combinar mi experiencia en sistemas ERP con tecnologías modernas para crear soluciones que realmente impacten en la productividad empresarial.</p>
        
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