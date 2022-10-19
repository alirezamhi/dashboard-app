export function Button(props) {
    return <>
        <button className={`btn btn-${props.className} btn-sm`} onClick={props.onClick}>{props.children}</button>
    </>
}