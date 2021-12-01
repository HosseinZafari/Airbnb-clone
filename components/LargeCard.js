import Image from 'next/image'

function LargeCard({img , title , buttonText , desc}) {
    return (
        <section className="relative py-2 cursor-pointer my-2"> 
            <div className="relative h-96 min-w-[300px]">
                <Image layout="fill"  
                        objectFit="cover"
                        src={img}
                        className="rounded-xl"
                />
            </div>  

            <div className={'absolute top-32 left-12 text-center'}>
                <h3 className="mb-3 text-3xl w-640 ">{title}</h3>
                <p>{desc}</p>
                <button className="outline-none active:scale-95 transform transition shadow-2xl duration-100 text-white bg-gray-900 text-sm px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
