import { useEffect, useState } from "react";
import { IFuncionario, PageEnum } from "./Funcionario.type";
import FuncionarioLista from "./FuncionarioLista";
import AddFuncionario from "./AddFuncionario";
import "./Home.style.css";
import EditFuncionario from "./EditFuncionario";

const Home = () => {

    const [funcionarioLista, setFuncionarioLista] = useState([] as IFuncionario[]);
    const [shownPage, setShownPage] = useState(PageEnum.lista)
    const [dataToEdit, setDataToEdit] = useState({} as IFuncionario);

useEffect(() => {
    const listInString = window.localStorage.getItem("FuncionarioLista")
    if (listInString) {
        setFuncionarioLista(JSON.parse(listInString));
    }
}, [])

    const onAddFuncionarioClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListaPagina = () => {
        setShownPage(PageEnum.lista);
    }

    const _setFuncionarioLista = (lista: IFuncionario[]) => {
        setFuncionarioLista(lista);
        window.localStorage.setItem("FuncionarioLista", JSON.stringify(lista));
    }

    const addFuncionario = (data: IFuncionario) => {
        setFuncionarioLista([...funcionarioLista, data]);
    };

    const deleteFuncionario = (data: IFuncionario) => {

        const indexToDelete = funcionarioLista.indexOf(data);
        const tempList = [...funcionarioLista];

        tempList.splice(indexToDelete, 1);
        setFuncionarioLista(tempList)
    };

    const EditFuncionarioData = (data: IFuncionario) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);

    };

    const updateData = (data: IFuncionario) => {
        const filteredData = funcionarioLista.filter(x => x.id === data.id)[0];
        const indexOfRecord =funcionarioLista.indexOf(filteredData)
        const tempData = [...funcionarioLista]
        tempData[indexOfRecord] = data;
        setFuncionarioLista(tempData)
    };

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React: aplicação simples</h1>
                </header>
            </article>

            <section className="section-content">
                {shownPage === PageEnum.lista && (
                    <>
                        <input type="button" value="Adicionar Funcionário" onClick={onAddFuncionarioClickHnd}
                            className="add-funcionario-btn"
                        />
                        <FuncionarioLista lista={funcionarioLista} onDeleteClickHnd={deleteFuncionario}
                        onEdit={EditFuncionarioData}/>
                    </>
                )}

                {shownPage === PageEnum.add && <AddFuncionario onBackBtnClickHnd={showListaPagina} onSubmitClickHnd={addFuncionario} />}

                {shownPage === PageEnum.edit && <EditFuncionario data={dataToEdit} onBackBtnClickHnd={showListaPagina} onUpdateClickHnd={updateData}/>}
            </section>
        </>
    );
};

export default Home;