'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-24 px-4 md:px-10 text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Bem-vindo à sua jornada de aprendizado!
      </h2>
      <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4">
        Descubra cursos, materiais e recursos incríveis para impulsionar sua carreira em tecnologia.
      </p>
    </section>
  );
}
