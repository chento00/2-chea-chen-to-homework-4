import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetail() {
	const router =useRouter();
  return (
	<div>
		<h1>Product Detail : </h1>
	  	<h1>{router.query.id}</h1>
	</div>
  )
}
  