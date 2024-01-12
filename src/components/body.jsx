import lake from "../image/lake.JPG";
import "..App.css"
function Body() {
    const imageData = [
        {
          id:1,
          img:lake 
        },
        {
          id:2,
          img:lake
        },
        {
          id:3,
          img:lake
        },
        {
          id:4,
          img:lake
        }
      ]
      
    return(
        <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    )
    
}
export default Body