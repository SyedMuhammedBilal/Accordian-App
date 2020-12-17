import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export interface Props {
  title: string;
  info: string;
}

const Question = ({ title, info }: Props) => {

  const [showInfo, setShowInfo] = useState<Boolean>(false);

  return (
    <article className='question'>
      <header>
        <h4> {title} </h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {
            showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </header>
      {
        showInfo && <p> {info} </p>
      }
    </article>
  )
}

export default Question;