import { IFuncionario } from "./Funcionario.type";
import "./FuncionarioModal.style.css"

type Props = {
    onClose: () => void
    data: IFuncionario
};


const FuncionarioModal = (props: Props) => {
    const{onClose, data} = props
    return <div id="myModal" className="modal">
        <div className="modal-content"> 
            <span className="close" onClick={onClose}>&times;</span>
            <h3>Funcionario data</h3>
            <div>
                <label>Primeiro Nome: {data.primeiroNome}</label>
            </div>
            <div>
                <label>Segundo Nome: {data.segundoNome}</label>
            </div>
            <div>
                <label>Email: {data.email}</label>
            </div>
        </div>
    </div>
};

export default FuncionarioModal;