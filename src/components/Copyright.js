import React from 'react'

const Copyright = () => {
  return (
    <>
     <footer className="text-center text-white" style={{backgroundColor: "#45637d"}}>
  <div className="container p-4">
    <section className="">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <iframe
              className="shadow-1-strong rounded"
              src="https://youtu.be/LoZaAjC-lDk"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright. All Rights Reserved.
  </div>
</footer> 
    </>
  )
}

export default Copyright
