import Image, { StaticImageData } from 'next/image'
import { Bookmark, Heart } from '../Icons'

type CardBlogProps = {
  image: StaticImageData
  category: string
  title: string
  description: string
  avatar: StaticImageData
  name: string
  date: string
  readTime: string
}

export const CardBlog = ({
  image,
  category,
  title,
  description,
  avatar,
  name,
  date,
  readTime,
}: CardBlogProps) => {
  return (
    <article className="p-10 bg-greenShade95">
      <Image
        src={image}
        alt="Image"
        height={428}
        width={1000}
        className="mb-10"
      />
      <div className="grid gap-7">
        <div className="grid">
          <span className="text-[1.125rem]">{category}</span>
          <h1 className="text-[1.625rem] font-semibold">{title}</h1>
        </div>

        <p className="text-[1.125rem]">{description}</p>

        <div className="p-5 bg-greenShade97 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={avatar}
              alt="Avatar"
              width={60}
              height={60}
              className="object-cover"
            />

            <div>
              <span>{name}</span>
              <div>
                <span>{date}</span> - <span>{readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg">
            <div className="bg-greenShade95 p-4 flex">
              <Heart />
            </div>
            <div className="bg-greenShade95 p-4 flex">
              <Bookmark />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
