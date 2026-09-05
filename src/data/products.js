const products = [
    {
		id: 1,
		name: "Body My Little Monster",
		price: 25000,
		image: "src/images/Baby-Clothes01.jpg",
		description: "Body confeccionado con jersey peinado 24.1 en colores rosa, amarillo, azul. Con estampado en DFT.",
		size: "0, 1, 2, 3",
	},
	{
		id: 2,
		name: "Ranita Strawberry",
		price: 20000,
		image: "src/images/Baby-Clothes02.jpg",
		description: "Ranita confeccionado con jersey estampado peinado 24.1 en color amarillo.",
		size: "0, 1, 2, 3",
	},
	{
		id: 3,
		name: "Jardinero Denim",
		price: 60000,
		image: "src/images/Baby-Clothes03.jpg",
		description: "Jardinero confeccionado con Denim y broches en color azul indigo.",
		size: "0, 1, 2, 3",
	},
	{
		id: 4,
		name: "Mameluco My Little Kid",
		price: 15000,
		image: "src/images/Baby-Clothes04.jpg",
		description: "Mameluco confeccionado con jersey estampado peinado 24.1 en color amarillo, rosa, azul.",
		size: "0, 1, 2, 3",
	},
	{
		id: 5,
		name: "Ranita Strawberry",
		price: 20000,
		image: "src/images/Baby-Clothes01.jpg",
		description: "Ranita confeccionado con jersey estampado peinado 24.1 en color amarillo.",
		size: "0, 1, 2, 3",
	},
	{
		id: 6,
		name: "Mameluco My Little Kid",
		price: 15000,
		image: "src/images/Baby-Clothes02.jpg",
		description: "Mameluco confeccionado con jersey estampado peinado 24.1 en color amarillo, rosa, azul.",
		size: "0, 1, 2, 3",
	},
	{
		id: 7,
		name: "Body My Little Monster",
		price: 25000,
		image: "src/images/Baby-Clothes03.jpg",
		description: "Body confeccionado con jersey peinado 24.1 en colores rosa, amarillo, azul. Con estampado en DFT.",
		size: "0, 1, 2, 3",
	},
	{
		id: 8,
		name: "Jardinero Denim",
		price: 60000,
		image: "src/images/Baby-Clothes04.jpg",
		description: "Jardinero confeccionado con Denim y broches en color azul indigo.",
		size: "0, 1, 2, 3",
	},
	{
		id: 9,
		name: "Body My Little Monster",
		price: 25000,
		image: "src/images/Baby-Clothes01.jpg",
		description: "Body confeccionado con jersey peinado 24.1 en colores rosa, amarillo, azul. Con estampado en DFT.",
		size: "0, 1, 2, 3",
	}
]

export function getProducts() {
	return products;
}

export function getProductById(id) {
	return products.find((p) => p.id === Number(id));
}