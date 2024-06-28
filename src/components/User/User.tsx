import { TPops } from "../../pages/MainPage/MainPage"

interface TypeName {
    info: TPops
}



const User = ({info}: TypeName) => {
  return (
    <div>
        {info.name}
        {info.username}
        {info.email}
        {info.email}
    </div>
  )
}

export default User