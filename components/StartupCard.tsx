import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const StartupCard = ({post}: { post: StartupTypeCard}) => {
    const { _createdAt, views, author:{id: authorId, name}, title, category, _id, image, description } = post;

  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                <p className='text-16-medium line-clamp-1'>{name}</p>
                </Link>
                <Link href={`/learn/${_id}`} >
                <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <Image src= "https://placehold.co/48x48" alt= "placeholder" width={48} height={48} className='rounded-full'/>
             </Link>
        </div>
        <Link href={`/learn/${_id}`}>
  <p className="startup-card_desc">{description}</p>
  <Image
    src={image}
    alt="placeholder"
    width={400} 
    height={500} 
    className="startup-card_img"
    priority // Optional: Ensures faster loading for critical images
  />
</Link>

    <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category.toLowerCase()}`}>
            <p className='text-16-medium'>
                {category}
            </p>
        </Link>
        <Button className='startup-card_btn' asChild>
            <Link href={`/learn/${_id}`}>
                Learn
            </Link>
        </Button>
    </div>
    </li>
  )
}

export default StartupCard