import React from 'react'
import {useRouter} from 'next/router';
export default function CardComponent({title,description,url,img,id }) {
	const router=useRouter();
	const handleClick=()=>{
		router.push(`/movie/${id}`);
	}
	return (
		<>
			<div onClick={handleClick} class="hover:pointer-events-auto m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img  class="rounded-t-lg h-72 w-full" src={img?img:"https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="} alt="" />
				</a>
				<div class="p-5">
					<a href="#">
						<h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Title  : {title?title:"Title"}</h5>
					</a>
					<p class="mb-3 line-clamp-5 h-12 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{description?description:"description is empty"}</p>
				</div>
			</div>
		</>
	)
}
