import { HeroSection } from '../components/hero-section.component.tsx';

export const Homepage = () => {
  return (
    <div className='w-screen h-screen flex bg-center bg-no-repeat bg-fixed bg-cover bg-opacity-60' style={{backgroundImage: 'url(/src/assets/images/background.jpg)'}}>
      <div className='w-full h-full'>
        <HeroSection />
      </div>
    </div>
  );
};