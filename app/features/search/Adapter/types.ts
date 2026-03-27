export interface Pokemon {
  id: string
  name: string
  image: string
}
export interface Item {
  id: string
  name: string
  image: string
}

export interface ApiConfig {
  url: string
  timeout: number
}