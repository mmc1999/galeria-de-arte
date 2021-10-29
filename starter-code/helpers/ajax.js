export async function apiFetch(props) {
    let {cbSuccess} = props;
    try {
        let res = await fetch("./data.json"),
            data = await res.json();
        cbSuccess(data);
    } catch (error) {
        console.log(error)
    }
}