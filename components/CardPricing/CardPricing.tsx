type CardPricingProps = {
  plan: string
  description: string
  price: string
}

export const CardPricing = ({ plan, description, price }: CardPricingProps) => {
  return (
    <article className="p-[3.125rem] bg-greenShade95 grid gap-10 rounded-xl">
      <div>
        <h1 className="text-[1.875rem] font-semibold">{plan}</h1>
        <span className="text-[1.125rem]">Up to 50% off on Yearly Plan</span>
      </div>
      <div>
        <p className="text-[1.125rem]"> {description}</p>
      </div>
      <div className="grid gap-8">
        <div className="flex items-center">
          <span className="text-[3.125rem] font-bold text-darkGreen20">
            ${price}
          </span>
          <span className="text-[1.125rem]">/month</span>
        </div>
        <button className="px-10 py-4 bg-greenShade70 w-full rounded-lg font-semibold text-[1.125rem]">
          Choose Plan
        </button>
      </div>
    </article>
  )
}
