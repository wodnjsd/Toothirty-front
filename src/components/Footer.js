import { ReactComponent as Logo } from '../img/Logo.svg'

function Footer() {
  return (
    <section className="footer">
      <div>
        <Logo />
      </div>
      <hr />
      <div className="credits">
        <div>
          Careers
        </div>
        <div>
          Contacts
        </div>
        <div>
          FAQ
        </div>

      </div>
      <br />

      <div className="credits2">
        
        2022 2:30 Ltd. All rights reserved
        
      </div>

    </section>
  )
}

export default Footer