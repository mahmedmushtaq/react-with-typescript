import React,{useRef} from "react";


type PropTypes = {
    onAddTodo:(text:string)=>void;
}

const AddTodo:React.FC<PropTypes> = (prop)=>{
    const ref = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event:React.FormEvent)=>{
        event.preventDefault();
        const value = ref.current!.value;
         prop.onAddTodo(value);

    }
    return(
        <div>
            <form onSubmit={todoSubmitHandler}>
                <input type="text" ref={ref}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo;