import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute  top-1/2  w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go ? Perfect!!</p>
                <button className="text-purple-600 bg-white px-8 py-3 rounded-full font-bold shadow-md my-3 hover:shadow-xl transition-all duration-150 outline-none active:scale-90">I'm flexible</button>

            </div>
        </div>
    )
}

export default Banner
