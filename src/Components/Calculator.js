import React, {useState} from 'react'
import Calcule_element from './Number.js'
import Screen_writer from './Screen_writer.js'
import Operator from './Operators.js'
import './Style.css'

let Calculator = () =>{
    let [click, setClick] = useState({
            first_variable:"0",
            second_variable:"0",
            operat:"",
    });

    let ClickHandler = (element) =>{
        element.preventDefault();
        let value = element.target.innerHTML;
        if(click.operat){
            setClick({
                ...click,
                second_variable : (click.second_variable.toString().split("").filter((element)=>element===".").length)?
                String(click.second_variable)+String(value):String(Number(click.second_variable+value)),
            });
        }else{
            setClick({
                ...click,
                first_variable : (click.first_variable.toString().split("").filter((element)=>element===".").length)?
                String(click.first_variable)+String(value):String(Number(click.first_variable+value)),
            })
        }
    }

    let Positive_negative = () =>{
        if(click.operat.length>0){
            setClick({
                ...click,
                second_variable : String((-1)*Number(click.second_variable)),
            });
        }else{
            setClick({
                ...click,
                first_variable : String((-1)*Number(click.first_variable)),
            })
        }
    }

    let Dot_adder = ()=>{
        if(click.operat.length>0){
            setClick({
                ...click,
                second_variable : (click.second_variable.split("").filter((element)=>element===".").length===0)? 
                click.second_variable+"." : click.second_variable,
            });
        }else{
            setClick({
                ...click,
                first_variable : (click.first_variable.split("").filter((element)=>element===".").length===0)? 
                click.first_variable+"." : click.first_variable,
            })
        }
    }

    if(click.first_variable.toString().length>8 || click.second_variable.toString().length>8){
        if(click.operat.length>0){
            let helper_click=click.second_variable;
            setClick({
                ...click,
                second_variable : helper_click.substring(0,helper_click.length-1),
            });
        }else{
            let helper_click=click.first_variable;
            setClick({
                ...click,
                first_variable : helper_click.substring(0,helper_click.length-1),
            });
        }
    }

    let Cleaner = ()=>{
        setClick({
            ...click,
            first_variable:"0",
            second_variable:"0",
            operat:"",
        });
    }

    let Operation = (element) =>{
        
        let value = element.target.innerHTML;
        setClick({
            ...click,
            operat : value,
        });
    }

    let Result = () =>{
        let a = Number(click.first_variable);
        let b = Number(click.second_variable);
        let result=(click.operat==="+")? a+b:
        (click.operat==="-")? a-b:
        (click.operat==="*")? a*b:
        (click.operat==="M")? a%b:
        (click.operat==="/" && b!==0)?(a/b).toFixed(4):
        "Error";
        setClick({
            ...click,
            first_variable:result,
            second_variable:"0",
            operat:"",
        });
    }

    return(
        <>
        <div className="Calculator">
            <Screen_writer value={click.operat ? click.second_variable : click.first_variable}/>
            <div className="Container">
                <div className="Row">
                    <Operator value="C" ClickHandler={Cleaner}/>
                    <button className="Box" onClick={Positive_negative}>+/-</button>
                    <Operator value="M" ClickHandler={Operation}/>
                    <Operator value="+" ClickHandler={Operation}/>
                </div>
                <div className="Row">
                    <Calcule_element value="1" ClickHandler={ClickHandler} />
                    <Calcule_element value="2" ClickHandler={ClickHandler}/>
                    <Calcule_element value="3" ClickHandler={ClickHandler}/>
                    <Operator value="-" ClickHandler={Operation}/>
                </div>
                <div className="Row">
                    <Calcule_element value="4" ClickHandler={ClickHandler}/>
                    <Calcule_element value="5" ClickHandler={ClickHandler}/>
                    <Calcule_element value="6" ClickHandler={ClickHandler}/>
                    <Operator value="*" ClickHandler={Operation}/>
                </div>
                <div className="Row"> 
                    <Calcule_element value="7" ClickHandler={ClickHandler}/>
                    <Calcule_element value="8" ClickHandler={ClickHandler}/>
                    <Calcule_element value="9" ClickHandler={ClickHandler}/>
                    <Operator value="/" ClickHandler={Operation}/>
                </div>
                <div className="Row"> 
                    <Operator value="." ClickHandler={Dot_adder}/>
                    <Calcule_element value="0" ClickHandler={ClickHandler}/>
                    <button className="DoubleBox" onClick={Result}>=</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Calculator;

