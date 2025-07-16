document.addEventListener('DOMContentLoaded', function() {

  // ===================================================================
  // 1. BASE DE DATOS DE PRODUCTOS POR CATEGORÍA
  // ===================================================================

  const damasProducts = [
    { id: 101, name: 'Vestido "Primavera"', description: 'Vestido floral de seda, perfecto para eventos de día. Corte A-line que favorece todas las siluetas.', price: '120.000', image: 'vestido-primavera.jpg' },
    { id: 102, name: 'Blusa "Elegance"', description: 'Blusa de satén con cuello halter y lazo en la espalda. Un básico sofisticado para tu armario.', price: '175.000', image: 'blusa-elegance.jpg' },
    { id: 103, name: 'Vestido "Verano"', description: 'Vestido de satén con cuello halter y lazo en la espalda. Un básico sofisticado para tu armario.', price: '85.000', image: 'verano2.jpg' }
  ];

  const caballerosProducts = [
    { id: 201, name: 'Chaqueta "Urban"', description: 'Chaqueta de lino estilo bomber, ligera y versátil. Ideal para un look casual pero refinado.', price: '150.000', image: 'chaqueta-urban.jpg' },
    { id: 202, name: 'Camisa "Prestige"', description: 'Camisa de algodón egipcio con corte slim fit. Botones de nácar y un acabado impecable.', price: '95.000', image: 'camisa-prestige.jpg' },
    { id: 203, name: 'Camisa "Elegant"', description: 'Camisa de algodón  con corte slim fit. Botones de nácar y un acabado impecable, Mangas definidas ', price: '195.000', image: 'camisa-elegante.jpg' }
  ];

  const ninosProducts = [
    { id: 301, name: 'Conjunto "Aventura"', description: 'Divertido conjunto de camiseta y pantalón corto de algodón orgánico, resistente y cómodo para jugar.', price: '55.00', image: 'conjunto-aventura.jpg' },
    { id: 302, name: 'Conjunto "Aventura Niña"', description: 'Divertido conjunto de camiseta y pantalón corto de algodón orgánico, resistente y cómodo para jugar.', price: '55.00', image: 'aventura.jpg' }
  ];

  // ===================================================================
  // 2. FUNCIÓN REUTILIZABLE PARA RENDERIZAR PRODUCTOS
  // Esta función toma una lista de productos y el ID del contenedor donde debe ponerlos.
  // ===================================================================
  
  const modalsContainer = document.getElementById('modals-container');

  function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Si el contenedor no existe, no hace nada

    products.forEach(product => {
      // Crear la tarjeta del producto
      const cardHTML = `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="assets/images/${product.image}" class="card-img-top" alt="${product.name}" data-bs-toggle="modal" data-bs-target="#productModal${product.id}">
            <div class="card-body text-center">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text text-muted">$${product.price}</p>
            </div>
          </div>
        </div>
      `;
      
      // Crear el modal correspondiente
      const modalHTML = `
        <div class="modal fade" id="productModal${product.id}" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <h5 class="modal-title">${product.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/${product.image}" class="img-fluid" alt="${product.name}">
                  </div>
                  <div class="col-md-6 d-flex flex-column">
                    <p>${product.description}</p>
                    <h3 class="mt-auto text-end">$${product.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Inyectar el HTML en los contenedores
      container.innerHTML += cardHTML;
      modalsContainer.innerHTML += modalHTML;
    });
  }

  // ===================================================================
  // 3. LLAMAR A LA FUNCIÓN PARA CADA CATEGORÍA
  // ===================================================================
  renderProducts(damasProducts, 'damas-products-container');
  renderProducts(caballerosProducts, 'caballeros-products-container');
  renderProducts(ninosProducts, 'ninos-products-container');

});
