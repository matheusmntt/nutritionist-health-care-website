import { FC } from 'react'

type CardProps = {
  icon: React.ReactNode
  title: string
  text: string
}

export const CardFeature: FC<CardProps> = ({ icon, title, text }) => {
  return (
    <article className="px-[3.125rem] py-[2.5rem] bg-greenShade95 space-y-6 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="bg-greenShade70 p-3 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="flex-1 text-2xl">{title}</h3>
      </div>

      <p className="text-[1.125rem]">{text}</p>
    </article>
  )
}
