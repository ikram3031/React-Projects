

const Button = ({label, onClick, disabled}: {
    label: string;
    onClick: () => void;
    disabled: boolean
}) => {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button