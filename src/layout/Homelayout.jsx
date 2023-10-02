
import Footer from "../components/Footer";
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai';

function Homelayout({children}){

//width of the side menu set to the auto
function changewidth(){
    const drawerSide=document.getElementsByClassName("drawer-side");
    if(drawerSide.length>0){
    drawerSide[0].style.width="auto";
}
}

function hideDrawer(){
    const element=document.getElementsByClassName("drawer-toggle");
    element[0].checked=false;

    const drawerside=document.getElementsByClassName("drawer-toggle");
    drawerside[0].style.width='0';

}




    return(

        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <label htmlFor="ny-drawer">
                        <FiMenu onClick={changewidth} size={"32px"} className="font-bold text white m-4"/>
                    </label>
                </div>
                <div className="drawer-side w-3">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                      <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={24}/>
                        </button>
                       </li>   
                    <ul className="menu p-4 w-48 sn:w-80 bg-base200 text-base-content relative">
                             
                       
                       <li>
                        <Link to="/">
                            Home
                        </Link>
                        </li>
                        
                         <li>
                        <Link to="/about">
                            About us
                        </Link>
                        </li>  
                        
                         <li>
                        <Link to="/contact">
                         Contect
                        </Link>
                        </li>
                         
                         <li>
                        <Link to="/courses">
                        All courses
                        </Link>
                        </li> 
                    </ul>
                </div>

            </div>
        {children}
        <Footer />
        </div>
       
    )
}


export default Homelayout;
