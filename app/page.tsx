import React from "react"
import Button from "./components/Button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-9 lg:p-24 p-8">
      <p className="text-4xl font-header font-bold">Practice mental models to make you a clearer thinker!</p>
      <Info />
    </main>
  )
}


const Info = () => {
  return <section>
    <h2 className="font-header md:text-2xl text-xl">Mental Model #1 : Second Order Thinking</h2>
    <p className="mt-1"></p>
    <p className="text-md font-light">Forces you to dig beneath the surface to anticipate problems, future bottlenecks and make long-term thinking, default.</p>

    <Link href={'/practice/second-order-thinking'}>
      <Button className="bg-black text-white py-3 px-6 my-4">Practice Second Order Thinking</Button>
    </Link>
  </section>
}
