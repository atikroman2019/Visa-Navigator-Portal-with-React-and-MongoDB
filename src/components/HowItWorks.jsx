const HowItWorks = () => {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-lg">1. Explore Visas</h3>
          <p>Browse visa options by country and type.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">2. Apply Online</h3>
          <p>Submit your application securely.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">3. Track Status</h3>
          <p>Stay updated until approval.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
