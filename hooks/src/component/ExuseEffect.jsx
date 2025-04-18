import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState(``);
    const [nickname, setNickname] = useState(``);
    // start useEffect
    useEffect(() => {
      console.log(`Rendering start!!`);
      console.log({
        name,
        nickname
      });
    },[]);
    // end useEffect
   
    const onChangeName = e => {
      setName(e.target.value);
    };
  
    const onChangeNickname = e => {
      setNickname(e.target.value);
    };
  
    return (
        <div>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            <b>이름:</b> {name}
          </div>
          <div>
            <b>닉네임:</b> {nickname}
          </div>
        </div>
      </div>
    )
  };
  
  export default Info;