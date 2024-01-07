import React from "react"
import Button from "./components/Button"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-center gap-6 lg:p-24 p-8">
      <h1 className="lg:text-5xl text-3xl font-header font-bold">Think clearly with powerful mental models!</h1>
      <p className="text-lg font-light max-w-lg mx-auto">Make better decisions, manage time wisely,  and improve overall thinking ability by practicing mental models</p>
      <Info />
    </main>
  )
}


const Info = () => {
  return <section className="mt-6 lg:mx-7">
    <h2 className="font-header md:text-2xl text-2xl font-medium">
      <Balancer>
        #1 - Second Order Thinking
      </Balancer>
    </h2>
    <p className="text-md font-light max-w-lg mx-auto my-4">
      <Balancer>
        Dig beneath the surface to anticipate problems and future bottlenecks. Make long-term thinking your default.
      </Balancer>
    </p>

    <Link href={'/practice/second-order-thinking'}>
      <Button className="bg-black text-white py-3 px-6 my-4">Practice Second Order Thinking</Button>
    </Link>
  </section>
}
