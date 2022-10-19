import { useSelector } from "react-redux"

export function Edit() {
    const editData = useSelector((state) => state.user.editValues);

    const [editValue, setEditValue] = useState(editData)

    function handleChange(obj) {
        setEditValue((prev) => {
            return { ...prev, ...obj }
        })
    }    
    
    return <>
        <input onChange={(e) => handleChange({ name: e.target.value })} value={editValue.name} />
        <input onChange={(e) => handleChange({ family: e.target.value })} value={editValue.family} />
        <input onChange={(e) => handleChange({ age: e })} value={editValue.age} />
        <input onChange={(e) => handleChange({ size: e })} value={editValue.size} />
        <input onChange={(e) => handleChange((date, dateString) => handleChange({ birthday: dateString }))} value={editValue.birthday} />
        <input onChange={(e) => handleChange({ city: e.target.value })} value={editValue.city} />
        
    </>
}