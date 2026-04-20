const PARTNERS = ["French Tech", "French Care", "Biovalley", "Nextmed", "Futur4Care"];

export default function Partners() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-6">
          Nos partenaires
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-5 py-2 rounded-full"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
