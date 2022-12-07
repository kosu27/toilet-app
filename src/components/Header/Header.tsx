import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="w-full bg-[#333333]">
      <div className="h-16 px-4 flex justify-between items-center">
        <p className="text-2xl font-bold text-white">Toilet App</p>
      </div>
    </header>
  )
}
