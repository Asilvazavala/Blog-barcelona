import styled from 'styled-components'

export const Modal = ({ children, modal, setModal, titulo='Alerta', handleDelete, el }) => {
  return (
    <div>
     { modal &&
      <Overlay>
        <ContenedorModal>
          
          <EncabezadoModal>
            <h3>{titulo}</h3>
          </EncabezadoModal>

          <BotonCerrar onClick={() => setModal(!modal)}>
              <i className='bx bx-window-close'></i>      
          </BotonCerrar>

          <Main>
            {children}
            <MainButtons onClick={() => setModal(!modal)}>
              <button onClick={() => handleDelete(el.id)}>Aceptar</button>
              <button>Cancelar</button>
            </MainButtons>
          </Main>

        </ContenedorModal>
      </Overlay>
      }
    </div>
  )
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  `;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
  }
`;

const MainButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  button {
    margin: 0 25px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 15px;
    font-size: 15px;
  }
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #333333c1;
  
h3 {
  font-weight: 500;
  font-size: 22px;
  color: #4657c3;
}
`;

const BotonCerrar = styled.button `
  position: absolute;
  top: 25px;
  right: 25px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;

  &:hover {
    color: #9d2c3d;
  }

  i {
    font-size: 24px;
  }
`

