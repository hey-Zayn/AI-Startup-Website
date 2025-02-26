import { DatabaseBackup } from 'lucide-react'
import Effort from "../../assests/Efforts.png"

const Efforts = () => {
  return (
    <>
        <div className='w-full h-full px-10 py-10' style={{
                backgroundImage: `url(${Effort})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
        
        <div className='w-full mb-10'>
            <h1 className='text-white/90 text-6xl max-sm:text-3xl max-sm:font-semibold'>Elevate your <br className='max-sm:hidden'/> SEO efforts.</h1>
        </div>
        
        <div className='w-full flex flex-wrap max-sm:gap-6 items-center  '> 
          <div className='w-[33%] max-sm:w-full flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> User-friendly dashboard</h2>
                <p className='text-white/50 text-lg'>Perform complex SEO audits and <br className='max-sm:hidden'/> optimizations with a single click.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> Content evaluation</h2>
                <p className='text-white/50 text-lg'>Simple corrections for immediate <br className='max-sm:hidden'/> improvemens.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> Link Optimization Wizard</h2>
                <p className='text-white/50 text-lg'>Guides you through the process <br className='max-sm:hidden'/> of creating and managing links.</p>
              </div>
          </div>
          <div className='w-[33%] max-sm:w-full flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> User-friendly dashboard</h2>
                <p className='text-white/50 text-lg'>Perform complex SEO audits and <br className='max-sm:hidden'/> optimizations with a single click.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> Content evaluation</h2>
                <p className='text-white/50 text-lg'>Simple corrections for immediate <br className='max-sm:hidden'/> improvemens.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> Link Optimization Wizard</h2>
                <p className='text-white/50 text-lg'>Guides you through the process <br className='max-sm:hidden' /> of creating and managing links.</p>
              </div>
          </div>
          <div className='w-[33%] max-sm:w-full flex flex-col gap-10'>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> User-friendly dashboard</h2>
                <p className='text-white/50 text-lg'>Perform complex SEO audits and <br className='max-sm:hidden'/> optimizations with a single click.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> Content evaluation</h2>
                <p className='text-white/50 text-lg'>Simple corrections for immediate <br className='max-sm:hidden'/> improvemens.</p>
              </div>
              <div className='flex flex-col gap-1'>
                <h2 className='text-white/90 text-xl flex items-center gap-1'><DatabaseBackup size={20}/> Link Optimization Wizard</h2>
                <p className='text-white/50 text-lg'>Guides you through the process <br className='max-sm:hidden'/> of creating and managing links.</p>
              </div>
          </div>
        </div>
        </div>
    </>
  )
}
 
export default Efforts