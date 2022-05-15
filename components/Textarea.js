import styled from '../styles/Input.module.css'

export default function Textarea({ name, type, desc }) {
  return (
    <>
    <label className={styled.FormLabel} htmlFor={name}>{desc}</label>
    <textarea className={styled.FormTextarea} name={name} type={type} required></textarea>
    </>
  )
}