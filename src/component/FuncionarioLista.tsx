import { useState } from "react";
import { IFuncionario } from "./Funcionario.type";
import "./FuncionarioLista.style.css"
import FuncionarioModal from "./FuncionarioModal";

type Props = {
    lista: IFuncionario[]
    onDeleteClickHnd: (data: IFuncionario) => void;
    onEdit: (data: IFuncionario) => void;
};

const FuncionarioLista = (props: Props) => {
    const { lista, onDeleteClickHnd, onEdit } = props;
    const [showModal, setShowModal] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as IFuncionario | null);

    const viewFuncionario = (data: IFuncionario) => {
        setDataToShow(data)
        setShowModal(true)
    };
    const onCloseModal = () => setShowModal(false);
    
    return (

        <div>
            <article>
                <h3 className="list-header">Funcionários</h3>
            </article>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {lista.map((funcionario) => {
                    return (
                    <tr key={funcionario.id}>
                        <td >{`${funcionario.primeiroNome} ${funcionario.segundoNome}`}</td>
                        <td >{funcionario.email}</td>
                        <td>
                            <div>
                                <input type="button" value="Ver" onClick={() => viewFuncionario(funcionario)} />
                                <input type="button" value="Editar" onClick={() => onEdit(funcionario)} />
                                <input type="button" value="Deletar" onClick={() => onDeleteClickHnd(funcionario)}/>
                            </div>
                        </td>
                    </tr>
                    );
                })}
            </table>
            {showModal && dataToShow !== null && <FuncionarioModal onClose={onCloseModal} data={dataToShow}/>}
        </div>
    );
};

export default FuncionarioLista;
