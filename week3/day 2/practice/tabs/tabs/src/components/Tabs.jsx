import React from 'react';
import { useState } from 'react';

const Tabs = (props) =>{
    const {tabs,setTabs} = props
    const [text,setText] = useState(tabs[0].content) 
    const [currentTab,setCurrentTab] = useState(0)
    const tabChange=(i)=>{
        setCurrentTab(i)
        setText(tabs[i].content)
    }
    const saveChanges = (value)=>{
        setText(value)
        tabs[currentTab].content=value
        setTabs(tabs)
    }
    return(
        <div>
            {tabs.map((t,i)=>(
            <button onClick={()=>tabChange(i)}>{t.label}</button>
            
            ))}
            <div>
                <textarea onChange={e => saveChanges(e.target.value) } cols="30" rows="10" value={text}></textarea>
            </div>
        </div>
    )

}
export default Tabs