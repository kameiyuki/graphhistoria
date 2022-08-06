import classNames from 'classnames'
import { useState } from 'react'

const Card = (props) => {
    const card=classNames("mt-3","mb-1")
    const card_row=classNames("row","card-row")
    const button_css=classNames("mt-3","mb-3")
    const label=classNames("col-2","text-right","card-label")
    const input=classNames("col-10","text-left","card-input")
    const input_number=classNames("col-3","text-left","card-input")

    const handleChange=(item,index) =>{
        return function(event){
            props.Event[index][item]=event.target.value
            props.setEvent([...props.Event])
            console.log(props.Event[index][item])
        }
    }

    console.log(props.Event)

    return (
        <div>
            <div>
            { props.Event.map((todo,index)=>(
                <div key={ index }>
                    <p>{todo.button}</p>
                    {todo.button && <button className={button_css}>出来事を追加する</button>}
                    <div className={card_row}>
                        <span className={label}>年齢</span>
                        <span className={input_number}>
                            <input defaultValue={todo.age} 
                            type="number" 
                            className="form-control" 
                            placeholder="詳細"
                            onChange={handleChange("age",index)}></input>
                        </span>
                    </div>
                    <div className={card_row}>
                        <span className={label}>出来事</span>
                        <span className={input}> 
                            <input defaultValue={todo.incident} 
                            type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("incident",index)}></input>
                        </span>
                    </div>            
                    <div className={card_row}>
                        <span className={label}>幸福度</span>
                        <span className={input_number}>
                            <input defaultValue={todo.happiness} 
                            type="number" className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("happiness",index)}></input>
                        </span>
                    </div>
                    <div className={card_row}>
                        <span className={label}>なぜそう思う</span>
                        <span className={input}>
                            <input type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("feeling",index)}></input>
                        </span>
                    </div>
                </div>
            ))}
            </div>
        </div>
  );
}

export default Card;
