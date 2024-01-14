
import Image from "next/image"
import "./ProductID.scss"

export default async function ProductsId({ params }) {

    await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, 1000)
    })


    const id = params.id
    const response = await fetch(`https://dummyjson.com/products/${id}`,
        {
            next: {
                revalidate: 120,
            }
        })

    const data = await response.json()
    const gallry = data.images;
    return (
        <div className="all">
            <div className="title">
            <h1> {data.category} : {data.brand} </h1>
            </div>
            <div className="details">
                <div className="img">
                    <Image
                        src={data.thumbnail}
                        alt="Picture of the author"
                        width= {300}
                        height= {300}
                        className="img-phone"
                    />
                </div>

                <div className="brand">
                    <h1> {data.title}</h1>
                </div>
            </div>
            <div className="subDetails">
                <h3>Description : <span>{data.description}</span></h3>
                <h3>Price : <span>{data.price} $ </span></h3>
            </div>
            <div className="gallary">
                {gallry.map((item) => {
                    return (
                        <div>
                            <Image src={item} alt="Picture of the author"
                                width={200} height={150} className="gallary-img" />
                        </div>
                    )
                })}
            </div>
        </div>
    )

};
