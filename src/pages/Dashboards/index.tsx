import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/21247024?s=460&u=ca09edbcbd69515529b68fc34bc6f59619ec7fa7&v=4"
            alt="Rafael"
          />
          <div>
            <strong>Titulo</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/21247024?s=460&u=ca09edbcbd69515529b68fc34bc6f59619ec7fa7&v=4"
            alt="Rafael"
          />
          <div>
            <strong>Titulo</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/21247024?s=460&u=ca09edbcbd69515529b68fc34bc6f59619ec7fa7&v=4"
            alt="Rafael"
          />
          <div>
            <strong>Titulo</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
