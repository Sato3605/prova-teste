import { useState } from "react";
import { IFuncionario } from "./Funcionario.type";
import "./FuncionarioForm.style.css";

type Props = {
    onBackBtnClickHnd: () => void;
    data: IFuncionario;
    onUpdateClickHnd: (data: IFuncionario) => void;
}

const EditFuncionario = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [primeiroNome, setPrimeiroNome] = useState(data.primeiroNome);
    const [ultimoNome, setUltimoNome] = useState(data.segundoNome);
    const [Email, setEmail] = useState(data.email);

    const onPrimeiroNomeChangeHnd = (e: any) => {
        setPrimeiroNome(e.target.value)
    };
    const onUltimoNomeChangeHnd = (e: any) => {
        setUltimoNome(e.target.value)
    };
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    };

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updateData: IFuncionario = {
            id: data.id,
            primeiroNome: primeiroNome,
            segundoNome: ultimoNome,
            email: Email
        }
        onUpdateClickHnd(updateData);
        onBackBtnClickHnd();
    };

    return         <div className="form-container">
    <div>
        <h3>Formulario de Adicionar Funcionário</h3>
    </div>
    <form onSubmit={onSubmitBtnClickHnd}>
        <div>
            <label>Primeiro Nome : </label>
            <input type="text" value={primeiroNome} onChange={onPrimeiroNomeChangeHnd} />
        </div>
        <div>
            <label> Ultimo Nome.  : </label>
            <input type="text" value={ultimoNome} onChange={onUltimoNomeChangeHnd}/>
        </div>
        <div>
            <label>Endereço Email : </label>
            <input type="text" value={Email} onChange={onEmailChangeHnd}/>
        </div>
        <div>
            <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
            <input type="submit" value="Atualizar Funcionario" />
        </div>
    </form>
</div>
};

export default EditFuncionario;
