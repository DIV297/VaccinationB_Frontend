import React from 'react'

const Copyright = () => {
  return (
    <>
<footer className="bg-dark text-center text-white">
 
  <div className="container p-4">
    <section className="mb-4"> <p>Contact developer</p>
      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://www.facebook.com/divansh.bajaj/" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://www.instagram.com/divansh_bajaj_/" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://www.linkedin.com/in/divansh-bajaj-208463212/" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" target='_blank' href="https://github.com/DIV297" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>

    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for new updates</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" htmlFor="form5Example21">Email address</label>
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

    <section className="mb-4">
      <p>
      The best means of staying healthy is to avoid infection by the SARS-CoV-2 virus. If, however, you do become infected, vaccination appears to limit the risk of developing severe or even fatal symptoms.Vaccination typically results in fewer or milder symptoms when you’re ill (or no symptoms at all).
      </p>
    </section>

    
  </div>

  <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2);"}}>
    © 2023 Copyright : All Rights Reserved.
  </div>
</footer>
    </>
  )
}

export default Copyright
