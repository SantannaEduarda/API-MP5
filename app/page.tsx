import Header from '../components/Header';
import Hero from '../sections/Hero';
import CoursesSection from '../sections/CoursesSection';
import MaterialsSection from '../sections/MaterialsSection';
import Footer from '../components/Footer';



export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24 px-4 sm:px-8">
        <Hero />
        <CoursesSection />
        <MaterialsSection />
      </main>
      <Footer />
    </>
  );
}
