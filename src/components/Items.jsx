function Items({data}) {
  return (
    <div className="row ">
      {
        data.map((value) => {
          const {id, image} = value;
          return (
            <div className="col-sm-3 my-3" key={id}>
              <div className="myPhoto">
                <img src={image} className="w-100 h-100" style={{height: "200px"}}/>
                <div className="label text-white">Logo Design</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Items;