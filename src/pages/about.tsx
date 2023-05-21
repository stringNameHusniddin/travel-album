import React from 'react'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

interface teamI {
  name: string
  who: string
  span: string
  image: string
}

const team: teamI[] = [
  {
    name: 'Esanov Javohir',
    who: 'Loyiha texnik menjiri',
    span: '(cot)',
    image: user1
  },
  {
    name: 'Jumaqulov Ozod',
    who: 'Loyiha bosh menjiri',
    span: '(coo)',
    image: user2
  },
  {
    name: 'Narzullayev Jasur',
    who: 'Loyiha texnik menjiri',
    span: '(cot)',
    image: user3
  },
]

const About = () => {
  return (
    <div className='flex flex-col min-h-full mb-[100px] px-5'>
      <h1 className='w-full text-center text-[40px] mb-20'>Jamoa tarkibi</h1>
      <div className='flex max-[1000px]:flex-col gap-16 w-full'>
        <div className='flex flex-wrap items-center justify-center gap-5 max-[1000px]:w-full'>
          {team.map(mal => (
            <div className='w-[310px] bg-white shadow-lg rounded-md' key={mal.name}>
              <img className='w-full rounded-t-md object-cover' src={mal.image} alt="" />
              <div className='px-3 py-4'>
                <p className='text-red-400 mb-3'>{mal.name}</p>
                <p>{mal.who} <span>{mal.span}</span></p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className='text-red-400 text-[26px] mb-3'>Camping-Uz maqsadlari.</p>
          <ul>
            <li>1. Jahon andozalariga mos sifatli xizmat ko`rsatiladi</li>
            <li>2. Mahalliy aholi ish bilan ta`minlanadi</li>
            <li>3. Xalqaro turistlar ko`payishi ortidan respublikamiz iqtisodi ham foyda ko`radi </li>
            <li>4. Turistik destinatsiyasining infratuzilmasi rivojlanadi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About