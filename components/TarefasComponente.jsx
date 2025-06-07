import { useState } from 'react';
import './Tarefas.css'

const TarefasComponente = () => {
    // Array de tarefas
    const [tarefas, setTarefas] = useState([])

    const [valorInserido, setValorInserido] = useState("");

    const enviarTarefa = (e) => {
        e.preventDefault;
        if(valorInserido.trim() !== ""){
            const novaTarefa = {
                id: Date.now(),
                text: valorInserido
            }
            setTarefas((antigoTarefas) => [...antigoTarefas, novaTarefa]);
            setValorInserido("");
        }
    };

    return <div className='principal'>
        {/* Título */}
        <h3 className='titulo'>Lista de tarefas</h3>
        {/* Formulário para adicionar tarefas */}
        <form onSubmit={enviarTarefa} className='formulario'>
            <input type="text" 
            placeholder='Adicionar tarefa' 
            value={valorInserido}
            onChange={(e) => setValorInserido(e.target.value)}
            className='campo-input'/>
            <button type='submit' className='bt-adicionar'>Adicionar</button>
        </form>
        {/* Listar tarefas */}
        {tarefas.length === 0 && <p className='tarefa-vazia'>Não há tarefas.</p>}
        <ul className='lista-de-tarefas'>
            {
                tarefas.map((tarefas) => (
                    <li key={tarefas.id} className='item-tarefa'>
                        {tarefas.text}
                        <button className='bt-remover'>Remover</button>
                    </li>
                ))
            }
        </ul>
    </div>
};

export default TarefasComponente