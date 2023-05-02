import React from 'react'
import NavBar from '@/components/NavBar'

export default function AboutUs({data}) {
	console.log(data)
	return (
		<div className='w-3/4 m-auto'>
			<p className='text-4xl font-bold'>Product Collection - about </p>
			<div className='grid grid-cols-5 mt-12'>
			{
				data.map((item,index)=>(
					<div key={index} className=''>
						<div class="w-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<img className="rounded-t-lg h-60 w-full" src={item.image} alt="" />
							</a>
							<p class="mb-2 ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
							<div class="p-5">
								<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
							</div>
						</div>
					</div>
				))
			}
			</div>
		</div>
	)
}
export async function getStaticProps(){
	const data=[
		{
			id:1,
			name:"Rose - 1",
			image:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSjP11Xb3tnaoHpz_p9G419MyqSFy3yT_OCSBQopmIj5uf95TdlfIvKxakEQH1jZuveQvRpHt8hl684jM",
			description:"Roseanne Park (born 11 February 1997), known mononymously as Rosé (Korean: 로제), is a Korean-New Zealand singer and dancer based in South Korea."
		},
		{
			id:2,
			name:"Rose - 2",
			image:"https://yaay.today/__export/1625235774603/sites/yaay/img/2021/07/02/blackpink-rose-went-to-book-store-to-find-her-dazed-magazine_1.jpg_2062789929.jpg",
			description:"Roseanne Park (born 11 February 1997), known mononymously as Rosé (Korean: 로제), is a Korean-New Zealand singer and dancer based in South Korea."
		},
		{
			id:3,
			name:"Rose - 3",
			image:"https://assets.nst.com.my/images/articles/olsbprosgso001a_1567499678.jpg",
			description:"Roseanne Park (born 11 February 1997), known mononymously as Rosé (Korean: 로제), is a Korean-New Zealand singer and dancer based in South Korea."
		},
		{
			id:4,
			name:"Rose - 4",
			image:"https://kpopping.com/documents/24/0/800/230108-BLACKPINK-Rose-documents-1.jpeg?v=9270a",
			description:"Roseanne Park (born 11 February 1997), known mononymously as Rosé (Korean: 로제), is a Korean-New Zealand singer and dancer based in South Korea."
		},
		{
			id:5,
			name:"Rose - 5",
			image:"https://wwd.com/wp-content/uploads/2023/03/GettyImages-1027688840-e1679602025642.jpg?w=683",
			description:"Roseanne Park (born 11 February 1997), known mononymously as Rosé (Korean: 로제), is a Korean-New Zealand singer and dancer based in South Korea."
		}
	];
	return {
		props:{
			data
		}
	}
}
