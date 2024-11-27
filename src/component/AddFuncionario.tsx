import {useState} from 'react';
import "./FuncionarioForm.style.css"
import { IFuncionario } from './Funcionario.type';

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IFuncionario) => void;
}
const AddFuncionario = (props: Props) => {

    const [primeiroNome, setPrimeiroNome] = useState("");
    const [ultimoNome, setUltimoNome] = useState("");
    const [Email, setEmail] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

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
        const data: IFuncionario = {
            id: new Date().toJSON().toString(),
            primeiroNome: primeiroNome,
            segundoNome: ultimoNome,
            email: Email
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
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
                    <input type="submit" value="Adicionar Funcionario" />
                </div>
            </form>
        </div>
    )
};

export default AddFuncionario;