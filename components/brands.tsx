'use client'

export function Brands() {
  const brands = ['Mindray', 'LG', 'Supratech', 'Quizen']
  const coverage = ['Ahmedabad', 'Gujarat', 'Pan-India Support']

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brands Supported */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                Brands Supported
              </h3>
              <p className="text-muted-foreground">
                We specialize in servicing leading biomedical equipment manufacturers
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg text-primary font-semibold hover:bg-primary/20 transition-colors"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Service Coverage */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                Service Coverage
              </h3>
              <p className="text-muted-foreground">
                Available across major cities and regions with 24×7 support
              </p>
            </div>
            <div className="space-y-3">
              {coverage.map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
