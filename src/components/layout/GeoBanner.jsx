export default function GeoBanner() {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 py-2 px-6 flex items-center justify-center relative">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
        <p className="text-xs text-gray-700">
          Un MédicoBus intervient en Alsace pour de la cardiologie.
        </p>
      </div>
      <button
        type="button"
        className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors text-base leading-none cursor-pointer select-none"
        aria-label="Fermer"
      >
        ×
      </button>
    </div>
  );
}
