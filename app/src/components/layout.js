import Nav from './navbar'

export default function Layout({ children }) {
  return (
    <>
    <Nav />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
    </>
  )
}
