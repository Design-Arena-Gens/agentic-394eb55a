const copies = [
  {
    id: "variante-1",
    title: "Variante 1",
    hook: "Cuando tu compañero de vida se va, no aceptes un adiós improvisado.",
    body:
      "En Tributo Sereno nos adelantamos al caos y te damos calma inmediata en Puebla Sur, San Andrés Cholula, Lomas de Angelópolis y San José Chapulco. Nuestro servicio cubre la cremación completa y obsequiamos velorio íntimo, aromaterapia relajante, video conmemorativo, huella y nariz en cera, certificado y obituario listo para compartir. Somos expertos en honrar a quien te acompañó en cada siesta y paseo. Guarda este nombre hoy y recíbelo en el momento exacto que lo necesites.",
  },
  {
    id: "variante-2",
    title: "Variante 2",
    hook:
      "Haz que el último adiós de tu peludo sea tan sereno como sus siestas en tu regazo.",
    body:
      "Tributo Sereno responde al instante en Puebla Sur, Cholula, Lomas de Angelópolis y San José Chapulco para encargarse de la cremación integral y regalarte un ritual completo: sala de velación íntima, aromaterapia que calma, video homenaje, huella y nariz en cera, certificado y obituario personalizado. Somos la alternativa premium para familias C+ a A que desean respeto, estética y logística impecable. Guarda nuestro contacto y asegúrate de aparecer primero cuando la vida cambie en un suspiro.",
  },
  {
    id: "variante-3",
    title: "Variante 3",
    hook: "Tu homenaje debe estar listo antes de que el dolor toque tu puerta.",
    body:
      "Con Tributo Sereno tu familia recibe atención 24/7 en Puebla Sur, San Andrés Cholula, Lomas de Angelópolis y San José Chapulco. Nos ocupamos de la cremación completa y te obsequiamos velación con ambientación aromática, video conmemorativo profesional, impresión en cera de huella y nariz, certificado y obituario redactado. Diseñamos cada detalle para personas relajadas que buscan un adiós cálido, elegante y sin estrés cuando su cómplice de cuatro patas parte. Guárdanos hoy, agradece mañana.",
  },
  {
    id: "variante-4",
    title: "Variante 4",
    hook: "No dejes que la urgencia decida cómo despides a tu mejor amigo.",
    body:
      "Tributo Sereno está preparado para responder primero en Puebla Sur, San Andrés Cholula, Lomas de Angelópolis y San José Chapulco. Cubrimos la cremación completa y te obsequiamos una experiencia premium: velación con aromaterapia relajante, video profesional, huella y nariz en cera, certificado y obituario listo para compartir. Nuestro equipo especializado guía a familias C+, B y A que desean un adiós sereno, elegante y lleno de gratitud para su compañero más fiel. Guarda nuestro contacto hoy para recibir paz en el instante crítico.",
  },
  {
    id: "variante-5",
    title: "Variante 5",
    hook: "El tributo perfecto comienza antes de que llegue la despedida.",
    body:
      "Anticípate con Tributo Sereno, la funeraria para mascotas que lidera las búsquedas en Puebla Sur, Cholula, Lomas de Angelópolis y San José Chapulco. Nos encargamos de la cremación íntegra mientras recibes sin costo adicional un velorio íntimo, aromaterapia para armonizar, video homenaje, huella y nariz en cera, certificado y obituario pensado para compartir. Acompañamos a familias relajadas de niveles C+, B y A que desean rendir un honor memorable a su confidente peludo. Guarda este enlace y ábrelo cuando necesites consuelo inmediato.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="text-center space-y-4">
        <span className="badge">Tributo Sereno</span>
        <h1 className="section-title">Mensajes para reaccionar primero ante la despedida</h1>
        <p className="mx-auto max-w-3xl text-lg text-brand-slate/80">
          Cinco variaciones de copy diseñadas para captar a familias relajadas y de
          alto poder adquisitivo en Puebla que buscan un homenaje cálido y
          inmediato cuando su compañero peludo parte.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-2">
        {copies.map((copy) => (
          <article key={copy.id} className="copy-card">
            <h2>{copy.title}</h2>
            <p className="text-xl font-semibold text-brand-slate">{copy.hook}</p>
            <p>{copy.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
