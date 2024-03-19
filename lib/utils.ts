import { type ClassValue, clsx } from "clsx"
import { ReadonlyURLSearchParams } from "next/navigation"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function createUrl(pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export function handleSearchParams (searchParams:URLSearchParams | ReadonlyURLSearchParams,name: string, value: string | null) {
  const newParams = new URLSearchParams(searchParams.toString())
  if (value === null) { newParams.delete(name) }
  if (typeof value === 'string') { newParams.set(name, value) }
  return newParams
}

export function slugify(str: string) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

export function formatDate(input: string | number | Date): string {
  const date = input instanceof Date ? input : new Date(input)
  return date.toLocaleDateString("es-ES", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}