import Link from 'next/link'

export default function Home() {
  const val = 124;
  return (
    <>
      <div>
        Hello
        <Link href={`/lobby/${val}`}>
        </Link>
      </div>
    </>
  )
}
