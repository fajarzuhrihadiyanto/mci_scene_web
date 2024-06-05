import Chamber from "./Chamber"
import Robot from "./Robot"

const ChamberRobotArea = ({ nodes, materials }) => {
    return (
        <>
            <Chamber nodes={nodes} materials={materials} />
            <Robot nodes={nodes} materials={materials} />
        </>
    )
}

export default ChamberRobotArea