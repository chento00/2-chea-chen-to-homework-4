import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import CardComponent from '@/components/CardComponent'
import { API_KEY,IMAGE_BASE_URL } from '@/lib'
const inter = Inter({ subsets: ['latin'] })

export default function Home({movies}) {
  console.log(movies)
  const data=movies?.results ||[];
  return (
    <>
      <div className='grid grid-cols-6 w-3/4 m-auto '>
        {
          data.length > 0 && data.map((item,index)=>(
            <
              CardComponent key={index}
              img={IMAGE_BASE_URL+item.backdrop_path}
              description={item.overview}
              title={item.title}
              id={item.id}
            />
          ))
        }
      </div>
    </>
  )
}
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res=await fetch(url);
  if(!res){
    console.log("error")
  }
  const movies=await res.json();
  return {
    props:{
			movies
		}
  }
}
