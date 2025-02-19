
const Footer = () => {

  var a = new Date();
  const year = a.getFullYear();

  return (
    <>
      <div className='mx-32 border-b-1 border-neutral-500'>
        <h3 className='uppercase text-4xl pb-10 font-bold text-green-500'>Feel Great. <span className='text-white'>Body and Mind.</span></h3>
      </div>
      <div className='text-2xl flex justify-between text-white/90 font-semibold  my-5 mx-32'>
        <h3>+484537844289</h3>
        <h3>quzenit@gmail.com</h3>
        <h3>Toronto City in Canada.</h3>
      </div>
      <div className='flex justify-between items-center px-10 pb-5'>
        <p className='text-neutral-600 text-xs ' >All Copyright Reserved @FlexFlow {year} </p>
        <p className='text-neutral-600 text-xs'>Made by <a className='hover:scale-125 hover:font-bold ease-in-out duration-200 hover:underline' href="https://lokeshkummar.vercel.app">this guy.❤️</a></p>
      </div>
    </>
  )
}

export default Footer