import './App.css'

function Liste_product(props) {
  const products = props.products;

    return (
<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <a href={product.href}>
              <div className="w-full overflow-hidden bg-gray-200">
                <img
                  src={product.imageSrc}
                />
              </div>
              <div className="mt-4 flex-auto justify-between">
                <div>
                  <h3 className="text-sm">
                    {product.name}                  
                  </h3>
                  <p className="mt-1 text-sm">{product.color}</p>
                  <p className="text-lg font-medium">{product.price}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
    )
}
export default Liste_product;