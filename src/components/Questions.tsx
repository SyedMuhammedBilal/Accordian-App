import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export interface Props {
  title: string;
  info: string;
}

const Question = ({ title, info }: Props) => {
  return (
    <article className='question'>
      <header>
        <h4> {title} </h4>
        <button className='btn'>btn</button>
      </header>
    </article>
  )
}

export default Question;