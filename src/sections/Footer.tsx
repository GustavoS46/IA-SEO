import Logo from '@/assets/logo.svg';
import Xsocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
          <div className='flex gap-2 items-center'>
            <Logo className='h-6 w-6' />
            <div className='font-medium'>Página de destino à inicialização da IA</div>
          </div>   
          <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
            <a 
              href="#"  
              className='text-white/70 hover:text-white text-xs md:text-sm transition'
            >
              Recursos 
            </a>
            <a 
              href="#" 
              className='text-white/70 hover:text-white text-xs md:text-sm transition'
            >
              Desenvolvedores 
            </a>
            <a  
              href="#"  
              className='text-white/70 hover:text-white text-xs md:text-sm transition'
            >
              Preço 
            </a>
            <a 
              href="#" 
              className='text-white/70 hover:text-white text-xs md:text-sm transition'
            >
              Novidades 
            </a>
          </nav>
          <div className='flex lg:flex-1 gap-5 lg:justify-end'>
            <Xsocial  
              className='text-white/40 hover:text-white md:text-sm transition' />
            <InstaSocial  
              className='text-white/40 hover:text-white md:text-sm transition' />
            <YTSocial 
            className='text-white/40 hover:text-white md:text-sm transition' />
          </div>
        </div>
        <p className='flex justify-center gap-6 mt-6'>&copy; 2024 Gustavo Silva. Todos os direitos reservados.</p>
      </div> 
    </footer>
  );
};
