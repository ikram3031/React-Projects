type UserShape = {
    name: string;
    age: number;
}

const User = ({name} : UserShape) => {
  return (
    <div>{name}</div>
  )
}

export default User