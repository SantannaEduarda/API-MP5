export default function MaterialCard({ material }: { material: Material }) {
  return (
    <a
      href={material.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 block hover:bg-indigo-50 flex flex-col justify-between min-h-[200px]"
    >
      <div>
        <h3 className="text-lg font-bold text-indigo-700">{material.title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {material.type} • {material.language}
        </p>
      </div>
      <div className="text-sm text-gray-500 mt-4">📂 {material.category}</div>
    </a>
  );
}
