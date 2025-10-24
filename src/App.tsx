import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DepartmentCategory } from './components/DepartmentCategory';
import { MedicalServices } from './components/MedicalServices';
import { TrustedProvider } from './components/TrustedProvider';
import { Doctors } from './components/Doctors';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DepartmentCategory />
      <MedicalServices />
      <TrustedProvider />
      <Doctors />
      <About />
      <Reviews />
      <Contacts />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
