import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BASE_URL,API_KEY,IMAGE_BASE_URL } from '@/lib';
export default function MovieDetail() {
	const route=useRouter();
	const [id,setID]=useState(route.query.id);
	const [data,setData]=useState([]);
	const [link,setLnk]=useState();
	// fetch linkYoutube
	useEffect(()=>{
		fetch(BASE_URL+`/movie/${id}/videos?api_key=${API_KEY}`).then(res=>res.json()).then(respone=>{
			const result=respone.results;
			console.log(result); 
			setLnk(result[0].key);
		})
		fetch(BASE_URL+`/movie/${id}?api_key=${API_KEY}`).then(res=>res.json()).then(respone=>{setData(respone)})
	},[id])
	const [isOpen, setIsOpen] = useState(false);
	function openPopup() {
		setIsOpen(true);
	}
	function closePopup() {
		setIsOpen(false);
	}
	return (
		<>
			<h1 className='w-3/4 m-auto text-3xl font-bold mt-4'>Movie Detail : </h1>
			<div className='container w-3/4 h-4/6 m-auto flex mt-5'>
				<img className='w-80 bg-black h-3/5 border' 
					src={IMAGE_BASE_URL+data.backdrop_path}
				/>
				<div className='w-3/6  h-full ml-8'>
					<h2 className="text-4xl font-extrabold dark:text-black mb-5">{data.original_title}</h2>
					<p className='mb-8'>overview</p>
					<article>
						{data.overview}
					</article>
					<button type="button" onClick={openPopup} className="mt-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Watch Video</button>	
						
				</div>
			</div>
			{isOpen?<div onClick={closePopup} className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col' style={{backgroundColor:" rgba(0, 0, 0, 0.333)"}}>
				<button onClick={closePopup} type="button" style={{marginLeft:"700px"}} className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">X</button>
				<iframe 
							width="760" 
							height="515" 
							src={`https://www.youtube.com/embed/${link}`} 
							title="YouTube video player" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							allowfullscreen>
				</iframe>	
			</div>:""}
		</>
	)
}
