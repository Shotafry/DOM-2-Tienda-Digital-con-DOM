const products = [
  {
    name: 'The Legend of Zelda: Breath of the Wild',
    price: 59.99,
    stars: 5,
    reviews: 3200,
    seller: 'Nintendo',
    image:
      'https://www.mobygames.com/images/covers/l/384053-the-legend-of-zelda-breath-of-the-wild-limited-edition-nintendo-switch-front-cover.jpg'
  },
  {
    name: 'The Legend of Zelda: Ocarina of Time',
    price: 19.99,
    stars: 5,
    reviews: 1500,
    seller: 'Nintendo',
    image:
      'https://sm.ign.com/t/ign_fr/comics/t/the-legend/the-legend-of-zelda-ocarina-of-time-perfect-edition_mvdh.1200.jpg'
  },
  {
    name: 'The Legend of Zelda: Twilight Princess',
    price: 29.99,
    stars: 4.5,
    reviews: 2000,
    seller: 'Nintendo',
    image:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974702268/the-legend-of-zelda-twilight-princess-vol-4-9781974702268_hr.jpg'
  },
  {
    name: 'The Legend of Zelda: Skyward Sword',
    price: 49.99,
    stars: 4,
    reviews: 1700,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/R.2db3d80f3d211d31e78bfada37a9c459?rik=LrDYEao4sUIJNQ&pid=ImgRaw&r=0'
  },
  {
    name: 'The Legend of Zelda: Wind Waker',
    price: 39.99,
    stars: 4.5,
    reviews: 2500,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/OIP.gSSqUchAxnI0rRZpMLlr4AHaKl?rs=1&pid=ImgDetMain'
  },
  {
    name: "The Legend of Zelda: Majora's Mask",
    price: 19.99,
    stars: 4.5,
    reviews: 1400,
    seller: 'Nintendo',
    image:
      'https://exlibris.azureedge.net/covers/4033/7056/8766/1/4033705687661xxl.jpg'
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    price: 59.99,
    stars: 4,
    reviews: 1300,
    seller: 'Nintendo',
    image:
      'https://media.gamestop.com/i/gamestop/10173745/The-Legend-of-Zelda-Links-Awakening'
  },
  {
    name: 'The Legend of Zelda: A Link to the Past',
    price: 9.99,
    stars: 5,
    reviews: 1800,
    seller: 'Nintendo',
    image:
      'https://th.bing.com/th/id/OIP.CQMPna263w1EWiF6aHBy9wHaJp?rs=1&pid=ImgDetMain'
  },
  {
    name: 'The Legend of Zelda: Hyrule Warriors',
    price: 59.99,
    stars: 4,
    reviews: 1600,
    seller: 'Nintendo',
    image:
      'https://images.nintendolife.com/08a2e51c16eaf/hyrule-warriors-definitive-edition-cover.cover_large.jpg'
  },
  {
    name: 'The Legend of Zelda: Triforce Heroes',
    price: 19.99,
    stars: 3.5,
    reviews: 1100,
    seller: 'Nintendo',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91xKPbM%2BDfL.jpg'
  }
]

const listaProductos = document.getElementById('lista-productos')

function displayProducts(productList) {
  listaProductos.innerHTML = ''
  productList.forEach((product) => {
    const productElement = document.createElement('li')
    productElement.classList.add('producto')
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Precio: €${product.price}</p>
          <p>Valoración: ${product.stars} estrellas</p>
          <p>Opiniones: ${product.reviews}</p>
          <p>Vendedor: ${product.seller}</p>
      `
    listaProductos.appendChild(productElement)
  })
}

function filterProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  )
}

document.getElementById('filtrar-precio').addEventListener('click', () => {
  const minPrice = parseFloat(document.getElementById('precio-min').value) || 0
  const maxPrice =
    parseFloat(document.getElementById('precio-max').value) || Infinity
  const filteredProducts = filterProductsByPrice(minPrice, maxPrice)
  displayProducts(filteredProducts)
})

displayProducts(products)
