// car transmission type
export type Transmission = 'Auto' | 'Mécanique'

// car motor fuel type
export type Motor = 'Diesel' | 'Essence' | 'Hybride' | 'Électrique'

// car
export type Car = {
  id: number
  model: string
  brand: string
  year: number
  price: number
  transmission: Transmission
  drove_distance: number
  motor: Motor
  location: string
  department: number
  options: Array<string>
  pictures: Array<string>
}

// a car aspect like brand or model
export type CarAspect = {
  name: string
  value: string | number | Array<string>
}
