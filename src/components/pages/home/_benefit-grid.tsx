type FeatureType = {
  name: string;
  description: string;
  icon: Function;
}

type BenefitGridType = {
  features: FeatureType[];
}

export default function BenefitGrid({features}: BenefitGridType) {
  return <div className="relative py-16 bg-white sm:py-24 lg:py-32">
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider uppercase text-cyan-600">
        Short Link Benefit
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Everything you get from shortening your url
      </p>
      <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
        What you get is more than you think.
      </p>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600">
                      <feature.icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}