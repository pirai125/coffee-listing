

export default  function Allproducts(props){
    return(
        <div className=" mt-4 w-fit grid grid-cols-1  gap-6 auto-cols-max px-20 py-14 rounded-xl mx-auto sm:max-lg:grid-cols-2 lg:grid-cols-3 bg-shadeblack">
        {
           props.data.map(
              (item) =>( 
                <div key={item.id} className= "w-fit flex flex-col  items-center justify-center">
                   <div className="w-max  p-4 rounded-lg" >
                      <div className="relative">
                        <img src={item.image} alt=""className="rounded-xl" />
                       {item.popular ? <p className="absolute top-2 left-2 text-xs font-bold bg-lightyellow px-3 py-1 rounded-xl">Popular</p> : null }
                      </div>

                      <div>
                        <div className="flex justify-between py-2">
                        <p className="text-white ">{item.name}</p>
                        <p className="bg-lightgreen text-xs font-bold rounded-md px-2 py-1">{item.price}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center">
                          {item.rating === null ? 
                          <img src={props.star} alt="" /> :
                          <img src={props.starfill} alt="" />}
                          <p className="text-white text-sm">{item.rating}</p>
                          {item.votes === 0 ?
                          <p className="text-xs font-bold text-grey px-1">No Ratings</p>:
                          <p className="text-xs font-bold text-grey px-1">({item.votes} votes)</p>}
                        </div>
                        <div>
                          {item.available ? null :<p className="text-red-500 text-sm font-medium ">Sold out</p>}
                        </div>
                      </div>
                   </div>
                </div>
              )
            )
          }
          </div>
    )
    
}