import Icon from "./Icon";
import Button from "./Button";
import Fill from "./Fill";

export default function Background() {
  return (
    <>
      <div className="gaps">
      <div className="background">
          
            <div className="background__right">
              <div className="background__icon">
              <img src="navigator/fly.svg" alt="fly" />
              </div>

              <div className="background__icon">
              <img src="navigator/cinema.svg" alt="fly" />
              </div> 


            </div>
            <div className="background__left">

            <div className="background__icon">
              <img src="navigator/bell.svg" alt="bell" />
              </div>

              <div className="background__icon">
              <img src="navigator/profile.svg" alt="profile" />
              </div> 


            </div>
         
          </div>  
      <img className="bg" src="navigator/bg.png" alt="bg" />
      <Icon />
      <Button />
      <Fill />
      </div>
      
    
    
    </>
  )
}
