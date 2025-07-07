import ThreeLogoParticles from "../components/three-logo-particles"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <ThreeLogoParticles />
      <Footer />
    </main>
  )
}
