
import styled from '../styles/Input.module.css'

export default function Input({ name, type, desc }) {
  return (
    <>
    <label className={styled.FormLabel} htmlFor={name}>{desc}</label>
    <input className={styled.FormInput} name={name} type={type} required/>
    </>
  )
}