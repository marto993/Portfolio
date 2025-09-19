// Datos de los artículos del blog - Versión mejorada
// Este archivo se puede generar automáticamente en el futuro

export const articlesData = [
  {
    slug: 'bitcoin-criptomonedas-explicacion-tecnica',
    title: 'Bitcoin y Criptomonedas: Una Explicación Técnica',
    date: '2025-09-18',
    excerpt: 'Un repaso sobre Bitcoin y Criptomonedas',
    readTime: '8 min',
    category: 'Tecnología',
    tags: ['bitcoin', 'blockchain', 'criptomonedas', 'tecnología', 'finanzas'],
    featured: true,
    content: `
      <div class="prose prose-invert prose-lg max-w-none">
        
        <p class="text-xl text-gray-300 leading-relaxed mb-8">Llevo años tratando de entender Bitcoin más allá del ruido mediático. Como desarrollador, me fascinó la elegancia técnica de la solución. Este artículo es mi intento de explicar Bitcoin desde la perspectiva técnica.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">El punto de partida: el whitepaper que cambió todo</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">En octubre de 2008, mientras el mundo financiero se desmoronaba, alguien bajo el pseudónimo Satoshi Nakamoto publicó 9 páginas que cambiarían todo: "Bitcoin: A Peer-to-Peer Electronic Cash System".</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">La primera vez que leí ese paper, admito que no entendí completamente la magnitud de lo que proponía. Pero había algo que me llamó la atención: finalmente alguien había resuelto el problema del doble gasto sin necesidad de un tercero de confianza. Eso es... enorme.</p>
        
        <div class="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 mb-8 border border-orange-500/20">
          <p class="text-gray-300 mb-4">El problema del doble gasto suena simple pero es fundamental: ¿cómo evitas que alguien use el mismo dinero digital dos veces? Los bancos tradicionales lo resuelven manteniendo un registro centralizado. Satoshi lo resolvió con matemáticas e incentivos económicos distribuidos.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Blockchain: el libro contable que no se puede falsificar</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Cuando empecé a estudiar blockchain, me ayudó pensar en ello como un libro contable compartido que todos pueden ver pero nadie puede alterar. Cada página (bloque) está conectada con la anterior mediante un hash criptográfico.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Imaginate que cada bloque es como una página de un libro donde escribís con tinta indeleble. Si alguien quiere cambiar algo en una página anterior, toda la tinta de las páginas siguientes cambiaría de color instantáneamente, haciendo obvio el intento de fraude.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Pero acá viene lo brillante: no hay una sola copia del libro. Hay miles de copias distribuidas por todo el mundo, y todas se actualizan constantemente. Para falsificar el registro, tendrías que coordinar simultáneamente la alteración de miles de copias. Matemáticamente posible, económicamente inviable.</p>
        
        <h3 class="text-2xl font-semibold text-white mb-4 mt-8">Cómo funciona una transacción (sin el tecnicismo)</h3>
        
        <p class="text-gray-300 leading-relaxed mb-6">Enviar Bitcoin es más simple de lo que parece:</p>
        
        <p class="text-gray-300 leading-relaxed mb-4">1. Firmás la transacción con tu clave privada (como firmar un cheque)</p>
        <p class="text-gray-300 leading-relaxed mb-4">2. La transacción se propaga por la red</p>
        <p class="text-gray-300 leading-relaxed mb-4">3. Los mineros la verifican y la incluyen en un bloque</p>
        <p class="text-gray-300 leading-relaxed mb-4">4. El bloque se añade a la cadena</p>
        <p class="text-gray-300 leading-relaxed mb-6">5. Tu transacción queda confirmada para la eternidad</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">El tiempo que tarda depende de dos cosas: cuánto pagás de comisión y qué tan congestionada está la red. Durante el bull run de 2017, las comisiones llegaron a ser ridículas. Era más barato enviar un giro bancario que usar Bitcoin. Irónico, ¿no?</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Los 21 millones: escasez programada</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Una de las cosas que más me gusta de Bitcoin es que su política monetaria está escrita en código, no en las decisiones de políticos o banqueros centrales. Solo van a existir 21 millones de Bitcoin, punto.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Cada 4 años aproximadamente ocurre el "halving": la recompensa por minar se reduce a la mitad. Es como si cada 4 años fuera cada vez más difícil encontrar oro. Pero a diferencia del oro, sabemos exactamente cuánto Bitcoin va a existir y cuándo se va a crear el último.</p>
        
        <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 mb-8 border border-yellow-500/20">
          <p class="text-gray-300 mb-4">El último Bitcoin se va a minar alrededor del año 2140. Para ese entonces, probablemente ni vos ni yo estemos acá para verlo. Pero el código seguirá funcionando, implacable, siguiendo las reglas que Satoshi escribió hace más de 15 años.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Las limitaciones que nadie quiere admitir</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Acá es donde me pongo un poco crítico. Bitcoin tiene problemas reales que los maximalists prefieren ignorar.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Primero, la velocidad. Bitcoin procesa entre 3 y 7 transacciones por segundo. Visa procesa 65.000. Sí, ya sé que no es una comparación justa porque una es una red de liquidación final y la otra un procesador de pagos. Pero el usuario promedio no entiende esa diferencia técnica.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Segundo, las comisiones. Durante períodos de alta demanda, enviar $10 puede costarte $50 de comisión. Es insostenible para micropagos o para cualquier uso cotidiano en economías en desarrollo.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Tercero, la complejidad de uso. Perder tu clave privada significa perder tu dinero para siempre. No hay servicio al cliente, no hay "olvidé mi contraseña". Esa responsabilidad total es liberadora para algunos, aterradora para otros.</p>
        
        <h3 class="text-2xl font-semibold text-white mb-4 mt-8">Lightning Network: la segunda capa que puede cambiar todo</h3>
        
        <p class="text-gray-300 leading-relaxed mb-6">Lightning Network es la respuesta técnica a las limitaciones de Bitcoin. Es como abrir una pestaña en un bar: depositás dinero una vez, tomás toda la noche, y al final liquidás todo de una vez.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Dos personas abren un canal depositando Bitcoin, pueden hacer transacciones ilimitadas entre ellas casi gratis y casi instantáneas, y cuando terminan, cierran el canal y todo se liquida en la blockchain principal.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">El problema es la experiencia de usuario. Abrir canales, gestionar liquidez, enrutamiento de pagos... Es complejo. Mejoró muchísimo en los últimos años, pero sigue siendo intimidante para el usuario promedio.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Bitcoin vs Ethereum: filosofías diferentes</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Como desarrollador, encuentro la comparación Bitcoin vs Ethereum fascinante. Son filosofías completamente diferentes.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Bitcoin es conservador por diseño. Cambia lentamente, prioriza la seguridad sobre la funcionalidad. Es como UNIX: hace una cosa y la hace muy bien.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Ethereum es experimentalista. Smart contracts, DeFi, NFTs, DAOs... Es un ecosistema completo de experimentación financiera. También es más propenso a bugs, hacks y problemas de escalabilidad.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Personalmente, creo que ambos tienen su lugar. Bitcoin como reserva de valor digital, Ethereum como plataforma de innovación financiera. No tienen por qué competir.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">El potencial real: dinero sin fronteras</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Lo que más me emociona de Bitcoin no es que pueda valer $100.000 o $1.000.000. Es su potencial como dinero verdaderamente global.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Pensá en alguien en un país con hiperinflación. O en una persona que necesita enviar dinero a su familia al otro lado del mundo. O en alguien que vive bajo un régimen autoritario que puede congelar sus cuentas bancarias por pensar diferente.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Para estas personas, Bitcoin no es especulación. Es libertad financiera real. Es la diferencia entre tener control sobre su dinero o que otros decidan por ellos.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Los riesgos que pocos discuten</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Pero no todo es color de rosa. Hay riesgos reales que la comunidad Bitcoin prefiere no discutir.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">La transparencia de la blockchain es un arma de doble filo. Todas las transacciones son públicas. Si alguien vincula tu identidad con una dirección Bitcoin, puede ver todo tu historial financiero. Privacy coins como Monero existen por una razón.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">La autocustodia requiere conocimiento técnico. La cantidad de Bitcoin perdido para siempre por errores humanos es asombrosa. Algunos estudios estiman que entre 3 y 4 millones de Bitcoin (¡20% del supply total!) están perdidos para siempre.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Y está el riesgo regulatorio. Los gobiernos todavía están en una etapa temprana del análisis sobre cómo tratar con Bitcoin. Prohibiciones, regulaciones extremas o impuestos confiscatorios podrían limitar severamente su adopción.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">¿Qué viene después?</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Bitcoin está evolucionando constantemente, aunque lentamente. Taproot mejora la privacidad y eficiencia. Lightning Network crece todos los días. La adopción institucional se acelera.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Pero la pregunta real no es si Bitcoin va a "ganar". Es si la humanidad está lista para un dinero que no puede ser controlado por ningún gobierno o corporación.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Personalmente, creo que sí. Pero va a tomar tiempo, educación y mucha paciencia.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Mi perspectiva</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">Bitcoin no va a reemplazar al dólar, ni a ninguna otra moneda. Pero sí representa un experimento monetario sin precedentes que ya cambió cómo pensamos sobre el dinero. Es un software que ha sentado las bases de un nuevo sistema financiero, paralelo al tradicional.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Bitcoin no es perfecto. Pero es un comienzo. Y a veces, un buen comienzo es todo lo que necesitás para cambiar el mundo.</p>
        
        <div class="border-t border-gray-700 my-12"></div>
        
        <div class="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/20">
          <p class="text-gray-400 italic text-center mb-0">
            Si te interesa automatizar procesos con criptomonedas o integrar Bitcoin en tu proyecto, podemos charlar sobre cómo aplicar esta tecnología de manera práctica.
          </p>
        </div>
      </div>
    `
  },
  {
    slug: 'mi-carrera-desarrollo',
    title: 'Mi camino en el desarrollo de software',
    date: '2025-08-30',
    excerpt: 'Lecciones, errores y reflexiones luego de más de 10 años en IT.',
    readTime: '6 min',
    category: 'Desarrollo',
    tags: ['carrera', 'desarrollo', 'experiencia', 'reflexión', 'programación'],
    featured: true,
    content: `
      <div class="prose prose-invert prose-lg max-w-none">
       
        <p class="text-xl text-gray-300 leading-relaxed mb-8">Empezar a escribir sobre mi carrera me da un poco de vértigo. No porque sea una historia épica, sino porque es muy fácil caer en la auto-congratulación o en el síndrome del impostor. Pero bueno, acá vamos: mi recorrido desde un pibe de 16 años que apenas entendía qué era un algoritmo hasta convertirme en alguien que puede liderar migraciones complejas de sistemas ERP.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Los primeros pasos: cuando programar era casi magia</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Mi primer contacto con la programación fue en la escuela técnica con Turbo Pascal. Recuerdo vívidamente la primera vez que logré hacer que la computadora me mostrara "Hola Mundo" en pantalla. Sonará ridículo, pero fue como hacer magia.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Lo que más me llamó la atención no era la tecnología en sí, sino cómo podía resolver problemas complejos dividiéndolos en pasos simples. Ver a mis compañeros sufrir con algoritmos me motivó a ayudarlos. No era que fuera un genio, simplemente me gustaba el proceso de pensar paso a paso.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">De una clase de casi 30 estudiantes, solo 4 aprobamos algoritmos. No porque fuera súper difícil, sino porque requería un tipo de pensamiento que no todos estábamos acostumbrados a ejercitar. Ahí entendí mi primera lección importante: la programación no es sobre memorizar sintaxis, es sobre aprender a pensar.</p>
        
        <h3 class="text-2xl font-semibold text-white mb-4 mt-8">La Olimpiada: mi primer "logro" real</h3>
        
        <p class="text-gray-300 leading-relaxed mb-6">Por destacarme entre mis compañeros, me invitaron a participar en la Olimpiada Informática Argentina. Honestamente, no tenía idea de en qué me estaba metiendo.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Clasificar 4to en la instancia provincial y llegar a la nacional fue surreal. De repente estaba compitiendo contra pibes de todo el país que sabían cosas que yo ni imaginaba que existían. Fue mi primera experiencia real de síndrome del impostor.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Terminé 10mo en la nacional. No era medalla, pero para un pibe de provincia que había aprendido programación en la escuela, no estaba mal. Más importante: me di cuenta de que había mucho, MUCHO que aprender.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Mi primer trabajo: la pesquera que cambió todo</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">La olimpiada me abrió puertas que ni sabía que existían. Un docente me recomendó para una pasantía de 2 semanas en una empresa pesquera. "Dos semanas", pensé, "¿qué puede salir mal?"</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Esas dos semanas se convirtieron en 9 años de carrera. Fue mi primera lección sobre cómo las oportunidades aparecen disfrazadas de experiencias temporales.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Al principio era trabajo de medio tiempo mientras cursaba en la UTN. Después se volvió tiempo completo y tuve que pasarme al turno noche. Fueron 2 años de mucho esfuerzo: trabajar de 8 a 17, cursar de 18 a 22, llegar a casa 23hs, dormir, comenzar un nuevo día.</p>
        
        <h3 class="text-2xl font-semibold text-white mb-4 mt-8">Evolución profesional: de junior a líder de proyecto</h3>
        
        <p class="text-gray-300 leading-relaxed mb-6">Mi carrera en la pesquera fue un crecimiento gradual pero constante. Empecé haciendo análisis funcional básico y soporte técnico. Lentamente fui ganando autonomía y responsabilidades más complejas.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">2012-2015 fueron mis años de "junior real": aprender las reglas del negocio, entender cómo funciona una empresa, cometer errores y aprender de ellos. El código era importante, pero más importante era entender por qué estaba escribiendo ese código.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">2015-2019 me convertí en el "solucionador de problemas". Cuando algo era complejo o requería entender múltiples áreas de la empresa, me lo asignaban a mí. No porque fuera el mejor programador, sino porque había desarrollado la habilidad de comunicarme con diferentes áreas y traducir necesidades de negocio a requerimientos técnicos.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">El proyecto que me cambió: Libro de Sueldos Digital</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Si tuviera que elegir el proyecto que más me marcó, sería el desarrollo del Libro de Sueldos Digital. Me sacó completamente de mi zona de confort y me obligó a aprender cosas que jamás pensé que necesitaría.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Tuve que aprender liquidación de sueldos, cargas sociales, leyes laborales. De repente estaba estudiando código laboral argentino como si fuera documentación técnica. Era surreal, pero necesario.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">El proyecto me enseñó que ser desarrollador va mucho más allá del código. Tenés que entender el negocio tan profundamente como el CTO entiende la tecnología. Esa mentalidad me acompañó el resto de mi carrera.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Trabajar codo a codo con la encargada de RRHH durante la implementación fue una master class en gestión del cambio. No alcanza con desarrollar algo que funcione técnicamente; tiene que funcionar humanamente también.</p>
        
        <h3 class="text-2xl font-semibold text-white mb-4 mt-8">Liderando migraciones: cuando el código es lo menos importante</h3>
        
        <p class="text-gray-300 leading-relaxed mb-6">Mis últimos años en la pesquera estuvieron dominados por proyectos de migración de sistemas legacy. Era trabajo complejo que requería coordinar múltiples equipos, tanto internos como externos.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Lo más difícil no era la parte técnica. Lo más difícil era lograr que 30+ usuarios cambiaran workflows que habían usado durante décadas. Cada reunión era una negociación. Cada decisión técnica tenía ramificaciones políticas internas.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Aprendí que en proyectos de migración, el 20% del tiempo lo usás programando y el 80% coordinando, documentando, capacitando y apagando incendios. Es frustrante para alguien que empezó porque le gustaba programar, pero es la realidad de liderar proyectos complejos.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Mi aventura independiente: El Prode</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Paralelamente a mi trabajo en la pesquera, tenía mi pequeño proyecto personal: El Prode. Empezó porque estaba cansado de gestionar pronósticos deportivos con hojas de Excel.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Era mi excusa perfecta para aprender PHP. Necesitaba algo funcional rápido, y PHP era la herramienta correcta para el trabajo. No el lenguaje más elegante, pero gets things done.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">El proyecto me enseñó sobre la experiencia completa de desarrollo web: desde conectarme por SSH a un servidor hasta manejar usuarios reales con necesidades reales. También mi primer contacto con el estrés de tener "clientes" (aunque fueran amigos) dependiendo de tu código.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Más importante: me dio confianza para emprender proyectos propios. Saber que podía conceptualizar, desarrollar, deployar y mantener una aplicación completa fue liberador.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Diversificando experiencias: mesa de ayuda y consulting</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Después de la pesquera, decidí diversificar mi experiencia. Trabajé en mesa de ayuda para el Registro Civil de Córdoba y como consultor para una empresa de software ERP.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">La mesa de ayuda me enseñó sobre la importancia del soporte técnico. No es solo resolver problemas; es comunicar soluciones de manera clara y empática. Cada ticket es una oportunidad de mejorar la experiencia del usuario.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Logré reducir los tiempos de respuesta en más del 33% simplemente organizando mejor los procesos y creando documentación clara. A veces las mejoras más importantes no requieren código nuevo, sino organización y comunicación mejores.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">En el consulting aprendí a trabajar con múltiples clientes simultaneamente. Cada empresa tiene su cultura, sus procesos, sus peculiaridades. Adaptarse rápidamente y agregar valor desde el primer día es un skill que solo se desarrolla con práctica.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Las tecnologías que marcaron mi carrera</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Mi stack tecnológico evolucionó orgánicamente, siempre guiado por necesidades reales más que por hype.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Visual FoxPro fue mi caballo de batalla durante años. Suena vintage, pero era increíblemente productivo para aplicaciones empresariales. Me enseñó sobre bases de datos, interfaz de usuario y lógica de negocio integrada.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">PHP me introdujo al desarrollo web. No es el lenguaje más sexy, pero es pragmático. Me permitió crear soluciones rápido y deployar fácil.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">JavaScript y React llegaron después, cuando entendí que el futuro del desarrollo de aplicaciones estaba en el browser. La curva de aprendizaje fue empinada, pero valió la pena.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Node.js cerró el círculo: finalmente podía usar el mismo lenguaje en frontend y backend. La eficiencia mental de no cambiar de contexto constantemente es subestimada.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Lecciones aprendidas (a veces de la manera difícil)</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Después de más de 10 años en esto, hay algunas lecciones que quisiera haber aprendido antes:</p>
        
        <p class="text-gray-300 leading-relaxed mb-6"><strong>El código es solo un pequeño porcentaje del trabajo.</strong> El resto es comunicación, documentación, testing, deployment, mantenimiento, y gestión de expectativas. Nadie te enseña esto en los cursos de programación.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6"><strong>Entender el negocio es más valioso que conocer el último framework.</strong> React va a ser reemplazado eventualmente. Los principios de cómo funcionan las empresas son eternos.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6"><strong>La documentación no es opcional.</strong> Tu código va a ser mantenido por alguien más (incluso si ese alguien sos vos en 6 meses). Documentar bien es un acto de compasión hacia el futuro.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6"><strong>Los usuarios no leen.</strong> Si tu aplicación requiere un manual de 50 páginas, falló en UX. La simplicidad es la sofisticación definitiva.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6"><strong>Las estimaciones siempre están mal.</strong> Multiplica por 2, y después agregá buffer para lo que no pensaste. Siempre hay algo que no pensaste.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Hacia dónde voy ahora</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Hoy mi enfoque está en las automatizaciones. Después de años viendo procesos manuales repetitivos en diferentes empresas, estoy convencido de que hay una oportunidad enorme para optimizar workflows con herramientas como n8n.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">También estoy explorando más profundamente el mundo de las APIs y microservicios. La mayoría de las empresas todavía tienen sistemas que no se hablan entre sí. Construir puentes entre esos sistemas es donde veo el mayor valor agregado.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Mi objetivo es combinar mi experiencia en sistemas ERP con tecnologías modernas para crear soluciones que realmente impacten en la productividad empresarial.</p>
        
        <h2 class="text-3xl font-bold text-white mb-6 mt-12">Reflexiones finales</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6 text-lg">Escribir esto me hizo dar cuenta de cuánto cambié desde aquel pibe que se emocionaba con un "Hola Mundo" en Turbo Pascal. Pero algunas cosas no cambiaron: sigo disfrutando el proceso de resolver problemas complejos y sigo aprendiendo algo nuevo cada día.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">La carrera en desarrollo no es lineal. Hay curvas, retrocesos, cambios de dirección. Lo importante es mantener la curiosidad y la humildad para seguir aprendiendo.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Y por sobre todo: recordar que detrás de cada sistema, cada aplicación, cada automatización, hay personas reales tratando de hacer su trabajo mejor. Ese es el verdadero propósito de lo que hacemos.</p>
        
        <div class="border-t border-gray-700 my-12"></div>
        
        <div class="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-6 border border-primary-500/20">
          <p class="text-gray-400 italic text-center mb-0">
            Si llegaste hasta acá, gracias por leer mi historia. Si tenés alguna pregunta o querés charlar sobre desarrollo, automatizaciones, o la vida en general, no dudes en contactarme.
          </p>
        </div>
      </div>
    `
  }];