const NavBar = ()=>{
    return(
        <header>
    <div className=" pt-[1rem] pl-[1rem] sm:pt-[0.3rem] ">
 <div>
    {/* logo */}
    <img className="md:h-[4.2rem] md:w-[4.2rem] sm:h-[3.3rem] sm:w-[3.3rem]" alt='logo' src='https://skyex.me/logo.png'></img>
 </div>
 <div >
<div className="md:hidden">
<i class="fa-solid -mt-10 mr-4 text-xl text-white float-right fa-bars"></i>
</div>
<div className="md:flex	 -mt-12 float-right  sm:hidden">
<div className="text-md p-3 mr-3 cursor-pointer text-white ">
    Sign in
    </div>
    <div className=" border rounded-lg cursor-pointer p-3 mr-4 text-md text-white ">
    Sign up
    </div>

</div>
 </div>
  </div>
</header>
    )
}
export default NavBar;