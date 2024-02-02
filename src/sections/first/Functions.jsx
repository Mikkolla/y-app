import Hotel from "./icons/Hotel";
import Train from "./icons/Train";
import Car  from "./icons/Car";
import Flight from "./icons/Flight";

export default function Functions() {
  return (
    
      <div className="functions">
        <div className="functions__block">
          
          
          <div className="functions__bg">
            <Flight />
          </div>

        <div className="functions__desc">
        Flight
        </div>



        </div>

        <div className="functions__block">
          
          
          <div className="functions__bg">
          <Hotel />
            
          </div>

        <div className="functions__desc">
          Hotel
        </div>



        </div>

        <div className="functions__block">
          
          
          <div className="functions__bg">
          <Car />
            
          </div>

        <div className="functions__desc">
            Car
        </div>



        </div>

        <div className="functions__block">
          
          
          <div className="functions__bg">
          <Train />
          </div>

        <div className="functions__desc">
          Train
        </div>



        </div>
      </div>
    
  )
}
