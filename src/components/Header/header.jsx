import moment from 'moment/moment'
import logo from '../../../src/assets/logo.png'

export default function Header() {
  return (
    <div>
      <h1>this is Header section</h1>
       <div className=' flex flex-col items-center'>
        <img src={logo} alt="" />
        <h2>Journalism Without Fear or Favour</h2>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
       </div>
    </div>
  )
}
