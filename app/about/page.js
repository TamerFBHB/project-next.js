'use client'
import { useEffect, useState } from 'react';
import './About.scss'
import Image from 'next/image'
import axios from 'axios';
import Link from 'next/link';


export default function About() {

    const [post, setPost] = useState([])
    const [error, setError] = useState(null)  // to apeare message error

    async function getAllPosts() {
        try {
            const { data } = await axios.get("https://dummyjson.com/products");
            setPost(data.products)
            setArr(data.products)
        } catch (error) {
            setError(error.message) // to apeare message error
        }
    }
    useEffect(() => {
        getAllPosts();
    }, []);

    //to make filter to category
    const [arr, setArr] = useState(post)
    console.log(arr)

    //to change color of buttons
    const [color, setColor] = useState("allpost")

    const handleClick = (myItem) => {
        const newData = post.filter((item) => {
            return item.category === myItem;
        })
        setArr(newData)
    }
    
    return (

        <div className='about'>
            <div className='products'>
                <ul>
                    <li onClick={() => { setArr(post), setColor("allpost") }}
                        className={` allposts  ${color === "allpost" ? "active" : "null"}`}>all</li>

                    <li onClick={() => { handleClick("home-decoration"), setColor("decoration") }}
                        className={`${color === "decoration" ? "active" : "null"}`}>decoration</li>

                    <li onClick={() => { handleClick("groceries"), setColor("groceries") }}
                        className={`${color === "groceries" ? "active" : "null"}`}>groceries</li>

                    <li onClick={() => { handleClick("skincare"), setColor("skincare") }}
                        className={`${color === "skincare" ? "active" : "null"}`}>skincare</li>

                    <li onClick={() => { handleClick("fragrances"), setColor("fragrances") }}
                        className={`${color === "fragrances" ? "active" : "null"}`}>fragrances</li>

                    <li onClick={() => { handleClick("laptops"), setColor("laptops") }}
                        className={`${color === "laptops" ? "active" : "null"}`}>laptops</li>

                    <li onClick={() => { handleClick("smartphones"), setColor("smartphones") }}
                        className={`${color === "smartphones" ? "active" : "null"}`}>smartphones</li>
                </ul>
                <div className='cards'>
                    {error == null ? ( arr.map((item) => {
                        return (
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
                    })) : (<h1>Request failed with status code 404 </h1>)}
                </div>
            </div>
        </div>
    )
};
