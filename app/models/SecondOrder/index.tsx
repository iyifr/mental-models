'use client'

import Balancer from 'react-wrap-balancer'
import { SecondOrderAST, useSecondOrderStore } from './store'
import DetailCard from './DetailCard'
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const SecondOrder = () => {
    const data = useSecondOrderStore((state) => state.data)
    return (
        <div className='lg:max-w-7xl md:max-w-5xl max-w-screen-md lg:text-lg text-md px-6 lg:px-4 mx-auto font-light py-12'>
            <Header />

            <Table data={data} />
            {
                data.map((item) => (
                    <p className='my-6'>{item.content}</p>
                ))
            }
        </div>
    )
}

export default SecondOrder


const Header = () => {
    return <>
        <h1 className='lg:text-3xl text-3xl font-bold font-header mb-6'>
            <Balancer>
                Second Order Thinking
            </Balancer>
        </h1>
        <p className='mb-1'>The first column is for listing out your options / actions you could possible take.</p>
        <p>Click on the plus icon to the left of each box to think one step further.</p>
    </>
}

const Table = ({ data }: { data: SecondOrderAST[] }) => {
    return <>
        <div className='overflow-x-auto lg:gap-12 gap-12 lg:max-w-7xl flex flex-row lg:py-12 pt-0 pb-12 my-12'>
            <ActionColumn data={data} />
        </div>
    </>
}

const ActionColumn = ({ data }: { data: SecondOrderAST[] }) => {
    return <div className='flex flex-col gap-4 md:min-w-[380px] min-w-[200px] pl-4'>
        <div className='rounded-[0.9rem] bg-slate-200/50 lg:px-6 lg:py-3 py-2 px-4 text-black inline-flex items-center justify-center whitespace-nowrap'>
            <p className='text-center lg:text-lg text-sm font-medium tracking-wider'>
                <Balancer>
                    List out your options
                </Balancer>
            </p>
        </div>

        <ol className='list-decimal mt-4 lg:mx-1 lg:px-3'>
            <li>
                <DetailCard />
            </li>

            <li>
                <DetailCard />
            </li>


            <li>
                <DetailCard />
            </li>
        </ol>


    </div>
}