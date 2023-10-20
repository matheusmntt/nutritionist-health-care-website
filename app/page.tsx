import ImageMain from '@/assets/images/Image.png'
import Avatar from '@/assets/images/Container.png'
import Image from 'next/image'

import { CardFeature } from '@/components/CardFeature'
import { CardBlog } from '@/components/CardBlog'
import { CardTestimonials } from '@/components/CardTestimonials'
import { CardPricing } from '@/components/CardPricing'

import { CardsFeaturesConfig } from '@/config/CardsFeaturesConfig'
import { CardsBlogConfig } from '@/config/CardsBlogConfig'
import { CardTestimonialsConfig } from '@/config/CardTestimonialsConfig'
import { CardPricingConfig } from '@/config/CardPricingConfig'

export default function Home() {
  return (
    <main className="grid gap-36">
      <section className="grid gap-12 grid-cols-2">
        <Image src={ImageMain} alt="image" width={949} height={832} />
        <div className="max-w-[48.0625rem] flex items-center">
          <div>
            <div className="grid gap-[.875rem]">
              <h2 className="text-[1.75rem] font-semibold text-darkGreen15 border-b-4 border-greenShade70 inline">
                Transform Your ❤️ Health with
              </h2>
              <h1 className="text-[3.625rem] font-bold text-darkGreen15">
                Personalized Nutrition Coaching
              </h1>
            </div>
            <p className="text-[1.125rem] mt-5 mb-[3.125rem]">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
            <div className="flex gap-5 mb-[4.375rem]">
              <a href="" className="px-5 py-4 rounded-lg bg-greenShade70">
                Get Starter Today
              </a>
              <a href="" className="px-6 py-4 rounded-lg bg-greenShade85">
                Book a Demo
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={Avatar} alt="Avatar Container" />
              <div className="flex gap-1">
                <span className="text-darkGreen40 font-semibold">430+</span>
                <span className="text-darkGreen20 font-semibold">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[10.125rem] grid gap-20">
        <div className="flex justify-center flex-col px-[18.75rem]">
          <h1 className="text-[3rem] font-bold mx-auto">Features</h1>
          <p className="text-[1.125rem] mx-auto">
            Welcome to the Feature Section of Nutritionist, your ultimate
            destination for all things nutrition and wellness.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {CardsFeaturesConfig.map((card) => (
            <CardFeature
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>

      <section className="mx-[10.125rem] grid gap-20">
        <div className="flex justify-center flex-col px-[18.75rem]">
          <h1 className="text-[3rem] font-bold mx-auto">Our Blogs</h1>
          <p className="text-[1.125rem] text-center mx-auto">
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here&apos;s what you can expect from our blog.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {CardsBlogConfig.map((card) => (
            <CardBlog
              key={card.title}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              avatar={card.avatar}
              name={card.name}
              date={card.date}
              readTime={card.readTime}
            />
          ))}
        </div>
      </section>

      <section className="mx-[10.125rem] grid gap-20">
        <div className="flex justify-center flex-col px-[18.75rem]">
          <h1 className="text-[3rem] font-bold mx-auto">Our Testimonials</h1>
          <p className="text-[1.125rem] text-center mx-auto">
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {CardTestimonialsConfig.map((card) => (
            <CardTestimonials
              key={card.name}
              comment={card.comment}
              avatar={card.avatar}
              name={card.name}
            />
          ))}
        </div>
      </section>

      <section className="mx-[10.125rem] grid gap-20">
        <div className="flex justify-center flex-col px-[18.75rem]">
          <h1 className="text-[3rem] font-bold mx-auto">Our Pricing</h1>
          <p className="text-[1.125rem] text-center mx-auto">
            We outline our flexible and affordable options to support you on
            your journey to optimal health and nutrition. We believe that
            everyone deserves access to personalized nutrition guidance and
            resources
          </p>
        </div>

        <div className="grid justify-center gap-4">
          <div className="p-3 border border-greenShade70 rounded-lg">
            <button className="px-6 py-3 rounded-md bg-darkGreen20 text-absoluteWhite">
              Monthly
            </button>
            <button className="px-6 py-3">Yearly</button>
          </div>
          <span className="text-center">Save 50% on Yearly</span>
        </div>

        <div className="grid grid-cols-3 gap-[1.875rem]">
          {CardPricingConfig.map((card) => (
            <CardPricing
              key={card.price}
              plan={card.plan}
              description={card.description}
              price={card.price}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
