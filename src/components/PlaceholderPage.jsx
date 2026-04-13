export default function PlaceholderPage({ title, section }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {section && (
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-body">
          {section}
        </p>
      )}
      <h1 className="font-display font-bold text-4xl text-gray-900 mb-6">{title}</h1>
      <p className="text-gray-500 text-lg max-w-xl font-body">
        Cette page est un placeholder. Le contenu sera développé prochainement.
      </p>
    </div>
  );
}
