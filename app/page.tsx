"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";
import { DM_Sans, Fraunces } from "next/font/google";

const titulo = Fraunces({ subsets: ["latin"], style: ["normal", "italic"] });
const cuerpo = DM_Sans({ subsets: ["latin"] });

/* ─────────── TODO EL TEXTO SE EDITA AQUÍ ─────────── */
const CONFIG = {
  edad: "20",
  tituloLinea1: "japi birdey",
  tituloLinea2: "Mili",
  hero: "puta no sabia cual de las 3 te gustaban asi que puse las 3",
  mensajeTitulo: "De yo para tu",
  mensaje: [
    "Soy malisimo para poner mensajes de este tipo, siempre pongo lo mismo a mis amigos y familiares, pero hey, almenos lo intento.",
    "Solo quiero desearte lo mejor, y lo mejor soy yo(eso lo copie de Romeo Santos).",
  ],
  felizTitulo: "Top 3 fotos, ya que no supe que poner de relleno",
  cosas: [
    { titulo: "Primer encuentro", texto: "la prueba del inicio de mi servicio aun no remunerado" },
    { titulo: "Marmaduke", texto: "Te veias guapa aca, tipo asi bien canina" },
    { titulo: "Me dio risa", texto: "y ya" },
  ],
  fotos: [
    { src: "/lirio-roja.jpg", alt: "Lirio araña rojo con gotas de lluvia" },
    { src: "/lirio-blanca.jpg", alt: "Lirio araña blanco de pétalos largos" },
    { src: "/lirio-rosada.jpg", alt: "Flores rosadas tipo lirio araña" },
  ],
  fotos2: [
    { src: "/terapia.jpg", alt: "Lirio araña rojo con gotas de lluvia" },
    { src: "/scubyduh.jpg", alt: "Lirio araña blanco de pétalos largos" },
    { src: "/aaa.jpg", alt: "Flores rosadas tipo lirio araña" },
  ],
  sorpresaTitulo: "One last thing",
  sorpresaBoton: "Abrir sorpresa",
  sorpresaOtraVez: "Otra vez 🎉",
  sorpresaMensaje: "que te follen💚",
  firma: "Con cariño, ",
  firmante: "Jor",
};

const COLORES = ["#14532D", "#10B981", "#A7F3D0", "#E11D48", "#F9A8D4", "#FFFFFF"];

/* ─────────── Piezas pequeñas ─────────── */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Flor({ src, alt, className, delay, dur }: { src: string; alt: string; className: string; delay: number; dur: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute overflow-hidden rounded-full shadow-xl ring-4 ring-white/80 ${className}`}
      animate={reduce ? undefined : { y: [0, -14, 0], rotate: [-3, 3, -3] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 192px, 112px" className="object-cover" priority />
    </motion.div>
  );
}

/* ─────────── Página ─────────── */
export default function Page() {
  const [abierta, setAbierta] = useState(false);

  const lanzarConfeti = () => {
    const base = { colors: COLORES, disableForReducedMotion: true };
    confetti({ ...base, particleCount: 120, spread: 80, origin: { y: 0.7 } });
    setTimeout(() => confetti({ ...base, particleCount: 80, angle: 60, spread: 60, origin: { x: 0, y: 0.8 } }), 200);
    setTimeout(() => confetti({ ...base, particleCount: 80, angle: 120, spread: 60, origin: { x: 1, y: 0.8 } }), 350);
  };

  const abrir = () => {
    setAbierta(true);
    lanzarConfeti();
  };

  return (
    <main className={`${cuerpo.className} overflow-x-clip bg-[#FBF7EC] text-[#1c3a2a]`}>
      {/* 1. HERO */}
      <section className="relative flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D7EBDD] blur-3xl md:size-[40rem]" />

        <div className="relative w-fit">
          <span
            className={`${titulo.className} block select-none text-[length:min(62vw,26rem)] font-extrabold leading-[0.85] text-[#14532D]`}
            style={{ textShadow: "0.04em 0.04em 0 #A7F3D0" }}
          >
            {CONFIG.edad}
          </span>
          <Flor src={CONFIG.fotos[0].src} alt={CONFIG.fotos[0].alt} className="-left-10 top-4 size-24 md:-left-36 md:size-44" delay={0} dur={5} />
          <Flor src={CONFIG.fotos[1].src} alt={CONFIG.fotos[1].alt} className="-right-8 top-0 size-20 md:-right-28 md:size-36" delay={0.8} dur={6} />
          <Flor src={CONFIG.fotos[2].src} alt={CONFIG.fotos[2].alt} className="-right-4 bottom-2 size-28 md:-right-40 md:size-48" delay={1.6} dur={5.5} />
        </div>

        <h1 className={`${titulo.className} relative mt-6 text-5xl font-semibold leading-tight text-[#14532D] md:text-7xl`}>
          <span className="italic">{CONFIG.tituloLinea1}</span>{" "}
          <span className="text-[#059669]">{CONFIG.tituloLinea2}</span>
        </h1>
        <p className="relative mt-3 text-lg text-[#1c3a2a]/70 md:text-xl">{CONFIG.hero}</p>
      </section>

      {/* 2. MENSAJE */}
      <section className="px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-12 text-center shadow-[0_10px_40px_-15px_rgba(20,83,45,0.25)] md:px-16 md:py-16">
          <h2 className={`${titulo.className} text-3xl font-semibold text-[#14532D] md:text-4xl`}>{CONFIG.mensajeTitulo}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#1c3a2a]/80">
            {CONFIG.mensaje.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3. COSAS QUE TE HACEN FELIZ */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className={`${titulo.className} text-center text-3xl font-semibold text-[#14532D] md:text-5xl`}>{CONFIG.felizTitulo}</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CONFIG.cosas.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-[#D7EBDD] p-8 text-center transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="text-5xl">{c.emoji}</div>
                  <h3 className={`${titulo.className} mt-4 text-2xl font-semibold text-[#14532D]`}>{c.titulo}</h3>
                  <p className="mt-2 text-[#1c3a2a]/75">{c.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 md:gap-5">
            {CONFIG.fotos2.map((f, i) => (
              <Reveal key={f.src} delay={i * 0.1}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    
      <section className="px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-[#14532D] px-8 py-14 text-center text-[#FBF7EC] md:px-16 md:py-20">
          <h2 className={`${titulo.className} text-3xl font-semibold md:text-5xl`}>{CONFIG.sorpresaTitulo}</h2>

          <button
            onClick={abrir}
            className="mt-8 w-full rounded-full bg-[#FBF7EC] px-8 py-4 text-lg font-semibold text-[#14532D] transition duration-200 hover:-translate-y-0.5 hover:bg-white active:translate-y-0 active:scale-95 sm:w-auto"
          >
            {abierta ? CONFIG.sorpresaOtraVez : CONFIG.sorpresaBoton}
          </button>

          <AnimatePresence>
            {abierta && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mt-10 max-w-xl"
              >
                <p className={`${titulo.className} text-2xl italic leading-snug md:text-3xl`}>
                  {CONFIG.sorpresaMensaje}
                </p>
                <Image
                  src="/qtd.jpg"
                  alt="Foto sorpresa"
                  width={800}
                  height={600}
                  className="mx-auto mt-8 h-auto w-full max-w-md rounded-2xl shadow-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </section>

      
      <footer className="px-6 pb-14 pt-6 text-center">
        <p className={`${titulo.className} text-xl italic text-[#14532D]`}>
          {CONFIG.firma}
          <span className="font-semibold not-italic">{CONFIG.firmante}</span>
        </p>
      </footer>
    </main>
  );
}