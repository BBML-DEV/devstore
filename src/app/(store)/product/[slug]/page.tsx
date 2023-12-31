import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span
            className={twMerge(
              'flex items-center py-[10px] px-5',
              ' justify-center rounded-full bg-violet-500',
            )}
          >
            R$129
          </span>
          <span className="text-zinc-400 text-sm font-normal">
            Em 12x s/ juros de R$10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              type="button"
              className={twMerge(
                'flex h-9 w-14 items-center justify-center',
                'rounded-full border border-zinc-700 bg-zinc-800',
              )}
            >
              P
            </button>
            <button
              type="button"
              className={twMerge(
                'flex h-9 w-14 items-center justify-center',
                'rounded-full border border-zinc-700 bg-zinc-800',
              )}
            >
              M
            </button>
            <button
              type="button"
              className={twMerge(
                'flex h-9 w-14 items-center justify-center',
                'rounded-full border border-zinc-700 bg-zinc-800',
              )}
            >
              G
            </button>
            <button
              type="button"
              className={twMerge(
                'flex h-9 w-14 items-center justify-center',
                'rounded-full border border-zinc-700 bg-zinc-800',
              )}
            >
              GG
            </button>
          </div>
        </div>

        <button
          className={twMerge(
            'flex flex-row items-center mt-8',
            'h-12 justify-center rounded-full bg-emerald-500',
            'cursor-pointer leading-4 font-semibold',
          )}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
