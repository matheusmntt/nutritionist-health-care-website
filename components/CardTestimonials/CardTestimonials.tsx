import { QuotationMarks } from '@/components/Icons'
import Image, { StaticImageData } from 'next/image'

type CardTestimonialsProps = {
  comment: string
  avatar: StaticImageData
  name: string
}

export const CardTestimonials = ({
  comment,
  avatar,
  name,
}: CardTestimonialsProps) => {
  return (
    <article>
      <div className="p-10">
        <div className="grid gap-12">
          <QuotationMarks />
          <p className="text-[1.125rem]">{comment}</p>
        </div>
      </div>

      <div className="px-10 py-8 bg-greenShade95 flex items-center gap-3">
        <Image
          src={avatar}
          alt="Avatar"
          width={60}
          height={60}
          className="object-cover"
        />
        <span className="text-[1.125rem] font-semibold">{name}</span>
      </div>
    </article>
  )
}
