import '../App.css'
function Body(prop) {
    return(
        <div>
        {
          prop.data.map(image=>{
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