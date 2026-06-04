/**
 * Container — enveloppe de mise en page responsive
 *
 * Gère les marges latérales et la largeur max selon CLAUDE.md :
 *   Mobile  (< 480px)  : px-5  → 20px latéraux
 *   Tablet  (≥ 768px)  : px-6  → 24px latéraux
 *   Desktop (≥ 992px)  : max-w-7xl centré
 *
 * Usage :
 *   <Container>...</Container>
 *   <Container className="py-24">...</Container>
 *   <Container narrow>...</Container>   → max-w-3xl (prose / hero centré)
 *   <Container wide>...</Container>     → max-w-screen-2xl (pleine largeur)
 */
export default function Container({ children, className = "", narrow = false, wide = false }) {
  const maxW = narrow ? "max-w-3xl" : wide ? "max-w-screen-2xl" : "max-w-7xl";

  return (
    <div className={`w-full mx-auto px-5 md:px-6 ${maxW} ${className}`}>
      {children}
    </div>
  );
}
