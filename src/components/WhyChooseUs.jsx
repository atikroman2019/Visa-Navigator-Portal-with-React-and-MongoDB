const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Visa Navigator?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Verified Information</h3>
            <p>Accurate visa requirements sourced from trusted authorities.</p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Easy Applications</h3>
            <p>Apply online without paperwork or confusion.</p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Application Tracking</h3>
            <p>Track your visa application status in real time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
