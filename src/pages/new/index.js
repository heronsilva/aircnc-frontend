import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';
import './style.css';

export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [tech, setTech] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('tech', tech);
    data.append('price', price);

    await api.post('/spots', data, {
      headers: { user_id }
    })

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={'label-thumbnail ' + (thumbnail ? 'has-thumbnail' : '')}
        style={{ backgroundImage: `url(${preview})` }}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Selecione a imagem" />
      </label>

      <label htmlFor="company">Empresa *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="tech">Tecnologias * <span>(separadas por vírgula)</span></label>
      <input
        id="tech"
        placeholder="Quais tecnologias usam?"
        value={tech}
        onChange={event => setTech(event.target.value)}
      />

      <label htmlFor="price">Valor da diária <span>(deixe em branco se for gratuito)</span></label>
      <input
        id="price"
        placeholder="O valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button className="btn">
        Cadastrar
      </button>
    </form>
  )
}
