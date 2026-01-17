import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/visas?limit=6")
      .then(res => res.json())
      .then(data => {
        // Use data directly if backend sends array
        // If wrapped: setVisas(data.data)
        setVisas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch visas:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-lg text-gray-700">
        Loading latest visas...
      </div>
    );
  }

  if (!visas.length) {
    return (
      <div className="py-20 text-center text-lg text-gray-700">
        No visas found.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Latest Visas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visas.map(visa => (
          <div
            key={visa._id}
            className="bg-gradient-to-tr from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                {visa.countryName}
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Visa Type:</span> {visa.visaType}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Processing Time:</span>{" "}
                {visa.processingTime}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Fee:</span> ${visa.fee}
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <span className="font-medium">Validity:</span> {visa.validity}
              </p>

              <Link
                to={`/visas/${visa._id}`}
                className="inline-block w-full text-center py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                See Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/visas"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          See All Visas
        </Link>
      </div>
    </section>
  );
};

export default LatestVisas;
