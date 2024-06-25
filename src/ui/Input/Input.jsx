import styles from './Input.module.scss';

export const Input = ({children, placeholder, type, backgroundColor, checked, onChange}) => {
  return (
    <input checked={checked} onChange={onChange} type={type} placeholder={placeholder} style={{ backgroundColor: backgroundColor}}  value={children} />
  )
}