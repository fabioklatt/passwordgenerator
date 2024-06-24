export default function Input(props){
    return (

        <input type="number" 
          min={6}
          max={20}
          value={props.size}
          onChange={(ev) => props.setSize(+ev.target.value)}
         />
    )
}