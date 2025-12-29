import {Link} from "react-router-dom";

type Product = {
    id : string | number,
    title: string,
    price : string,
    status : 'Active' | 'Offline',
    image : string
}

function PopularProducts(){

    const popularProducts : Array<Product> = [
        {
            id : 1 , title : 'Crypter - NFT UI Kit' , price : '3,250.00' , status : 'Active' , image : 'product-1.jpg'
        },
        {
            id : 2 , title : 'Bento Pro 2.0 Illustrations' , price : '7,890.00' , status : 'Active' , image : 'product-2.jpg'
        },
        {
            id : 3 , title : 'Fleet - travel shopping kit' , price : '1,500.00' , status : 'Offline' , image : 'product-3.jpg'
        },
        {
            id : 4 , title : 'SimpleSocial UI Design Kit' , price : '9,999.99' , status : 'Active' , image : 'product-4.jpg'
        },
        {
            id : 5 , title : 'SimpleSocial UI Design Kit' , price : '4,750.00' , status : 'Active' , image : 'product-5.jpg'
        },
    ];

    return(
        <section className="w-full flex flex-col gap-5 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">
            <header>
                <h2 className="text-[20px] font-semibold dark:text-white px-3">Popular products</h2>
            </header>
            <ul className="w-full flex flex-col gap-1">
                { popularProducts.map( product => (
                    <li key={`popular-product-${product.id}`} className="p-3 rounded-[20px] hover">
                        <article className="w-full flex justify-between items-center gap-8">
                            <div className="flex items-center gap-5">
                                <img src={`images/products/${product.image}`} alt={product.title} loading="lazy" className="min-w-16 min-h-16 max-w-16 max-h-16 rounded-xl"/>
                                <h3 className="font-semibold dark:text-white">{product.title}</h3>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <p className="font-semibold dark:text-white">${product.price}</p>
                                <span className={`${product.status.toLowerCase()}-badge`}>{product.status}</span>
                            </div>
                        </article>
                    </li>
                ) ) }
            </ul>

            <Link to="#" className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-4 text-sm text-center font-semibold text-teritary my-1">All products</Link>
        </section>
    )

}
export default PopularProducts;