import './States.css';
const States = (props) => {
    const newInf = props.stNewInfected;
    let output = null;
    if (newInf >= 0) {
        output = (
            <td className="danger">{ newInf }</td>
        )
    } else {
        output = (
            <td className="success">{ -newInf }</td>
        )
    }

    return (
        <tbody>
            <tr>
                <td>{ props.state }</td>
                <td>{ props.stTotalInfected }</td>
                <td className="primary">{ props.stActiveCases }</td>
                { output }
                {/* <td className="danger">{ props.stNewInfected }</td> */ }
                <td className="success" >{ props.stRecovered }</td>
                <td className="success">{ props.stNewRecovered }</td>
                <td>{ props.stDeceased }</td>
                <td>{ props.stNewDeceased }</td>

            </tr>

        </tbody>
    );
}
export default States;