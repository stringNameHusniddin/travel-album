interface service {
    title: string,
    body: string
}

const services: service[] = [
    {
        title: 'Umumiy',
        body: "Avtoturargoh, Bepul to'xtash joyi, Sport va dam olish Piyoda sayr qilish, Velosipedda sayr qilish"
    },
    {
        title: 'Pullik xizmatlar',
        body: "Ekskursiya  yoki mahalliy madaniyat haqida dars Oziq-ovqat va ichimliklar Restoran"
    },
    {
        title: 'Qabul qilish',
        body: "Tez ro'yxatdan o'tish/chiqish, bagajni saqlash, shaxsiy ro'yxatdan o'tish/chiqish, hisob-faktura taqdim etiladi"
    },
    {
        title: 'Jamoat joylari',
        body: "Bog ', teras, quyosh palubasi Isitish, Allergiyasiz xona, Maxsus chekish joylar"
    },
]

const Services = () => {
    return (
        <div className="flex items-center justify-center w-full h-full max-[711px]:mb-[140px]">
            <div className="w-11/12 xl:w-8/12 flex flex-wrap gap-x-5  justify-center items-center h-[580px] max-[710px]:gap-3">
                {
                    services.map(mal => (
                        <div key={mal.title} className="w-[310px] p-5 bg-white rounded-md shadow-2xl">
                            <p className="text-purple-500 text-[24px] mb-2">{mal.title}</p>
                            <p>{mal.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services