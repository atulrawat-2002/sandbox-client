import usePing from "../../hooks/apis/queries/usePing"

const PingComponenet = () => {

  const {isLoading, isError, res} = usePing()

 return <>
    hello{res}
 </>

}

export default PingComponenet;