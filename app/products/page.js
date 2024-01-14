
import Link from 'next/link'
import './Products.scss'
import Image from 'next/image'

export default async function Products() {

    const response = await fetch("https://dummyjson.com/products",
        {
            next: {
                revalidate: 120,
            }
        }
    )
    const posts = await response.json()
    const post = posts.products;
    return (
        <div className='products'>

            <div className='cards'>
                {post.map((item) => {
                    return (
                        // to send id number to page id to apear details of post
                        <Link href={`/products/${item.id}`}>  
                            <div className='card'>
                                <div>
                                    <Image
                                        src={item.thumbnail}
                                        alt="Picture of the author"
                                        width={220}
                                        height={200}
                                        className='img'
                                    />
                                </div>
                                <div className='body-card'>
                                    <h5>brand : {item.brand}  </h5>
                                    <h5>price : {item.price} $ </h5>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};
