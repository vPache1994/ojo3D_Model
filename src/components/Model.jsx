import { styles } from '../styles'
import  Three  from './Three'




const Model = () => {

    return(

        <>
             <section className='relative w-full h-screen mx-auto flex'>
                <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex justify-center items-start gap-5`} id="container3d">
                    <Three/>
                </div>
             </section>
        </>

    )


}

export default Model