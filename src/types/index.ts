export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

/* Utility TYPES 
pick para escoger los atributos que necesitamos del type padre.
omit para quitar los atributos que no necesitamos del type padre.
*/
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

