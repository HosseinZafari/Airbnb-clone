import Image from 'next/image'

function MediumCard({title , img}) {


    return (
        <div className="cursor-pointer hover:z-50 hover:scale-105 ease-out transform transition duration-200" >
            <div className="relative h-80 w-80">
                <Image 
                    layout="fill"
                    src={img}
                    className="rounded-xl" />
            </div>

            <h3 className="mt-3 text-2xl">{title}</h3>
        </div>
    )
}

export default MediumCard
